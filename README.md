# Jim Spiewak — Personal Portfolio Site

Built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Replacing the Headshot

Drop your `headshot.jpg` into `/public/headshot.jpg` — overwrite the existing placeholder file. The image should be:
- Portrait orientation
- High resolution (minimum 1200px tall)
- JPEG format

The site applies a `sepia(20%) contrast(1.1)` filter and a left-fade mask automatically, so shoot for a neutral or slightly warm photo on a dark or neutral background.

After replacing, restart the dev server or redeploy.

**Admin upload route** (unsecured): `/admin` — provides a browser-based upload form. Add authentication before production use.

## Updating App URLs

All app links are managed in `lib/apps.ts`. Each entry has:

```ts
githubUrl: string | null;  // GitHub repo URL
liveUrl: string | null;    // Live deployed URL (takes priority for "View App" link)
```

Set either or both for each app. If both are null, no link is rendered.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — click Deploy.
4. Set your custom domain in Vercel → Project → Settings → Domains.

No environment variables are required for the base site.

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0a0a08` | Page background |
| `--color-surface` | `#111110` | Card/panel backgrounds |
| `--color-gold` | `#c9a84c` | Primary accent |
| `--color-gold-dim` | `#7a6330` | Secondary gold / rules |
| `--color-warm` | `#e8e4dc` | Body copy |
| `--color-muted` | `#6b6760` | Metadata / secondary text |
| `--color-ink` | `#ffffff` | Display headlines only |

## Typography Quick Reference

| Class | Font | Used for |
|-------|------|---------|
| `font-display` | Oswald 700 all-caps | Section headers, name lockup |
| `font-serif` | Playfair Display 700 italic | App names, award names, sub-headers |
| `font-body` | Source Serif 4 400 | All body copy |
| `font-mono` | IBM Plex Mono 400/500 | Dates, tags, metadata |
