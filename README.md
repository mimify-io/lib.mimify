# lib.mimify

Monorepo for mimify's published npm packages (scoped under `@mimify/*`).

## Requirements

| Tool | Version                             |
| ---- | ----------------------------------- |
| Node | ≥ 18 (`.nvmrc` pins `24.12.0`)      |
| pnpm | ≥ 9 (`10.26.0` pinned via corepack) |

## Structure

```
packages/core — @mimify/core, the animated-widgets engine (placeholder)
```

## Setup

```bash
pnpm setup   # installs correct Node + pnpm via nvm, then runs pnpm install
```

Or manually:

```bash
nvm use
pnpm install
```

## Commands

| Command        | Description                            |
| -------------- | -------------------------------------- |
| `pnpm dev`     | Run all packages in watch mode         |
| `pnpm build`   | Build all packages (CJS + ESM + types) |
| `pnpm test`    | Run tests                              |
| `pnpm check`   | Lint + typecheck + prettier            |
| `pnpm release` | Publish to npm via semantic-release    |

## Contributing

Commits must follow the [Conventional Commits](https://www.conventionalcommits.org) spec — enforced by commitlint on every commit.

```
feat: add something new
fix: correct a bug
chore: housekeeping
docs: documentation only
refactor: no behaviour change
test: add or update tests
```

`semantic-release` derives the next version and changelog from these prefixes automatically:

- `fix` → patch
- `feat` → minor
- `feat` + `BREAKING CHANGE` footer → major
