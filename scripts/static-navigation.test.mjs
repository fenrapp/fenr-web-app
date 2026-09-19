import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

// Static pages must navigate as documents, without the client router that
// previously intercepted clicks and failed in the exported production build.
/** @type {Array<[string, string[]]>} */
const cases = [
  ['app/page.tsx', ['/privacy', '/terms']],
  ['app/legal-document.tsx', ['/', '/', '/privacy', '/terms']],
  ['app/terms/page.tsx', ['/privacy']],
];

test('all download CTAs use the verified centralized App Store URL', async () => {
  const config = readFileSync(
    new URL('../app/site-config.ts', import.meta.url),
    'utf8',
  );
  const { outputText } = ts.transpileModule(config, {
    compilerOptions: { module: ts.ModuleKind.ESNext },
  });
  const { siteConfig } = await import(
    `data:text/javascript,${encodeURIComponent(outputText)}`
  );
  assert.equal(
    siteConfig.appStoreUrl,
    'https://apps.apple.com/app/id6808795194',
  );

  const page = readFileSync(
    new URL('../app/page.tsx', import.meta.url),
    'utf8',
  );
  assert.equal(
    [...page.matchAll(/href=\{siteConfig\.appStoreUrl\}/g)].length,
    3,
  );
  assert.doesNotMatch(page, /testflight|join the beta/i);
  assert.doesNotMatch(page, /https:\/\/apps\.apple\.com/);
});

for (const [file, expectedRoutes] of cases) {
  test(`${file} uses native links for cross-page navigation`, () => {
    const source = ts.createSourceFile(
      file,
      readFileSync(new URL(`../${file}`, import.meta.url), 'utf8'),
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );
    /** @type {string[]} */
    const routes = [];

    /** @param {ts.Node} node */
    function visit(node) {
      if (ts.isImportDeclaration(node)) {
        assert.notEqual(node.moduleSpecifier.text, 'next/link');
      }
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        const href = node.attributes.properties.find(
          (attribute) =>
            ts.isJsxAttribute(attribute) &&
            attribute.name.getText(source) === 'href',
        );
        const value = href?.initializer;
        if (
          value &&
          ts.isStringLiteral(value) &&
          expectedRoutes.includes(value.text)
        ) {
          assert.equal(node.tagName.getText(source), 'a');
          assert(
            !node.attributes.properties.some(
              (attribute) =>
                ts.isJsxAttribute(attribute) &&
                attribute.name.getText(source) === 'onClick',
            ),
          );
          routes.push(value.text);
        }
      }
      ts.forEachChild(node, visit);
    }

    visit(source);
    assert.deepEqual(
      routes.sort((a, b) => a.localeCompare(b)),
      [...expectedRoutes].sort((a, b) => a.localeCompare(b)),
    );
  });
}
