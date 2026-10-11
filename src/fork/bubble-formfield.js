// Fork patch (ha_card_bubble): a stand-in for Home Assistant's ha-formfield,
// which the frontend removed in home-assistant/frontend#54200 (merged
// 2026-10-09, first shipped in Home Assistant 2026.11). The editor templates
// still write <ha-formfield>; build/formfield-loader.cjs renames that tag to
// <bubble-formfield> in the bundle, so this element serves every Home Assistant
// version and never races the frontend for the ha-formfield name.
//
// Behaviour mirrors ha-formfield at frontend 20260930.2: a centered row with the
// control first, a label from the `label` property or the `label` slot, and a
// click on that label toggles the slotted control. Plain DOM rather than Lit so
// the module stays importable where no DOM exists (the jest suites).

const STYLE = `
  :host {
    display: inline-block;
    vertical-align: middle;
  }
  .field {
    display: inline-flex;
    align-items: var(--ha-formfield-align-items, center);
    gap: var(--ha-space-1, 4px);
    vertical-align: middle;
    font-family: var(--mdc-typography-body2-font-family, var(--ha-font-family-body, inherit));
    font-size: var(--mdc-typography-body2-font-size, var(--ha-font-size-m, 14px));
    color: var(--primary-text-color);
  }
  ::slotted(ha-switch) {
    margin-inline-end: 10px;
  }
  label {
    direction: var(--direction);
    margin-inline-start: 0;
    margin-inline-end: auto;
    padding: 0;
    cursor: pointer;
  }
  :host([disabled]) label {
    color: var(--disabled-text-color);
    cursor: default;
  }
`;

export const INPUT_SELECTOR = 'ha-switch, ha-checkbox, ha-radio, input';

// Shared by the element and the tests: what a click on the label does.
export function toggleFromLabel(input) {
  if (!input) return;
  input.focus?.();
  if (input.disabled) return;
  if (input.tagName === 'HA-CHECKBOX') {
    input.checked = !input.checked;
    input.dispatchEvent(new Event('change', { bubbles: true }));
    return;
  }
  input.click();
}

function defineBubbleFormfield() {
  class BubbleFormfield extends HTMLElement {
    static get observedAttributes() {
      return ['label'];
    }

    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>${STYLE}</style><div class="field"><slot></slot><label><slot name="label"></slot></label></div>`;
      this._labelSlot = root.querySelector('slot[name="label"]');
      root.querySelector('label').addEventListener('click', () => toggleFromLabel(this.input));
    }

    // Lit templates set `.label` or the `label` attribute; both end up here.
    get label() {
      return this._label ?? '';
    }

    set label(value) {
      this._label = value == null ? '' : String(value);
      this._labelSlot.textContent = this._label;
    }

    get disabled() {
      return this.hasAttribute('disabled');
    }

    set disabled(value) {
      this.toggleAttribute('disabled', Boolean(value));
    }

    get input() {
      return this.querySelector(INPUT_SELECTOR);
    }

    attributeChangedCallback(name, _oldValue, newValue) {
      if (name === 'label') this.label = newValue;
    }
  }

  customElements.define('bubble-formfield', BubbleFormfield);
}

// Test harnesses stub customElements partially, so check for both methods.
if (typeof HTMLElement !== 'undefined'
    && typeof customElements?.get === 'function'
    && typeof customElements.define === 'function'
    && !customElements.get('bubble-formfield')) {
  defineBubbleFormfield();
}
