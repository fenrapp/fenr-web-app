import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';

const source = readFileSync(
  new URL('../app/media-policy.ts', import.meta.url),
  'utf8',
);
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
});
const { shouldPlayPreview } = await import(
  `data:text/javascript,${encodeURIComponent(outputText)}`
);
const ready = {
  intent: 'auto',
  visible: true,
  documentVisible: true,
  reducedMotion: false,
};

// Render the real components with only the external theme store substituted.
function loadComponent(name, theme, hooks = React) {
  const require = createRequire(import.meta.url);
  const loaded = { exports: {} };
  const source = readFileSync(
    new URL(`../app/${name}.tsx`, import.meta.url),
    'utf8',
  );
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  });
  const resolve = (specifier) => {
    if (specifier === 'react') return hooks;
    if (specifier === './use-color-scheme')
      return { useColorScheme: () => theme };
    if (specifier === './media-policy') return { shouldPlayPreview };
    if (specifier === './app-screenshot')
      return loadComponent('app-screenshot', theme, hooks);
    if (specifier === './optimized-media.json')
      return require('../app/optimized-media.json');
    return require(specifier);
  };
  runInNewContext(outputText, {
    require: resolve,
    module: loaded,
    exports: loaded.exports,
  });
  return loaded.exports;
}

test('initial HTML defers themed downloads and retains a no-script fallback', () => {
  const { HeroFilm } = loadComponent('hero-film', null);
  const { AppScreenshot } = loadComponent('app-screenshot', null);
  for (const element of [
    React.createElement(HeroFilm),
    React.createElement(AppScreenshot, {
      src: '/assets/dashboard-riding.webp',
      alt: 'Dashboard',
      sizes: '100vw',
      width: 2622,
      height: 1206,
    }),
  ]) {
    const html = renderToStaticMarkup(element);
    assert.match(html, /<noscript>/);
    assert.match(html, /prefers-color-scheme: dark/);
    const activeHtml = html.replace(/<noscript>[\s\S]*?<\/noscript>/g, '');
    assert.doesNotMatch(activeHtml, /(?:src|srcSet|poster)="/);
    assert.doesNotMatch(activeHtml, /<link[^>]+as="image"/);
    assert.match(activeHtml, /width="\d+" height="\d+"/);
  }
});

test('each explicit play request changes the playback effect, including retries', () => {
  let request;
  const effects = [];
  const hooks = {
    ...React,
    useState(initial) {
      if (typeof initial !== 'object') return [initial, () => {}];
      request ??= initial;
      return [
        request,
        (update) => {
          request = update(request);
        },
      ];
    },
    useRef: () => ({ current: null }),
    useEffect: (_setup, dependencies) => {
      effects.push(dependencies);
    },
  };
  const { HeroFilm } = loadComponent('hero-film', 'dark', hooks);
  let film = HeroFilm();
  film.props.onIntentChange('play');
  film = HeroFilm();
  film.type(film.props);
  film.props.onIntentChange('play');
  film = HeroFilm();
  film.type(film.props);
  assert.equal(film.props.intent, 'play');
  assert.equal(film.props.revision, 2);
  assert.notDeepEqual(effects[0], effects[1]);
});

test('preview autoplays only when visible and appropriate for the connection', () => {
  assert(shouldPlayPreview(ready));
  for (const effectiveType of ['slow-2g', '2g', '3g']) {
    assert.equal(shouldPlayPreview({ ...ready, effectiveType }), false);
  }
  assert.equal(shouldPlayPreview({ ...ready, saveData: true }), false);
  assert.equal(shouldPlayPreview({ ...ready, reducedMotion: true }), false);
});

test('manual pause always wins and manual play never bypasses visibility', () => {
  assert.equal(shouldPlayPreview({ ...ready, intent: 'pause' }), false);
  assert(
    shouldPlayPreview({
      ...ready,
      intent: 'play',
      reducedMotion: true,
      saveData: true,
    }),
  );
  for (const intent of ['auto', 'play', 'pause']) {
    assert.equal(
      shouldPlayPreview({ ...ready, intent, visible: false }),
      false,
    );
    assert.equal(
      shouldPlayPreview({ ...ready, intent, documentVisible: false }),
      false,
    );
  }
});

test('hero has one video surface and no eager video source', () => {
  const hero = ts.createSourceFile(
    'hero-film.tsx',
    readFileSync(new URL('../app/hero-film.tsx', import.meta.url), 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const videos = [];
  function visit(node) {
    if (
      (ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) &&
      node.tagName.getText(hero) === 'video'
    )
      videos.push(node);
    ts.forEachChild(node, visit);
  }
  visit(hero);
  assert.equal(videos.length, 1);
  const attributes = videos[0].attributes.properties;
  const names = attributes
    .filter(ts.isJsxAttribute)
    .map((a) => a.name.getText(hero));
  assert(!names.includes('src'));
  assert(!names.includes('autoPlay'));
  for (const name of ['poster', 'width', 'height', 'muted', 'playsInline'])
    assert(names.includes(name));
  assert.equal(
    attributes.find((a) => a.name?.getText(hero) === 'preload')?.initializer
      ?.text,
    'none',
  );
});
