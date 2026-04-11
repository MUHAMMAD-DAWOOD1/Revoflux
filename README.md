# RevoFlux — AI Automation Agency

High-performance, conversion-focused B2B AI automation agency website built with Next.js 14, Tailwind CSS, and custom hardware-accelerated CSS animations mapped precisely to the Framer "Xtract" template standard.

## Architecture
- **Framework:** Next.js 14 (App Router)
- **Language:** React 18 + TypeScript
- **Styling:** Tailwind CSS (Custom configured Dark Mode styling Engine)
- **Icons:** Lucide React
- **Hosting:** Recommended Vercel edge deployment

## Local Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment:**
   Copy the example environment into action and fill out the routing keys.
   ```bash
   cp .env.example .env
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```

## Production Compilation
Builds the static routing schema and aggressively optimizes CSS assets:
```bash
npm run build
npm start
```
