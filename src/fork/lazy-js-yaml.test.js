// Fork tests (ha_card_bubble): the on-demand js-yaml shim. In the build every
// `js-yaml` import resolves to it (webpack.config.cjs); callers await
// loadJsYaml() on the paths that parse YAML.
import { describe, expect, test } from '@jest/globals';

const shim = await import('./lazy-js-yaml.js');

describe('lazy js-yaml shim', () => {
    test('refuses to parse before the library has loaded, with a clear error', () => {
        expect(() => shim.load('a: 1')).toThrow('js-yaml used before loadJsYaml() resolved');
        expect(shim.Type).toBeUndefined();
    });

    test('parses and dumps once loaded, and fills the live bindings', async () => {
        const real = await shim.loadJsYaml();
        expect(shim.load('a: 1\nb: [x, y]')).toEqual({ a: 1, b: ['x', 'y'] });
        expect(shim.dump({ a: 1 })).toBe('a: 1\n');
        expect(shim.Type).toBe(real.Type);
        expect(shim.DEFAULT_SCHEMA).toBe(real.DEFAULT_SCHEMA);
        expect(shim.default.load('c: 2')).toEqual({ c: 2 });
    });

    test('later calls reuse the loaded library', async () => {
        const first = await shim.loadJsYaml();
        expect(await shim.loadJsYaml()).toBe(first);
    });
});
