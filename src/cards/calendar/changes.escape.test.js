import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';

// Minimal DOM: only what changeEvents touches (appendChild / classList /
// innerHTML / style), plus the fragment it builds the day list into.
class StubClassList {
    constructor() {
        this._set = new Set();
    }
    add(...names) { names.filter(Boolean).forEach(name => this._set.add(name)); }
    remove(...names) { names.forEach(name => this._set.delete(name)); }
    contains(name) { return this._set.has(name); }
    toggle(name, force) {
        const shouldAdd = force === undefined ? !this._set.has(name) : !!force;
        if (shouldAdd) this._set.add(name); else this._set.delete(name);
        return this._set.has(name);
    }
}

class StubElement {
    constructor(tag) {
        this.tagName = String(tag).toUpperCase();
        this.children = [];
        this.parentElement = null;
        this.classList = new StubClassList();
        this.dataset = {};
        this._innerHTML = '';
        this.scrollHeight = 0;
        this.scrollTop = 0;
        this.style = {
            _props: {},
            setProperty(name, value) { this._props[name] = value; },
            getPropertyValue(name) { return this._props[name] ?? ''; },
            removeProperty(name) { delete this._props[name]; },
        };
    }

    get innerHTML() { return this._innerHTML; }

    // Assigning innerHTML wipes the children, the way the card resets its
    // content before appending a freshly built fragment.
    set innerHTML(value) {
        this._innerHTML = value;
        this.children.forEach(child => { child.parentElement = null; });
        this.children = [];
    }

    getBoundingClientRect() { return { height: 0 }; }

    removeAttribute() {}

    appendChild(child) {
        // A fragment hands over its children instead of being inserted itself
        if (child instanceof StubFragment) {
            [...child.children].forEach(grandChild => this.appendChild(grandChild));
            child.children = [];
            return child;
        }
        if (child.parentElement) child.parentElement.removeChild(child);
        this.children.push(child);
        child.parentElement = this;
        return child;
    }

    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) this.children.splice(index, 1);
        child.parentElement = null;
        return child;
    }

    querySelectorAll(selector) {
        const wanted = selector.split(',').map(part => part.trim().replace(/^\./, '').split('.'));
        const found = [];
        const walk = (node) => {
            node.children.forEach(child => {
                if (wanted.some(parts => parts.every(name => child.classList.contains(name)))) found.push(child);
                walk(child);
            });
        };
        walk(this);
        return found;
    }

    querySelector(selector) { return this.querySelectorAll(selector)[0] ?? null; }
}

class StubFragment extends StubElement {
    constructor() { super('#document-fragment'); }
}

globalThis.DocumentFragment = StubFragment;
globalThis.document = { createElement: (tag) => new StubElement(tag) };

const addActions = jest.fn();

jest.unstable_mockModule('../../tools/utils.js', () => ({
    createElement: (tag, classNames = '') => {
        const element = new StubElement(tag);
        if (classNames) classNames.split(' ').filter(Boolean).forEach(name => element.classList.add(name));
        return element;
    },
    setLayout: jest.fn(),
    isDocumentRTL: () => false,
}));

jest.unstable_mockModule('../../tools/text-scrolling.js', () => ({
    applyScrollingEffect: (context, element, text) => { element.innerHTML = text ?? ''; },
}));

jest.unstable_mockModule('../../tools/style-processor.js', () => ({
    handleCustomStyles: jest.fn(),
}));

const translations = {
    'cards.calendar.no_events': 'No events',
    'cards.calendar.all_day': 'All day',
    'cards.calendar.busy': 'Busy',
};

jest.unstable_mockModule('../../tools/localize.js', () => ({
    default: () => (key) => translations[key] ?? key,
}));

jest.unstable_mockModule('../../tools/tap-actions.js', () => ({
    addActions,
}));

const { changeEvents, changeEventList } = await import('./changes.js');

// Fork tests (ha_card_bubble): calendar event text from outside invites is
// written as text, not markup. See fork/escape-text.js. The stub DOM and mocks
// above are copied from upstream's changes.test.js.
const fixedNow = new Date(2026, 5, 17, 14, 0, 0);

beforeEach(() => {
    jest.useFakeTimers({ now: fixedNow });
});

afterEach(() => {
    jest.useRealTimers();
});

function eventAt(overrides = {}) {
    const at = (hours) => new Date(2026, 5, 17, hours, 0, 0).toISOString();
    return {
        summary: 'Stand-up',
        start: { dateTime: at(15) },
        end: { dateTime: at(16) },
        location: 'Office',
        entity: { entity: 'calendar.work' },
        ...overrides,
    };
}

function createContext(events) {
    const calendarCardContent = new StubElement('div');
    calendarCardContent.classList.add('bubble-calendar-content');
    return {
        _hass: { locale: { language: 'en', time_format: '24' } },
        config: { show_place: true, event_action: { tap_action: { action: 'none' } } },
        events,
        content: new StubElement('div'),
        elements: { calendarCardContent, mainContainer: { scrollHeight: 100, offsetHeight: 100 } },
    };
}

describe('calendar event text', () => {
    test('a summary and a location with markup are escaped', async () => {
        const context = createContext([eventAt({ summary: '<b>x</b>', location: 'A & <i>B</i>' })]);
        await changeEvents(context);
        const [line] = context.elements.calendarCardContent.querySelectorAll('.bubble-event');
        expect(line).toBeDefined();
        const name = line.querySelector('.bubble-event-name');
        const place = line.querySelector('.bubble-event-place');
        expect(name.innerHTML).toBe('&lt;b&gt;x&lt;/b&gt;');
        expect(place.innerHTML).toBe('A &amp; &lt;i&gt;B&lt;/i&gt;');
    });
});
