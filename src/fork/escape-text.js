// Fork patch (ha_card_bubble): escape text that comes from entities rather than
// from the dashboard author before it reaches the scrolling-text writer, which
// assigns innerHTML (tools/text-scrolling.js). Entity names, states, attributes,
// media titles, and calendar events are relayed by integrations and can carry
// third-party text (stream metadata, calendar invites, device names); markup in
// them must show as text, never be parsed. Template results are already escaped
// by resolveTemplate(..., html = true), and author-written `name:` values are
// left alone, matching how upstream treats each. Missing values pass through
// unchanged so callers keep their own fallbacks.
//
// Same replacements as escapeHtml in tools/jinja.js, kept local so upstream's
// test mocks of that module (which export only isTemplate) still link.
export function escapeText(value) {
  if (value === undefined || value === null) return value;
  const text = String(value);
  if (text.indexOf('&') === -1 && text.indexOf('<') === -1 && text.indexOf('>') === -1) return text;
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
