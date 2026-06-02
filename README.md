# Sanay Angular Exchange

A polished Angular 21 crypto-exchange UI prototype with SSR, Tailwind CSS, signal-based market state, live market adapters, watchlist flows, asset detail pages, and a demo trading modal.

## Tech stack

- Angular 21 standalone components
- Angular SSR
- Tailwind CSS 4
- Signals for local state
- Vitest through Angular's unit-test builder
- Binance WebSocket adapter with Nobitex and fake-data fallback paths

## Local setup

Use Node.js 22+ and npm 10+.

```bash
npm ci
npm start
```

Open `http://localhost:4200`.

## Quality commands

```bash
npm run build
npm test
npm run typecheck
npm run format:check
```

## Project scripts

| Script                 | Purpose                                                           |
| ---------------------- | ----------------------------------------------------------------- |
| `npm start`            | Start Angular dev server                                          |
| `npm run build`        | Build browser and SSR bundles                                     |
| `npm test`             | Run unit tests once                                               |
| `npm run typecheck`    | Run a development build as the current Angular template/type gate |
| `npm run format`       | Format the repository with Prettier                               |
| `npm run format:check` | Check formatting                                                  |
| `npm run clean`        | Remove generated Angular/build outputs                            |
| `npm run serve:ssr`    | Run the built SSR server                                          |

## Notes

- `node_modules`, `.angular`, and `dist` are intentionally ignored and should not be committed.
- Dynamic asset pages use SSR rendering, while static routes remain prerendered.
- Test setup mocks startup WebSocket orchestration so unit tests stay deterministic.
- This is still a frontend prototype. Auth, trading, persistence, and live-provider resiliency need real API contracts before production use.
