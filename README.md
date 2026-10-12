# Gabrielaxy

Gabriel's personal portfolio, built with Next.js and deployed to Vercel.

The local repository lives at `/Users/gabrielantonyxaviour/Documents/gabriel-personal-portfolio`. The GitHub repository is [gabrielantonyxaviour/gabrielaxy](https://github.com/gabrielantonyxaviour/gabrielaxy).

## Local development

Use Node.js 22 or later and install the locked dependencies:

```bash
npm ci
npm run dev
```

The development server runs at [http://localhost:3002](http://localhost:3002). Before publishing, run `npm run lint` and `npm run build`.

## Production: Vercel

The existing project is `gabrielaxy` in the `rax-tech` team (project ID `prj_ToWQGIN2Nv80Xjgt4OyTuO3YjRTg`). Publish the latest committed `main` with the Vercel CLI. Git deployments are permitted by `vercel.json`, but automatic deployment is unavailable until the Vercel account has access to connect the GitHub repository. GitHub Actions validates the static export on pushes to `main`.

The public site is [www.gabrielaxy.com](https://www.gabrielaxy.com), with [gabrielaxy.vercel.app](https://gabrielaxy.vercel.app) as a Vercel address. The apex domain redirects to `www`.

For a manual production deployment, link this checkout to the existing project and use its explicit team ID:

```bash
vercel link --project gabrielaxy --scope team_CKaFp2ehg9rFUbO3GunR3Cb2 --yes
vercel --prod --scope team_CKaFp2ehg9rFUbO3GunR3Cb2 --yes
```

## Cloudflare backup

The static export (`out/`) can also be uploaded to the existing Cloudflare Pages project `gabrielaxy` with `npm run deploy:cloudflare`, after authenticating Wrangler to its owning account. Its separate address is [gabrielaxy.pages.dev](https://gabrielaxy.pages.dev).

The Cloudflare domain migration was shelved on 12 October 2026 because access to the current domain registration is unconfirmed. The public domain continues to use its existing DNS and Vercel deployment. The prepared Cloudflare zone and custom domains remain pending; do not change nameservers as part of routine website updates.
