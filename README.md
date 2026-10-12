# Gabrielaxy

Gabriel's personal portfolio. This is a Next.js static site; `npm run build` exports it to `out/` for Cloudflare Pages.

The local repository lives at `/Users/gabrielantonyxaviour/Documents/gabriel-personal-portfolio`. The GitHub repository is [gabrielantonyxaviour/gabrielaxy](https://github.com/gabrielantonyxaviour/gabrielaxy).

## Local development

Use Node.js 22 or later and install the locked dependencies:

```bash
npm ci
npm run dev
```

The development server runs at [http://localhost:3002](http://localhost:3002). Before publishing, run `npm run lint` and `npm run build`.

## Cloudflare Pages

The deployment target is the existing Cloudflare Pages project `gabrielaxy`, with `main` as the production branch. GitHub Actions validates pushes to `main` by installing locked dependencies, linting, and building the static export. It does not publish the site or need Cloudflare credentials.

For a production direct upload, authenticate Wrangler locally for the Cloudflare account containing `gabrielaxy`, then run from this checkout:

```bash
npm ci
npm run lint
npm run deploy:cloudflare
```

`deploy:cloudflare` builds the static export and uploads `out/` with the locally pinned Wrangler version. The command publishes to Pages, so run it only when a production upload is intended. `vercel.json` disables Vercel Git deployments; the existing Vercel site remains available during the domain cutover.

## Domain cutover status — 12 October 2026

Both `gabrielaxy.com` and `www.gabrielaxy.com` are attached to Pages. Their records in the pending Cloudflare zone point to `gabrielaxy.pages.dev`. The existing DMARC and other non-website records are preserved. The site is static and has no application database or runtime secrets to migrate.

The latest export is deployed at [gabrielaxy.pages.dev](https://gabrielaxy.pages.dev). All 29 public HTML pages were checked against the local export, and unknown routes return HTTP 404. The homepage was visually checked at mobile, tablet, and desktop widths.

The public domain still uses GoDaddy nameservers and serves Vercel. The available GoDaddy account no longer lists this domain registration; current registrar control is unconfirmed and must be recovered before the cutover. Its assigned Cloudflare nameservers are `jimmy.ns.cloudflare.com` and `rosalie.ns.cloudflare.com`. After changing the registrar nameservers, verify that the zone and both Pages custom domains are active, HTTPS works, and all public routes serve the current export.

The domain registration remains at GoDaddy. Moving registration to Cloudflare Registrar is a separate transfer and has not been started. Keep the Vercel fallback until the public domain is verified on Cloudflare.
