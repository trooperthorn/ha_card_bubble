# Decisions

Dated decisions for this fork, with the alternative considered and why.

## 2026-10-11: a patch fork that takes every upstream release

The dashboards this fork serves use about 95 Bubble cards, including about 40
pop-ups, on wall tablets that cold-start the Home Assistant frontend often. At
upstream v3.4.1 the card is one eager 1,073,092 byte file (about 259 KB gzipped),
and every client parses all of it at startup, including the visual editor, the
module store, and the module editor that only an admin with the editor open uses.
v3.0.0 was 472,812 bytes; the growth is first-party code, not dependencies.

Upstream pull request Clooos/Bubble-Card#2613 splits the bundle, but it has merge
conflicts and the maintainer's only reply argues the cost is paid once because the
file is cached. Caching removes the download, not the parse and compile work on
every cold start, which is the cost that matters on the tablets.

The fork is upstream's tree plus a small patch set. Each upstream release is
merged into `main` through a PR landed with a merge commit (see `operations.md`),
because `main` is protected against force pushes and a squash would drop upstream's
ancestry. Rejected: a divergent fork that refactors freely, which could not keep up
with upstream's release rate; and waiting for #2613, which has no review.

## 2026-10-11: no `bubble-card.js` release asset; HACS installs the dist folder

HACS installs a plugin from release assets only when an asset has exactly the
`hacs.json` filename (`repositories/plugin.py`, `update_filenames`). Otherwise it
downloads every file directly under `dist/` at the tag. Bubble Card already ships
63 locale dictionaries next to the bundle, and the fork adds lazily loaded chunks,
so a single-file asset would install a card that cannot load its other files.
Releases therefore carry only a `SHA256SUMS` asset listing every shipped file, and
CI fails when the committed `dist/` differs from a fresh build or holds a file the
build did not produce.

## 2026-10-11: the fork version lives in package.json; the card keeps upstream's

Fork releases use the house CalVer (`vYYYY.MM.DD.N`), written by
`scripts/set_version.py` into `package.json`, whose `version` upstream leaves at
`0.0.0`, so the line never conflicts on an upstream sync. `src/var/version.js` keeps
upstream's version string: the card uses it in the console banner and as the
cache key and cache-busting query for its locale dictionaries, so it should change
exactly when upstream's code does. The module store compares module versions, not
the card's, so it is unaffected either way.

## 2026-10-11: line endings are pinned to LF

On a Windows checkout with `core.autocrlf`, the CSS files that webpack inlines as
raw strings picked up carriage returns, and a fresh build was 1,085,142 bytes
instead of upstream's 1,073,092. With `.gitattributes` pinning LF, the build
reproduces upstream's committed `dist/bubble-card.js` byte for byte, which the
dist-in-sync check depends on.

## 2026-10-11: Dependabot watches GitHub Actions only

`package.json` and `package-lock.json` belong to upstream. Fork-side npm bumps
would conflict on every upstream sync and drift the build from upstream's, so npm updates
arrive with upstream releases. The fork's own workflow actions are pinned by SHA
and kept current by Dependabot.

## 2026-10-11: the editor loads on demand

`src/bubble-card.js` imported the visual editor at the top of the file, only for
its side effect of registering `bubble-card-editor`, so every client parsed the
editor, the module store, and the module editor at startup. The import now
happens inside `getConfigElement()`, through a shared loader in
`src/editor/load-editor.js`. Home Assistant awaits an async `getConfigElement()`
(`hui-element-editor.ts` in home-assistant/frontend), and Mushroom uses the same
pattern. Measured with `npm run dist`:

| File | Raw bytes | gzip -9 |
|---|---|---|
| `bubble-card.js` at upstream v3.4.1 | 1,073,092 | 259,325 |
| `bubble-card.js` with this patch | 736,165 | 192,158 |
| `bubble-card-chunk-editor.<hash>.js` (loaded when an editor opens) | 339,575 | 70,228 |

The nested-card actions inside a pop-up in dashboard edit mode
(`src/cards/pop-up/cards/editor/helpers.js`) create a transient
`bubble-card-editor` bridge and gave up with a console warning when the element
was not registered. They now load the editor once and retry. When an opener
already exists they still open synchronously, so upstream's tests for that
path pass unchanged; `helpers.lazy-editor.test.js` covers the new path.

Webpack now emits ES modules (`output.module`), so the chunk is fetched with
`import()` relative to the entry's own URL, which is `/hacsfiles/<repo>/`; the
dashboard already loads the resource as `type: module`. Chunk names carry a
content hash, because Home Assistant serves `/hacsfiles` with a 31-day cache and
`?hacstag` only busts the entry file. Upstream PR #2613 names chunks by the
upstream version instead, which would go stale here: a fork patch can change a
chunk without upstream's version changing.

Verified in a browser against the built `dist/` served from
`/hacsfiles/ha_card_bubble/`: at load only `bubble-card` is registered;
`getConfigElement()` fetched the chunk from the same folder, registered
`bubble-card-editor`, and returned the editor element, with no console errors.
Not yet verified on a live Home Assistant dashboard.

Rejected: carrying all of #2613 at once. It also defers js-yaml and most of the
English dictionary, but it was written against v3.3.0, conflicts with v3.4.1,
and touches about 20 files; the editor split alone is most of its saving in
three upstream files.

## 2026-10-11: CodeQL scans src, npm audit covers runtime dependencies

CodeQL analyzed the committed `dist/` files too, so moving the editor into its own
chunk raised five "new" alerts that were the same upstream editor code already in
`bubble-card.js`, at minified locations nobody can review. CodeQL now ignores
`dist/` and `node_modules/` (`.github/codeql/codeql-config.yml`) and reports on
`src/`, where findings point at readable code. Findings in upstream code are
triaged in `docs/backlog.md` rather than patched blindly, since every fork change
is carried across upstream syncs.

`npm audit` runs with `--omit=dev`. The only runtime dependencies, `lit` and
`js-yaml`, are what ships in the bundle; the moderate advisories it reported on
2026-10-11 were in `@babel/core` (under `jest-snapshot`) and
`baseline-browser-mapping`, test and build tooling in upstream's lockfile that
never reaches a client. Bumping them here would put the lockfile in conflict with
every upstream sync. They still run in CI, so they remain a supply-chain exposure
of the build itself; that is accepted and revisited when upstream updates them.
