import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Run locally with cwebp installed. Generated assets are committed, so production
// builds need neither an image service nor a native encoder.
const root = fileURLToPath(new URL('../', import.meta.url));
/** @type {Array<[string, string, number[]]>} */
const images = [
  ['dashboard-riding', 'png', [640, 1280, 2622]],
  ['dashboard-charging', 'png', [640, 1280, 2622]],
  ['navigation', 'png', [640, 1280, 1800]],
  ...[
    'dashboard-cards',
    'battery-health',
    'battery-cells',
    'power-modes',
    'ride-history',
    'maintenance',
    'diagnostics',
    'live-activity',
  ].map((name) => /** @type {[string, string, number[]]} */ ([
    name,
    'png',
    [360, 480, 720],
  ])),
  ['watch-charging', 'png', [256, 416]],
  ['fenr-icon-light', 'png', [96, 256]],
  ['fenr-icon-dark', 'png', [96, 256]],
  ['trail', 'jpg', [640, 922]],
  ['fenr-ride-loop-poster-landscape', 'png', [1280]],
];
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
    variants.push({ src, width });
  }
  manifest[name] = {
    src: variants.at(-1).src,
    srcSet: variants.map((v) => `${v.src} ${v.width}w`).join(', '),
  };
}
const video = await readFile(
  `${root}public/assets/fenr-ride-loop-landscape.mp4`,
);
const videoHash = createHash('sha256').update(video).digest('hex').slice(0, 12);
const videoSrc = `/media/fenr-ride-loop-${videoHash}.mp4`;
await writeFile(`${root}public${videoSrc}`, video);
await writeFile(
  `${root}app/optimized-media.json`,
  `${JSON.stringify({ images: manifest, videoSrc }, null, 2)}\n`,
);
console.log(`Optimized ${images.length} images and fingerprinted the video.`);
