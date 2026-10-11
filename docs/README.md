# ha_card_bubble documentation

This repository is a patch fork of [Clooos/Bubble-Card](https://github.com/Clooos/Bubble-Card).
It ships upstream's card with a small set of changes, carried across upstream releases, aimed at startup cost
on wall tablets and phones. Everything about using the card (card types, pop-ups,
modules, styling) is upstream's and is documented in the top-level `README.md`.

| File | Contents |
|---|---|
| [operations.md](operations.md) | Installing in place of upstream, Bubble Card Tools, releases, rebasing onto a new upstream release |
| [decisions.md](decisions.md) | Dated decisions with the alternative considered and why it lost |
| [backlog.md](backlog.md) | Measured candidates for further patches, and upstream issues and pull requests worth carrying |

The fork's own changes are kept small and in as few upstream files as possible,
because every upstream release (about 1.5 a month in 2026) is merged in.
