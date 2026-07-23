# Rohan Jaiswal — Portfolio

A personal portfolio site built with React + Vite. Dark, developer-styled theme with an interactive flip ID-card, project showcase, skills, certifications, and a contact section.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional, to preview the production build locally
```

## Deploy to Vercel

**Option A — Vercel dashboard (easiest)**
1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite. Framework preset: `Vite`, Build command: `npm run build`, Output directory: `dist`.
4. Click Deploy.

**Option B — Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts; it will detect the Vite config automatically.

## Things to fill in later

A few spots can be customized as needed:

- **`src/data.js`**
  - `profile.linkedin` — double-check this against your actual profile URL (built from the handle on your resume).
  - `projects` → `learnvault.links.live` / `.repo` — add your live LearnVault Pro URL and repo link (or mark it private).
  - `projects` → `fake-news.links.repo` — set to `https://github.com/rohanjais44/fake_news_detector`.
- **`public/resume.pdf`** — replace with an updated resume any time; the filename must stay `resume.pdf` (or update the path in `data.js` → `profile.resume`).
- **`public/images/profile.jpg`** / **`profile-alt.jpg`** — swap in new photos any time; same filenames, ideally square (900×900 or larger).

## Structure

```
src/
  data.js              content for every section — edit this first
  components/          one component + one CSS file per section
public/
  images/              profile photos + favicon
  resume.pdf           downloadable resume
```
