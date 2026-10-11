// Fork patch (ha_card_bubble): the visual editor, module store, and module
// editor are only needed while a card is being edited, so they load on first
// use instead of with every dashboard. The promise is shared so concurrent
// callers trigger one network request.
let editorModule = null;

export function loadBubbleCardEditor() {
  if (!editorModule) {
    editorModule = import(/* webpackChunkName: "editor" */ './bubble-card-editor.js').catch((error) => {
      editorModule = null;
      throw error;
    });
  }
  return editorModule;
}
