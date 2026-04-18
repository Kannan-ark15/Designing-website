# React Portfolio / Landing Page

## Overview
A modern React-based portfolio/landing page with a Neo-brutalist/Pop-art design style. Built with React 19, TypeScript, Vite 6, and Tailwind CSS 4.

## Tech Stack
- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite` plugin)
- **Animations:** Framer Motion (`motion`)
- **UI Components:** Shadcn UI + Base UI (`@base-ui/react`)
- **Icons:** Lucide React
- **Fonts:** Geist Variable Font
- **AI Integration:** Google Generative AI SDK (`@google/genai`)
- **Package Manager:** npm

## Project Structure
```
/
├── src/                  # Core application source
│   ├── main.tsx          # App entry point
│   ├── App.tsx           # Main app component
│   ├── index.css         # Global styles + Tailwind imports
│   └── components/       # Page section components
├── components/
│   └── ui/               # Shadcn UI primitives
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
├── index.html            # HTML template
├── vite.config.ts        # Vite config (port 5000, allowedHosts: true)
├── tsconfig.json         # TypeScript config
└── components.json       # Shadcn UI config
```

## Development
```bash
npm install
npm run dev   # starts on port 5000
```

## Key Configuration
- **Dev server:** `0.0.0.0:5000` with `allowedHosts: true` (required for Replit proxy)
- **Deployment:** Static site — `npm run build` outputs to `dist/`
- **Environment Variables:** `GEMINI_API_KEY` (see `.env.example`)

## Environment Variables
- `GEMINI_API_KEY` - Google Gemini API key for AI features
