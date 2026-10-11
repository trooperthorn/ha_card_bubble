// Fork tests (ha_card_bubble): nested pop-up card actions when the editor
// chunk has not been loaded yet. Upstream's helpers.test.js covers the paths
// where the editor is already registered.
import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

const fireEvent = jest.fn();
const loadBubbleCardEditor = jest.fn();

jest.unstable_mockModule('../../../../tools/utils.js', () => ({
    fireEvent,
}));
jest.unstable_mockModule('../../../../editor/load-editor.js', () => ({
    loadBubbleCardEditor,
}));

const { createEditorActions } = await import('./helpers.js');

function createPopupContext(extra = {}) {
    return {
        config: {
            type: 'custom:bubble-card',
            card_type: 'pop-up',
            hash: '#kitchen',
            cards: [{ type: 'button', entity: 'light.kitchen' }],
        },
        _hass: { states: {} },
        ...extra,
    };
}

describe('nested pop-up card actions with the editor loaded on demand', () => {
    let registered;
    let transientBridge;
    let warnSpy;

    beforeEach(() => {
        jest.clearAllMocks();
        registered = false;
        transientBridge = {
            setConfig: jest.fn(function setConfig(config) {
                this._config = config;
            }),
            _openStandaloneCardDialogForPopup: jest.fn(),
        };
        global.window = {
            __bubbleCardEditorInstances: new Set(),
            __bubbleStandalonePopupEditorOpeners: new Map(),
        };
        global.customElements = {
            get: jest.fn((tagName) => (registered && tagName === 'bubble-card-editor'
                ? function BubbleCardEditor() {}
                : undefined)),
        };
        global.document = {
            createElement: jest.fn((tagName) => (tagName === 'bubble-card-editor' ? transientBridge : {})),
        };
        warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterEach(() => {
        warnSpy.mockRestore();
        delete global.window;
        delete global.customElements;
        delete global.document;
    });

    test('loads the editor, then opens the nested card editor', async () => {
        loadBubbleCardEditor.mockImplementation(async () => {
            registered = true;
        });
        const context = createPopupContext();

        await createEditorActions(context, jest.fn()).editCard(0);

        expect(loadBubbleCardEditor).toHaveBeenCalledTimes(1);
        expect(transientBridge._openStandaloneCardDialogForPopup)
            .toHaveBeenCalledWith(context.config, { type: 'edit', index: 0 });
        expect(warnSpy).not.toHaveBeenCalled();
    });

    test('loads the editor, then opens Add card', async () => {
        loadBubbleCardEditor.mockImplementation(async () => {
            registered = true;
        });
        const context = createPopupContext();

        await createEditorActions(context, jest.fn()).addCard();

        expect(transientBridge._openStandaloneCardDialogForPopup)
            .toHaveBeenCalledWith(context.config, { type: 'add' });
    });

    test('warns once and stops when the editor chunk fails to load', async () => {
        loadBubbleCardEditor.mockRejectedValue(new Error('offline'));

        await createEditorActions(createPopupContext(), jest.fn()).editCard(0);

        expect(transientBridge._openStandaloneCardDialogForPopup).not.toHaveBeenCalled();
        expect(warnSpy).toHaveBeenCalledWith('Bubble Card: failed to load the editor', expect.any(Error));
    });

    test('does not load the editor when an opener is already attached', () => {
        const openDialog = jest.fn();

        createEditorActions(createPopupContext({ _standaloneOpenCardDialog: openDialog }), jest.fn()).editCard(0);

        expect(openDialog).toHaveBeenCalledWith({ type: 'edit', index: 0 });
        expect(loadBubbleCardEditor).not.toHaveBeenCalled();
    });

    test('does not load the editor for a disconnected pop-up preview', () => {
        createEditorActions(createPopupContext({ isConnected: false }), jest.fn()).editCard(0);

        expect(loadBubbleCardEditor).not.toHaveBeenCalled();
        expect(warnSpy).toHaveBeenCalledWith('Bubble Card: standalone pop-up editor unavailable for nested card edit');
    });
});
