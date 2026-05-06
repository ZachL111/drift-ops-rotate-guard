# drift-ops-rotate-guard

`drift-ops-rotate-guard` is a JavaScript project in automation. Its focus is to develop a JavaScript command-oriented project for rotate scenarios with round-trip fixtures, lossless normalization checks, and no credentials or hosted services.

## Project Rationale

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Drift Ops Rotate Guard Review Notes

`stress` and `baseline` are the cases worth reading first. They show the optimistic and cautious ends of the fixture.

## Feature Set

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/drift-ops-rotate-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `rename risk` and `dry-run spread`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture

The core code exposes a scoring path and the added review layer uses `signal`, `slack`, `drag`, and `confidence`. The domain terms are `dry-run spread`, `rename risk`, `operator cost`, and `idempotence`.

The JavaScript implementation avoids hidden state so fixture changes are easy to reason about.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Test Command

That command is also the regression path. It verifies the domain cases and catches mismatches between the CSV, metadata, and code.

## Next Improvements

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
