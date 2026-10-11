// Fork patch (ha_card_bubble): renames elements Home Assistant no longer
// provides, in every source module and stylesheet at build time, so no
// upstream file has to be edited. When upstream stops using a name, the rename
// finds nothing to replace.
//   - ha-formfield: removed in home-assistant/frontend#54200 (2026.11); the
//     fork ships its own bubble-formfield (src/fork/bubble-formfield.js).
//   - mwc-icon-button, mwc-button: no longer registered by the frontend (absent
//     at 20260930.2), so they rendered unstyled and could not be focused.
//     ha-icon-button renders its slotted icon when it has no `path`, and
//     ha-button takes its label from the default slot, which is how Bubble
//     uses both.
const RENAMES = [
  ['ha-formfield', 'bubble-formfield'],
  ['mwc-icon-button', 'ha-icon-button'],
  ['mwc-button', 'ha-button'],
];

// A tag name only when not part of a longer name or a custom property
// (`--ha-formfield-align-items` stays).
const patterns = RENAMES.map(([from, to]) => [new RegExp(`(?<![\\w-])${from}(?![\\w-])`, 'g'), to]);

function renameElements(source) {
  let out = source;
  for (const [pattern, to] of patterns) out = out.replace(pattern, to);
  return out;
}

module.exports = function elementRenameLoader(source) {
  return renameElements(source);
};
module.exports.renameElements = renameElements;
// Kept for the existing tests and callers.
module.exports.renameFormfield = renameElements;
module.exports.RENAMED_ELEMENTS = RENAMES.map(([from]) => from);
