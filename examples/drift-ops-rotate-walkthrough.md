# Drift Ops Rotate Guard Walkthrough

This note is the quickest way to read the extra review model in `drift-ops-rotate-guard`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 156 | ship |
| stress | rename risk | 217 | ship |
| edge | operator cost | 176 | ship |
| recovery | idempotence | 205 | ship |
| stale | dry-run spread | 215 | ship |

Start with `stress` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

`stress` is the optimistic case; use it to make sure the scoring path still rewards strong signal.
