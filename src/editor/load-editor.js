// Registers the fork's ha-formfield stand-in at startup: the migration notice
// in the main bundle renders it as well as the editor (see bubble-formfield.js).
import '../fork/bubble-formfield.js';
import { loadJsYaml } from '../fork/lazy-js-yaml.js';

// Fork patch (ha_card_bubble): the visual editor, module store, and module
// editor are only needed while a card is being edited, so they load on first
// use instead of with every dashboard. The promise is shared so concurrent
// callers trigger one network request.
let editorModule = null;

export function loadBubbleCardEditor() {
  if (!editorModule) {
    editorModule = Promise.all([import(/* webpackChunkName: "editor" */ './bubble-card-editor.js'), loadJsYaml()]).then(([m]) => m).catch((error) => {
      editorModule = null;
      throw error;
    });
  }
  return editorModule;
}
