# Project Review — Sanay Angular Exchange

## Initial findings

- The uploaded archive included `node_modules`, `.git`, `.angular`, and build output candidates, which made the zip unnecessarily large and not repository-clean.
- `npm run build` failed after executable permissions were restored because `asset/:symbol` was configured for prerendering without route params.
- Unit tests passed, but the app-level spec started WebSocket orchestration and produced noisy network-related logs.
- Source files contained Persian comments inside TypeScript/SCSS. User-facing Persian copy is still valid, but code comments were cleaned.
- `ThemeService` had a debug `console.log` in production code.
- `AuthService` mixed service logic with browser alerts and used `any[]` for stored users.
- The market store exposed several mutable-looking computed members without `readonly` and had inconsistent symbol normalization paths.
- `PriceTicker` used inconsistent file/directory casing.

## Changes made

- Fixed SSR route configuration by rendering `asset/:symbol` on the server instead of trying to prerender unknown dynamic params.
- Reworked auth service types and moved auth error presentation to the login page instead of service-level alerts.
- Hardened market store normalization, watchlist updates, and safe price updates.
- Removed dead Binance adapter code and cleaned message parsing behavior.
- Removed debug logging from theme handling.
- Added deterministic app tests by mocking live connection startup.
- Added tests for market store behavior and price helpers.
- Renamed `PriceTicker/priceTicker.*` to `price-ticker/price-ticker.*`.
- Cleaned Persian code comments from source files while keeping Persian UI copy.
- Added professional scripts for typecheck, formatting, cleanup, and SSR serving.
- Updated `.gitignore` to keep generated outputs and environment files out of Git.
- Rewrote README with practical setup and quality commands.

## Validation

Executed successfully:

```bash
node node_modules/@angular/cli/bin/ng.js build
node node_modules/@angular/cli/bin/ng.js test --watch=false
node node_modules/prettier/bin/prettier.cjs --check .
```

Result:

- Build: passed
- Unit tests: 4 files passed, 10 tests passed
- Formatting: passed

## Known limitations

- The project remains a frontend prototype; demo auth uses local storage and should not be used for production authentication.
- The trading modal is visual/demo only.
- Live market providers still need production-grade retry, telemetry, and API/provider contracts.
- There is no e2e test suite yet.
