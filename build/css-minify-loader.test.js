// Fork tests (ha_card_bubble) for build/css-minify-loader.cjs.
import { describe, expect, test } from '@jest/globals';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { minifyCss } = require('./css-minify-loader.cjs');

describe('conservative CSS minifier', () => {
    test('drops comments and the whitespace around braces and semicolons', () => {
        expect(minifyCss('/* note */\n.a , .b {\n  color: red ;\n  margin: 0 auto;\n}\n'))
            .toBe('.a , .b{color: red;margin: 0 auto;}');
    });

    test('keeps the space that makes a descendant or pseudo-class selector', () => {
        expect(minifyCss('.a   :hover { }')).toBe('.a :hover{}');
        expect(minifyCss('.card  .icon\n  > span {}')).toBe('.card .icon > span{}');
    });

    test('keeps spaces inside values and calc expressions', () => {
        expect(minifyCss('width: calc(100%  -  2 * var(--x));'))
            .toBe('width: calc(100% - 2 * var(--x));');
    });

    test('copies quoted strings, including comment-like text and runs of spaces', () => {
        expect(minifyCss(String.raw`.a::before { content: "/* x */  a"; } .b { content: 'it\'s  }'; }`))
            .toBe(String.raw`.a::before{content: "/* x */  a";}.b{content: 'it\'s  }';}`);
    });

    test('keeps the whitespace after a backslash escape', () => {
        expect(minifyCss(String.raw`.\31 0 { color: red; }`)).toBe(String.raw`.\31 0{color: red;}`);
    });

    test('keeps the space after commas, which custom property values preserve verbatim', () => {
        expect(minifyCss(':root { --rgb: 3, 169, 244; --r: var(--a,  var(--b, 8px)); }'))
            .toBe(':root{--rgb: 3, 169, 244;--r: var(--a, var(--b, 8px));}');
    });

    test('keeps at-rule conditions intact', () => {
        expect(minifyCss('@media screen and (max-width: 600px) {\n  .a { display: none; }\n}'))
            .toBe('@media screen and (max-width: 600px){.a{display: none;}}');
    });

    test('is idempotent', () => {
        const once = minifyCss('.a {\n color: red;\n}\n/* c */ .b , .c { margin : 0 }');
        expect(minifyCss(once)).toBe(once);
    });
});
