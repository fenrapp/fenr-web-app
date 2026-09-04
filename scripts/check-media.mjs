import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import media from '../app/optimized-media.json' with { type: 'json' };

// Immutable caching is safe only when filenames match their actual content.
// This check needs no encoder and can run before shipping a static export.
const publicRoot = new URL('../public/', import.meta.url);
const referenced = new Set([media.videoSrc]);

for (const [name, image] of Object.entries(media.images)) {
  const variants = image.srcSet.split(', ');
  let previousWidth = 0;
  for (const variant of variants) {
    const match =
      /^(\/media\/[a-z0-9-]+-(\d+)-[a-f0-9]{12}\.webp) (\d+)w$/.exec(variant);
    assert(match, `Invalid responsive source: ${name}`);
    assert.equal(match[2], match[3], `Width descriptor mismatch: ${name}`);
    const width = Number(match[3]);
    assert(width > previousWidth, `Unsorted or duplicate widths: ${name}`);
    previousWidth = width;
    referenced.add(match[1]);
  }
  assert.equal(
    image.src,
    variants.at(-1)?.split(' ')[0],
    `Invalid fallback: ${name}`,
  );
}

for (const src of referenced) {
  const match = /^\/media\/([a-z0-9-]+-([a-f0-9]{12})\.(?:webp|mp4))$/.exec(
    src,
  );
  assert(match, 'Media must use a safe content-fingerprinted filename');
  const content = await readFile(new URL(`media/${match[1]}`, publicRoot));
  const hash = createHash('sha256').update(content).digest('hex').slice(0, 12);
  assert.equal(hash, match[2], `Stale content hash: ${src}`);
}

const files = await readdir(new URL('media/', publicRoot));
const unreferenced = files.filter((name) => !referenced.has(`/media/${name}`));
assert.deepEqual(
  unreferenced,
  [],
  'Review unreferenced generated media before shipping',
);
console.log(
  `Validated ${referenced.size} media files: sources, widths and content hashes.`,
);
