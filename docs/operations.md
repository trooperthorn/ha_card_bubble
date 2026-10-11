# Operations

## Installing in place of upstream

Upstream Bubble Card and this build must never be loaded together. Both register
the same custom elements (`bubble-card`, `bubble-card-editor`, and the editor's
`ha-selector-bc_*` helpers) without checking whether they already exist, so the
second file to load throws and whichever loaded first wins.

1. In HACS, remove the upstream "Bubble Card" repository. Confirm under Settings ->
   Dashboards -> Resources that no `/hacsfiles/Bubble-Card/bubble-card.js` entry
   remains, and delete it if it does.
2. In HACS, add `trooperthorn/ha_card_bubble` as a custom repository of type
   Dashboard, and download it. HACS adds the resource
   `/hacsfiles/ha_card_bubble/bubble-card.js`.
3. Reload the browser on each client (the Companion app: Settings -> Companion app
   -> Debugging -> Reset frontend cache, or restart the kiosk browser).

Dashboards need no changes: cards keep `type: custom:bubble-card`.

## Bubble Card Tools

Install [Clooos/Bubble-Card-Tools](https://github.com/Clooos/Bubble-Card-Tools)
from upstream as usual. It never looks for the card; the card detects it by
calling the `bubble_card_tools/list_modules` WebSocket command
(`src/modules/bct-provider.js`). It therefore works with this build unchanged,
whatever URL the card is served from.

The one path coupling is the locale loader in `src/tools/localize.js`: it finds
its dictionaries next to the script whose URL contains `bubble-card.js`, with a
last-resort fallback to `/hacsfiles/Bubble-Card/`. Keep the filename
`bubble-card.js` and dictionaries load from this repository's folder.

## Build and test

```bash
npm ci
npm test
npm run dist
```

`npm run dist` builds the production bundle into `dist/` and a development build
into `www/` (ignored). Commit the whole `dist/` folder; CI rejects drift.

## Releases

A merge to `main` is the only release path. `Release` reads the version from
`package.json` through `.release.json`, checks that a fresh build reproduces the
committed `dist/`, tags the commit `v<version>`, and publishes a release with a
`SHA256SUMS` asset. `Prepare release` then opens a CalVer bump PR when release
paths changed since the last tag; it needs the release GitHub App (repository
variable `RELEASE_AUTOMATION_CLIENT_ID`, secret `RELEASE_AUTOMATION_PRIVATE_KEY`).
Without them it fails at its credential check, and a bump can be made by hand:
`python scripts/set_version.py --next-from-tags` on a branch, then a PR.

## Taking a new upstream release

`main` is protected (no force pushes), so upstream releases are merged, not
rebased onto:

```bash
git fetch upstream --tags
git switch -c sync/<upstream-tag> main
git merge --no-ff <upstream-tag>
npm ci && npm test && npm run dist
git add dist && git commit
```

`dist/` conflicts on every sync; resolve it by rebuilding, never by hand. Open the
PR and land it with **Create a merge commit**, not squash: a squash would drop the
upstream tag from `main`'s ancestry and the next sync would conflict on every file
upstream touched. Fork patches themselves land as squash-merged PRs as usual. After
the sync, check `docs/backlog.md` for patches upstream has adopted and drop them.
