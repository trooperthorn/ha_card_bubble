// Fork tests (ha_card_bubble): refreshContentInset, which pop-ups call as they
// open, catches sidebar changes the ResizeObserver never reported (upstream
// #2641).
import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

jest.unstable_mockModule('./utils.js', () => ({
    isDocumentRTL: jest.fn(() => false),
}));

const {
    CONTENT_INLINE_START_VAR,
    refreshContentInset,
    startContentInsetSync,
    stopContentInsetSync,
} = await import('./content-inset.js');

function createPanel(left) {
    const panel = {
        left,
        isConnected: true,
        getBoundingClientRect: () => ({
            left: panel.left, right: 1000, width: 1000 - panel.left, height: 600, top: 0, bottom: 600,
        }),
    };
    return panel;
}

let currentPanel;
let properties;

beforeEach(() => {
    properties = {};
    global.document = {
        querySelector: jest.fn((selector) => (selector !== 'home-assistant' ? null : {
            shadowRoot: {
                querySelector: (inner) => (inner !== 'home-assistant-main' ? null : {
                    shadowRoot: { querySelector: () => currentPanel },
                }),
            },
        })),
        documentElement: {
            clientWidth: 1000,
            style: {
                setProperty: jest.fn((name, value) => { properties[name] = value; }),
                removeProperty: jest.fn((name) => { delete properties[name]; }),
            },
        },
    };
    global.window = { innerWidth: 1000, addEventListener: jest.fn(), removeEventListener: jest.fn() };
    // An observer that never reports: the case #2641 describes.
    global.ResizeObserver = class {
        observe() {}
        disconnect() {}
    };
});

afterEach(() => {
    stopContentInsetSync();
    delete global.ResizeObserver;
    delete global.window;
    delete global.document;
});

describe('content inset refreshed when a pop-up opens', () => {
    test('picks up a sidebar collapse the observer missed', () => {
        currentPanel = createPanel(256);
        startContentInsetSync();
        refreshContentInset();
        expect(properties[CONTENT_INLINE_START_VAR]).toBe('256px');

        currentPanel.left = 56;
        expect(properties[CONTENT_INLINE_START_VAR]).toBe('256px');

        refreshContentInset();
        expect(properties[CONTENT_INLINE_START_VAR]).toBe('56px');
    });

    test('picks up a sidebar hidden by a kiosk tool after load', () => {
        currentPanel = createPanel(256);
        startContentInsetSync();
        refreshContentInset();

        currentPanel.left = 0;
        refreshContentInset();
        expect(properties[CONTENT_INLINE_START_VAR]).toBe('0px');
    });

    test('measures a panel Home Assistant swapped in since the last measurement', () => {
        const first = createPanel(256);
        currentPanel = first;
        startContentInsetSync();
        refreshContentInset();

        first.isConnected = false;
        currentPanel = createPanel(56);
        refreshContentInset();
        expect(properties[CONTENT_INLINE_START_VAR]).toBe('56px');
    });

    test('does nothing outside a DOM', () => {
        delete global.document;
        expect(refreshContentInset()).toBe(false);
        global.document = { documentElement: { style: { removeProperty() {} } } };
    });
});
