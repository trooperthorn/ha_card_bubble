// Fork patch (ha_card_bubble): js-yaml (~40 KB minified) is only needed to
// read module files (Bubble Card Tools, /local/bubble/bubble-modules.yaml) and
// in the editor. Every `js-yaml` import in src resolves here (webpack alias),
// and the real library loads on demand. Callers await loadJsYaml() on the
// async paths that parse YAML; nothing on the first-render path does.
let real = null;
let pending = null;

export function loadJsYaml() {
    if (real) return Promise.resolve(real);
    pending ??= import(/* webpackChunkName: "js-yaml" */ 'js-yaml').then((m) => {
        real = m;
        Type = m.Type;
        DEFAULT_SCHEMA = m.DEFAULT_SCHEMA;
        return m;
    }, (error) => { pending = null; throw error; });
    return pending;
}

function need() {
    if (!real) throw new Error('Bubble Card: js-yaml used before loadJsYaml() resolved');
    return real;
}

export const load = (...args) => need().load(...args);
export const dump = (...args) => need().dump(...args);
// Live bindings, filled in when the library arrives.
export let Type;
export let DEFAULT_SCHEMA;

export default { load, dump };
