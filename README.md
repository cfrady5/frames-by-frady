# Frames by Frady

Managed website design, development, and support for small businesses. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, and Recharts.

---

## Setup

**Requirements:** Node 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in values (see below)
cp .env.example .env.local

# 3. Start the development server
npm run dev
```

The app runs at `http://localhost:3000`.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in each value.

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Phase 5 | Supabase project URL (Settings > API) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Phase 5 | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Phase 5 | Supabase service role key — server-only, never expose client-side |
| `STRIPE_SECRET_KEY` | Phase 7 | Stripe secret key — server-only |
| `STRIPE_WEBHOOK_SECRET` | Phase 7 | From Stripe Dashboard > Webhooks |
| `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_STARTER` | Phase 2 | Stripe Payment Link URL for Starter plan |
| `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_GROWTH` | Phase 2 | Stripe Payment Link URL for Growth plan |
| `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_PREMIUM` | Phase 2 | Stripe Payment Link URL for Premium plan |

---

## Project Structure

```
src/
  app/
    page.tsx                   # Home
    services/page.tsx          # Services detail
    pricing/page.tsx           # Pricing with plan cards
    portfolio/page.tsx         # Portfolio case studies
    about/page.tsx             # About
    contact/page.tsx           # Contact form
    login/page.tsx             # Client login
    dashboard/
      layout.tsx               # Sidebar layout for all portal pages
      page.tsx                 # Dashboard overview
      analytics/page.tsx       # Analytics with charts
      billing/page.tsx         # Plan and billing details
      edit-requests/page.tsx   # Submit and track edit requests
      reports/page.tsx         # Monthly report cards
    api/
      contact/route.ts         # Contact form POST handler
  components/
    SiteHeader.tsx             # Fixed nav with mobile menu
    SiteFooter.tsx             # Footer with link columns
    SectionHeading.tsx         # Reusable heading block
    ServiceCard.tsx            # Icon + title + description card
    ProcessStep.tsx            # Numbered process step with connector
    PricingCard.tsx            # Plan card with feature list
    PortfolioCard.tsx          # Case study card with browser mockup
    ContactForm.tsx            # Controlled contact form
    LoginCard.tsx              # Email/password login card
    DashboardStatCard.tsx      # Stat tile with optional trend badge
    EditRequestForm.tsx        # Edit request submission form
    EditRequestList.tsx        # List of requests with status badges
    ReportCards.tsx            # Monthly report cards with download link
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, process, portal teaser, pricing teaser, CTA |
| `/services` | Full services breakdown |
| `/pricing` | Plan comparison + FAQ |
| `/portfolio` | Case study grid |
| `/about` | Company overview and values |
| `/contact` | Lead form |
| `/login` | Client login (mock in Phase 1, real auth in Phase 5) |
| `/dashboard` | Overview: stats, traffic chart, edit requests, billing |
| `/dashboard/analytics` | Traffic chart, top pages, devices, referrers |
| `/dashboard/billing` | Plan, billing status, manage billing button |
| `/dashboard/edit-requests` | Submit and track edit requests |
| `/dashboard/reports` | Monthly performance reports |

---

## Build

```bash
npm run build    # production build
npm run start    # serve production build locally
npm run lint     # ESLint
```

---

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Import the project in [vercel.com/new](https://vercel.com/new).
3. Set the root directory to `frames-by-frady` if the repo root is the parent folder.
4. Add all environment variables from `.env.example` in the Vercel dashboard under Settings > Environment Variables.
5. Deploy. Vercel auto-deploys on every push to `main`.

---

## Phases

| Phase | Status | What |
|---|---|---|
| 1 | Done | Scaffold, design system, all pages with mock data |
| 2 | Next | Stripe Payment Links on Pricing page |
| 3 | — | (Merged into Phase 1) |
| 4 | — | README + Vercel prep (this phase) |
| 5 | Upcoming | Supabase auth + schema + real login |
| 6 | Upcoming | Contact form + Edit Requests wired to Supabase |
| 7 | Upcoming | Stripe Customer Portal on Billing page |
| 8 | Upcoming | Real analytics data |
