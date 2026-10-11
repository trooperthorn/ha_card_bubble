// Fork patch (ha_card_bubble): a conservative, dependency-free minifier for the
// card's stylesheets, which webpack inlines as raw strings (asset/source) and
// every client parses at startup. It only removes comments and whitespace that
// cannot change meaning:
//   - comments are dropped;
//   - quoted strings are copied untouched;
//   - a run of whitespace becomes one space, or nothing next to { } ;
//     (not next to ",": inside var() fallbacks and custom property values the
//     browser keeps the text as written, and scripts or themes that read such a
//     value would see it change);
//   - a backslash escape and the whitespace after it are copied untouched,
//     because that whitespace can terminate a hex escape.
// It never rewrites values or merges rules. Verified by parsing every
// stylesheet before and after in a browser and comparing the serialized rules.
// A full minifier (lightningcss) saves a little more but is a dependency in
// upstream's lockfile, which would conflict on every upstream sync.
const DROP_SPACE_NEXT_TO = new Set(['{', '}', ';']);
const isSpace = (c) => c === ' ' || c === '\t' || c === '\n' || c === '\r' || c === '\f';

function minifyCss(source) {
  let out = '';
  let pendingSpace = false;
  let i = 0;
  const n = source.length;

  const emit = (text) => {
    if (pendingSpace && out.length && !DROP_SPACE_NEXT_TO.has(out[out.length - 1]) && !DROP_SPACE_NEXT_TO.has(text[0])) {
      out += ' ';
    }
    pendingSpace = false;
    out += text;
  };

  while (i < n) {
    const c = source[i];
    if (c === '/' && source[i + 1] === '*') {
      const end = source.indexOf('*/', i + 2);
      i = end === -1 ? n : end + 2;
      pendingSpace = true;
      continue;
    }
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < n && source[j] !== c) {
        j += source[j] === '\\' ? 2 : 1;
      }
      emit(source.slice(i, Math.min(j + 1, n)));
      i = j + 1;
      continue;
    }
    if (c === '\\') {
      let j = i + 2;
      while (j < n && isSpace(source[j])) j++;
      emit(source.slice(i, j));
      i = j;
      continue;
    }
    if (isSpace(c)) {
      pendingSpace = true;
      i++;
      continue;
    }
    emit(c);
    i++;
  }
  return out.trim();
}

module.exports = function cssMinifyLoader(source) {
  return minifyCss(source);
};
module.exports.minifyCss = minifyCss;
