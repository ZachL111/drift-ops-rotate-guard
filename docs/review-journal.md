# Review Journal

The repository goal stays the same: develop a JavaScript command-oriented project for rotate scenarios with round-trip fixtures, lossless normalization checks, and no credentials or hosted services. This note explains the added review angle.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 156, lane `ship`
- `stress`: `rename risk`, score 217, lane `ship`
- `edge`: `operator cost`, score 176, lane `ship`
- `recovery`: `idempotence`, score 205, lane `ship`
- `stale`: `dry-run spread`, score 215, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.
