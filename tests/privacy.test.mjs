import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const route = readFileSync(new URL('../app/api/tirehtoori/route.ts', import.meta.url), 'utf8');
const page = readFileSync(new URL('../app/tyokalut/vallanvaihto/page.tsx', import.meta.url), 'utf8');

test('unfinished minutes endpoint explicitly refuses processing', () => {
  assert.match(route, /status:\s*501/);
  assert.match(route, /no-store/);
  assert.doesNotMatch(route, /req\.json\(|request\.json\(/);
});

test('minutes tool never uploads entered minutes to the placeholder API', () => {
  assert.doesNotMatch(page, /fetch\s*\(/);
  assert.doesNotMatch(page, /XMLHttpRequest|sendBeacon/);
  assert.match(page, /Tarkista teksti paikallisesti/);
});
