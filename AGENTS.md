# Repository Guidelines

## Project Structure & Module Organization
- Root uses Nx for a NativeScript plugin monorepo; primary code lives in `packages/`.
- Current plugin: `packages/athmovil` (core logic under `src/`, Angular/Vue facades in subfolders when present).
- Demo apps live in `apps/demo` (Core) and `apps/demo-angular`; use them to reproduce issues and validate changes.
- Shared tooling and generators are under `tools/`; workspace config in `nx.json`, `workspace.json`, and `tsconfig.base.json`.

## Build, Test, and Development Commands
- `npm run setup`: clean install; resets lockfiles, installs deps, sets npm as package manager, wires husky/ts-patch.
- `npm start`: opens the interactive NativeScript tooling menu (focus a package, run demos, clean, build, test).
- `npm run add` / `npm run add-angular`: scaffold a new plugin or add Angular support via Nx generators.
- `npm run publish-packages`: guided publish flow; can auto-bump versions and tag prereleases.
- Direct Nx usage is supported: e.g., `nx test athmovil` or `nx build athmovil` when targets exist.

## Coding Style & Naming Conventions
- TypeScript-first; use 2-space indentation. Keep exports named and explicit.
- Prefer descriptive, PascalCase for classes, camelCase for variables/functions, kebab-case for files.
- Pre-commit formatting via Prettier (`lint-staged`); run `npx prettier --write <paths>` before pushing if needed.
- Keep public APIs minimal; avoid breaking changes without a major bump.

## Testing Guidelines
- Jest is configured at the workspace level (`jest.config.js`). Add project-specific configs inside each package if missing.
- Co-locate specs next to source (`*.spec.ts`); name suites after the module under test.
- Use demo apps to manually validate NativeScript behaviors on iOS/Android after unit coverage.
- Strive for meaningful assertions over snapshot-heavy tests; add regression tests for reported issues.

## Commit & Pull Request Guidelines
- Commit messages are short and imperative (e.g., `fix ios crash`, `add angular harness`); group related changes per commit.
- PRs should describe intent, key changes, and test evidence (commands run, demo platforms exercised).
- Link issues when applicable; include screenshots or device logs for platform-specific fixes.
- Keep diffs minimal; update `README.md` or package-level docs when user-facing behavior changes.
