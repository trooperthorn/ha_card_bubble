// Fork tests (ha_card_bubble) for build/formfield-loader.cjs.
import { describe, expect, test } from '@jest/globals';
import { createRequire } from 'node:module';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { renameFormfield } = require('./formfield-loader.cjs');
const TAG = /(?<![\w-])ha-formfield(?![\w-])/;

describe('ha-formfield build-time rename', () => {
    test('renames opening and closing tags, attributes untouched', () => {
        const source = '<ha-formfield label="${t(\'x\')}" class="a"><ha-switch></ha-switch></ha-formfield>';
        expect(renameFormfield(source)).toBe(
            '<bubble-formfield label="${t(\'x\')}" class="a"><ha-switch></ha-switch></bubble-formfield>'
        );
    });

    test('renames CSS type selectors', () => {
        expect(renameFormfield('.form-preview ha-formfield.suggestions-preview-toggle {'))
            .toBe('.form-preview bubble-formfield.suggestions-preview-toggle {');
    });

    test('leaves the --ha-formfield-* custom properties and longer names alone', () => {
        const source = 'align-items: var(--ha-formfield-align-items, center); <ha-formfield-x>';
        expect(renameFormfield(source)).toBe(source);
    });

    test('leaves no ha-formfield tag in any source module or stylesheet', () => {
        const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'src');
        const remaining = [];
        const walk = (dir) => {
            for (const name of readdirSync(dir)) {
                const path = join(dir, name);
                if (statSync(path).isDirectory()) walk(path);
                else if (/\.(js|css)$/.test(name) && !name.endsWith('.test.js') && !path.endsWith(join('fork', 'bubble-formfield.js'))) {
                    if (TAG.test(renameFormfield(readFileSync(path, 'utf8')))) remaining.push(path);
                }
            }
        };
        walk(root);
        expect(remaining).toEqual([]);
    });
});
