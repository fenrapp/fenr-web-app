import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { mkdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Run locally with cwebp installed. Generated assets are committed, so production
// builds need neither an image service nor a native encoder.
const root = fileURLToPath(new URL('../', import.meta.url));
/** @type {Array<[string, string, number[]]>} */
const screens = [
  ['dashboard-riding', 'png', [640, 1280, 2622]],
  ['dashboard-charging', 'png', [640, 1280, 2622]],
  ['navigation', 'png', [640, 1280, 2622]],
  ['live-activity', 'png', [480, 720, 1154]],
  ...[
    'dashboard-cards',
    'battery-health',
    'battery-cells',
    'power-modes',
    'ride-history',
    'maintenance',
    'diagnostics',
  ].map((name) => /** @type {[string, string, number[]]} */ ([
    name,
    'png',
    [360, 480, 720],
  ])),
];
/** @type {Array<[string, string, number[]]>} */
const images = [
  ...screens.flatMap(([name, extension, widths]) =>
    ['light', 'dark'].map(
      (theme) => /** @type {[string, string, number[]]} */ ([
        `${name}-${theme}`,
        extension,
        widths,
      ]),
    ),
  ),
  // watchOS uses its native black interface in both website appearances.
  ['watch-charging', 'png', [256, 416]],
  ['fenr-icon-light', 'png', [96, 256]],
  ['fenr-icon-dark', 'png', [96, 256]],
  ['trail', 'jpg', [640, 922]],
  ['fenr-ride-loop-poster-light', 'png', [640, 1280]],
  ['fenr-ride-loop-poster-dark', 'png', [640, 1280]],
];
const previous = JSON.parse(
  await readFile(`${root}app/optimized-media.json`, 'utf8'),
);
const previousFiles = new Set([
  ...Object.values(previous.images).flatMap((image) =>
    image.srcSet.split(', ').map((source) => source.split(' ')[0]),
  ),
  ...Object.values(previous.videos ?? {}),
  ...(previous.videoSrc ? [previous.videoSrc] : []),
]);
const generatedFiles = new Set();
const manifest = {};
await mkdir(`${root}public/media`, { recursive: true });
for (const [name, extension, widths] of images) {
  const variants = [];
  for (const width of widths) {
    const result = spawnSync(
      'cwebp',
      [
        '-quiet',
        '-q',
        name === 'trail' ? '78' : '86',
        '-m',
        '6',
        '-metadata',
        'none',
        '-resize',
        String(width),
        '0',
        `${root}public/assets/${name}.${extension}`,
        '-o',
        '-',
      ],
      { maxBuffer: 10 * 1024 * 1024 },
    );
    if (result.status !== 0)
      throw new Error(result.error?.message || result.stderr.toString());
    const hash = createHash('sha256')
      .update(result.stdout)
      .digest('hex')
      .slice(0, 12);
    const src = `/media/${name}-${width}-${hash}.webp`;
    await writeFile(`${root}public${src}`, result.stdout);
    generatedFiles.add(src);
    variants.push({ src, width });
  }
  manifest[name] = {
    src: variants.at(-1).src,
    srcSet: variants.map((v) => `${v.src} ${v.width}w`).join(', '),
  };
}
const videos = {};
for (const theme of ['light', 'dark']) {
  const video = await readFile(
    `${root}public/assets/fenr-ride-loop-${theme}.mp4`,
  );
  const hash = createHash('sha256').update(video).digest('hex').slice(0, 12);
  const src = `/media/fenr-ride-loop-${theme}-${hash}.mp4`;
  await writeFile(`${root}public${src}`, video);
  generatedFiles.add(src);
  videos[theme] = src;
}
await writeFile(
  `${root}app/optimized-media.json`,
  `${JSON.stringify({ images: manifest, videos }, null, 2)}\n`,
);
// Remove only obsolete generated files recorded by the preceding manifest.
// Originals and unrelated files are never pruned.
for (const src of previousFiles) {
  if (
    !generatedFiles.has(src) &&
    /^\/media\/[a-z0-9-]+-[a-f0-9]{12}\.(webp|mp4)$/.test(src)
  ) {
    await unlink(`${root}public${src}`).catch((error) => {
      if (error.code !== 'ENOENT') throw error;
    });
  }
}
console.log(`Optimized ${images.length} images and fingerprinted both videos.`);
