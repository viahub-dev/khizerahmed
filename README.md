# Khizer Ahmed Khan — Personal Portfolio

A complete, deployment-ready personal portfolio combining a personal website, digital CV,
creative portfolio, and two tutoring service profiles — built with Next.js (App Router),
TypeScript, and Tailwind CSS. No database, no auth — content lives in one plain file.

## 1. Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Editing content

Everything editable lives in **`lib/data.ts`**. Update that file to change:

- Name, role, tagline, email, location (`site`) — no phone number is shown, by design
- Nav links (`nav`)
- Social links (`socials`) — currently Instagram, X/Twitter, Facebook, Discord
- About text, quick facts, and the highlight callout (`about`)
- Skills (`skills`), tools (`tools`), and interests (`interests`)
- Projects (`projects`)
- Creative service categories (`creativeCategories`)
- Academic tutoring classes/subjects (`tutoring`)
- Qur'an tutoring scope and highlights (`quranTutor`)
- Education entries (`education`)
- Experience entries (`experience`)

Nothing here was invented — only confirmed information was included. When you have new
confirmed details (e.g. the NED AI course, Qur'an tutoring specifics), just add them here.

## 3. Adding the background nasheed

The floating play button (bottom-right corner) looks for an audio file at:

```
public/audio/nasheed.mp3
```

No audio file ships with this project. To add one:

1. Get a licensed / permitted nasheed MP3 — soft, vocals-only fits the site's tone.
2. Save it as `public/audio/nasheed.mp3` (exact name).
3. Redeploy. The play button will pick it up automatically — no code changes needed.

To change the track later, just replace that file with a new one of the same name and
redeploy. (A fully in-browser "upload a new track without redeploying" experience would
require a small backend/admin system — let me know if you want that built later.)

## 4. Project structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, theme flash-prevention script
│   ├── page.tsx             # Home page — assembles every section in order
│   ├── globals.css          # Design tokens, heading hierarchy, animations
│   ├── not-found.tsx        # Custom 404
│   └── icon.svg              # Favicon
├── components/
│   ├── Navbar.tsx            # Sticky nav + mobile hamburger menu
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Creative.tsx          # Graphic Artist / Creative identity
│   ├── Tutoring.tsx          # Online Academic Tutor identity
│   ├── QuranTutor.tsx        # Online Qur'an Tutor identity
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── RevealHeading.tsx     # Scroll-triggered "drop + wiggle" heading animation
│   └── NasheedPlayer.tsx     # Floating background-audio toggle
├── lib/
│   └── data.ts                # <- all editable content lives here
├── public/
│   ├── audio/                 # <- add your nasheed.mp3 here
│   └── robots.txt
├── tailwind.config.ts          # Design tokens (see below)
└── package.json
```

## 5. Design system

**Light mode** — premium warm-luxury palette:
- Background: `#FFFFFF` (clean white)
- Cards: `#FAF3E8`, border `#E7D7C9`
- Major headings: `#7D1128` (velvet red) · Sub-headings: `#A63A50`
- Primary text: `#2F2A28` · Secondary text: `#5E524B`
- Primary accent: `#7D1128`, hover `#651022`
- Secondary accent (used in the Qur'an Tutor section): `#8B6B4A` (walnut brown)

**Dark mode** — original Ocean Tech palette, unchanged:
- Background `#0B1220`, card `#1A2333`, text `#F8FAFC` / `#94A3B8`, accent `#22D3EE`

**Fonts:** Space Grotesk (headings) + Inter (body), via `next/font/google`.

**Theme:** toggle in the navbar; on first visit it follows the visitor's system
preference, then remembers their choice in `localStorage`.

## 6. Deploying

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Leave the default build settings (`next build`) and deploy.

## 7. Tech stack

- **Next.js 14** (App Router) · **TypeScript** · **Tailwind CSS** · **lucide-react**
- No external services required to run the current version.
