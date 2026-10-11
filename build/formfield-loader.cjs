// Fork patch (ha_card_bubble): renames the removed ha-formfield element to the
// fork's bubble-formfield (src/fork/bubble-formfield.js) in every source module
// and stylesheet at build time, so no upstream file has to be edited. When
// upstream stops using ha-formfield, this finds nothing to replace.
const FORMFIELD = /(?<![\w-])ha-formfield(?![\w-])/g;

function renameFormfield(source) {
  return source.replace(FORMFIELD, 'bubble-formfield');
}

module.exports = function formfieldLoader(source) {
  return renameFormfield(source);
};
module.exports.renameFormfield = renameFormfield;
