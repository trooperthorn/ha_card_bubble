# Backlog

Candidates for fork patches, from the 2026-10-11 research pass against upstream
v3.4.1: a code and build investigation (headless Chrome benchmarks of 73 of the
cards on Sean's dashboards), and a triage of every open upstream issue and pull
request. Sizes are measured with `npm run dist` unless marked as estimates.

How much the bundle work buys, honestly: with 6x CPU throttling standing in for a
slow tablet, a cold load of the card code took 163 ms before any patch and about
93 ms with every size patch below applied; with the HTTP and compiled-code caches
warm it was 48 ms against 33 ms. Building the cards themselves took about 500 ms
at the same throttle and no bundle patch changes that. The size patches are worth
carrying because they are small and the tablets cold-start often, not because they
transform load time.

Sean's dashboards use pop-up (35 standalone), button, separator, media-player (3),
calendar (2), and one horizontal-buttons-stack; no cover, climate, or select; no
`modules:`; 64 cards set `styles:`, all static except one.

## 1. Compatibility: do before Home Assistant 2026.11

| Item | Evidence | Effect | Fix |
|---|---|---|---|
| **Done** (`decisions.md`): `ha-formfield` removed from the frontend | home-assistant/frontend#54200, merged 2026-10-09; absent on `dev`, present in 20260930.2. 118 uses in 14 files under `src/`, all editor code | Editor toggles lose their labels once Home Assistant 2026.11 ships; dashboards are unaffected | A fork-owned `bubble-formfield` element (label plus slot) and a tag rename, or a guarded fallback registration. Defining `ha-formfield` unconditionally is not safe on 2026.10, where the frontend still registers it lazily |
| `ha-entity-picker` reads `hass` from Lit context since frontend#52833 | Upstream #2639 (maintainer could not reproduce); `editor/bubble-card-editor.js`, `modules/module-editor.js` | Entity field can be missing in the editor. Root cause is a hypothesis | Fall back to `ha-selector` with an entity selector |
| `mwc-icon-button`, `mwc-button` no longer registered | `sub-button/editor/sectioned.js`, `sub-button/editor/utils.js`, `modules/editor.js`, `modules/store.js` | Unstyled buttons in the editor; clicks work | `ha-icon-button`, `ha-button` |

## 2. Fixes that affect these dashboards

Upstream labels six open issues "Bug-Fix" (fixed by the maintainer, not yet
released: #2243, #2620, #2631, #2641, #2643, #2647), so a v3.4.2 is likely. Carry
those only as single-file commits that can be dropped at the next sync.

| Item | Source | Root cause | Effort |
|---|---|---|---|
| Pop-up content inset not re-measured when the sidebar hides | #2641 (Bug-Fix) | `tools/content-inset.js` re-measures only from a ResizeObserver on the panel; a change that does not resize the observed box never re-publishes. Read from code, not reproduced | S |
| Haptics always fire | #2643 (Bug-Fix) | `forwardHaptic` in `tools/utils.js` ignores `hass.vibrate` | XS |
| Tap-to-slide shows no value while sliding | #2543, PR #2623 (draft, mergeable, tested) | The tap branch never sets up the value display; all 4 sliders here use `tap_to_slide` | XS, cherry-pick |
| Calendar keeps removed cards alive up to 15 minutes | not filed upstream | `cards/calendar/index.js` starts a new 15-minute `setTimeout` holding the card on every calendar state change and never clears the previous one; it also `JSON.stringify`s every calendar's state on each render | XS |

## 3. Startup size

Measured cumulatively on a separate build whose baseline was 1,085,142 bytes (a
CRLF checkout, about 12 KB larger than the LF build this repository produces), so
the deltas are the useful numbers.

| Patch | Raw | gzip | Rebase risk | Overlaps #2613 |
|---|---|---|---|---|
| Editor loaded on demand | -341 KB | -67 KB | low | yes; **done** (`decisions.md`) |
| Onboarding and migration notice split out of runtime (`pop-up/create.js` imports `pop-up/editor.js`; `migration.js` imports `standalone-dialog-bridge`) | -95 KB | -18 KB | medium, `pop-up/editor.js` changes often | yes |
| js-yaml loaded on first use (every call site is already async) | -43 KB | -14 KB | low to medium | yes |
| CSS minified at build time (lightningcss in a webpack loader) | -56 KB | -13 KB | very low, build only | no |
| calendar, media-player, climate, cover, select handlers loaded on first use | -48 KB | -11 KB | low to medium | no |
| English dictionary sliced to runtime keys, rest fetched | about -32 KB | about -12 KB | high: `en.json` changes every release | yes |

Remaining runtime-to-editor imports after the editor split:
`pop-up/cards/create.js` -> `cards/editor/*` (about 25 KB),
`pop-up/changes.js` -> `editor-mode.js` (13 KB), and `bubble-card.js` ->
`modules/suggestions.js` with `entity-suggestion.js` (about 54 KB, card picker).

## 4. Runtime

Per state change, Bubble's own work on 73 cards was 0.5 ms unthrottled and about
6 ms at 6x. User `styles:` are compiled once per template string and cached; they
are not re-evaluated on every update.

| Item | Measured | Effort |
|---|---|---|
| Closed standalone pop-ups are never render-gated (`tools/render-gate.js`) | about 30% of Bubble's per-update work (35 pop-ups, about 1.9 ms at 6x) | M, medium risk (hash sync and wake logic) |
| Calendar forces a synchronous layout on every render (`cards/calendar/changes.js`) | not measurable in the harness | XS |
| `formatNumericValue` builds a new number formatter per call (`tools/utils.js`) | small | XS |
| Without Bubble Card Tools, every page load fetches `/local/bubble/bubble-modules.yaml` with caching disabled and gets a 404 (`modules/registry.js`) | one request per load | XS |
| A tab still running an old entry can 404 on the editor chunk after an update | edge case; reload fixes it | XS (reload on chunk load failure) |

## 5. Upstream pull requests not affecting these dashboards

Mergeable and low risk, carried only if wanted: #2645 (sub-slider close starts
the parent slider), #2622 (footer width), #2625 (climate target held until
confirmed, draft), and the #2647 animation-frame cancel and #2243/#2631
alignment-lane `pointer-events` fixes (both Bug-Fix upstream).
