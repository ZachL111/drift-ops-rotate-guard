# drift-ops-rotate-guard

`drift-ops-rotate-guard` is a focused JavaScript codebase around develop a JavaScript command-oriented project for rotate scenarios with round-trip fixtures, lossless normalization checks, and no credentials or hosted services. It is meant to be easy to inspect, run, and extend without a hosted service.

## Drift Ops Rotate Guard Walkthrough

I would read the project from the outside in: command, fixture, model, then roadmap. That keeps the automation idea grounded in files that can be checked locally.

## Reason For The Project

The repository exists to keep a technical idea small enough to reason about. The implementation avoids external dependencies where possible, then uses fixtures to make changes easy to review.

## Data Notes

`examples/extended_cases.csv` adds six named cases. I kept the names plain so failures are easy to read in a terminal: baseline, pressure, surge, degraded, recovery, and boundary.

## How It Is Put Together

The project is organized around a compact model rather than a large framework. Inputs are scored, classified, and checked against golden fixtures. The constants live in code and are mirrored in metadata so documentation drift is easy to catch. The JavaScript version uses native modules and a small Node test path.

## Capabilities

- Models dry-run output with deterministic scoring and explicit review decisions.
- Uses fixture data to keep file plans changes visible in code review.
- Includes extended examples for safety rails, including `recovery` and `degraded`.
- Documents idempotent checks tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.

## Command Examples

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.

## Check The Work

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Where Things Live

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Possible Extensions

- Add malformed input fixtures so the failure path is as visible as the happy path.
- Split the scoring constants into a typed configuration object and validate it before use.
- Add a comparison mode that shows how decisions change when one signal is adjusted.
- Add one more automation fixture that focuses on a malformed or borderline input.

## Tradeoffs

The scoring model is simple by design. More domain-specific behavior should be added through explicit adapters or extra fixture classes rather than hidden constants.

## Getting It Running

Install JavaScript and run the commands from the repository root. The project does not need credentials or a hosted service.
