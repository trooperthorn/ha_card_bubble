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
