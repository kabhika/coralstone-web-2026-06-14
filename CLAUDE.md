# Coralstone Services Group website (coralstonegroup.com.au)

## Stack and constraints

Next.js 14, App Router, static export (`output: 'export'`). No API routes, no
server actions, no server components needing a runtime. Any dynamic behaviour
must be client-side JS calling external endpoints (Supabase Edge Functions).
Deployed on Vercel.

Fonts: Fraunces (headings), Hanken Grotesk (body), via next/font.
Brand colours: navy `#122052`, terracotta `#d86937`.

Build outputs plain static HTML/CSS/JS to `./out` so Google and AI crawlers
read real content, not client-rendered shells.

## Run

    npm install
    npm run dev        # local dev at http://localhost:3000
    npm run build       # static export to ./out

Crawlability check after build:

    npx serve out
    curl http://localhost:3000/ | grep "<expected headline text>"
The headline must appear in raw HTML.

## Pages

- /              home (websites + get-found hero, Our Work proof strip)
- /our-work      case studies (Switch Gear, SMP, Derive, Peel Manor)
- /get-found     Google + AI search visibility (SEO/AEO/GEO)
- /websites      websites with online booking
- /automation    phone and booking automation (was /ai-automation, 301 via vercel.json)
- /missed-call-rescue  product page, linked from /automation
- /it-support    IT support & security
- /pricing       website packages + automation + IT pricing
- /about         founder-led about + entity block (ACN/ABN)
- /contact       details, Calendly, WhatsApp, form
- /thank-you     post-submit
- /sitemap.xml, /robots.txt  auto-generated, 404 custom

## Positioning

Sells to small businesses and tradies in Greater Sydney. Leads with websites
plus online booking and Google/AI-search visibility (the work with real named
deployments). Automation is sold one click deeper, in plain English. Missed-Call
Rescue ($497 setup + $79/mo) is a product on /automation/, not the homepage
offer. Sitewide CTA is the free check (Calendly link in lib/facts.ts). Stella's
1300 404 523 line is a live demo on /automation/ only; the sitewide phone is
Abhi's mobile. Entity facts (ACN 690 335 034, ABN, address) live in
lib/facts.ts and must be imported, never hand-copied. Case study copy must stay
within the recorded facts in COPY-DECK.md.

## Content rules (all customer-facing copy)

1. Use the coralstone-voice skill for tone, humanizer skill as final pass on
   any copy written.
2. Plain ASCII. No em dashes, no en dashes, no curly quotes. No hyphens or
   colons as sentence punctuation, restructure instead.
3. Australian English spelling. Plain English headlines. Technical terms
   appear only as small tags under the plain-English description, matching
   the existing card pattern.
4. No claim states a specific result (numbers, rankings, revenue) unless from
   a named real deployment. Directional benefits are fine.
5. AEO / AI-search readiness is a benefit of how sites are built. Never
   priced separately, never guarantees rankings or AI visibility.
6. Month to month, no lock-in messaging is core brand, never remove it.
7. Never mention old versions of this website or describe anything as fixed
   or improved relative to the past. Site speaks only in present tense about
   what Coralstone does now.

## Design direction

- Use the frontend-design skill for all page builds and visual changes.
- Target feel: obviously well-made, calm, premium. Explicitly NOT the
  dark-mode gradient AI-agency look. A tradie should find it clear; a
  developer should find it tight.
- All icons: lucide-react, one consistent stroke weight, terracotta accent
  on navy or off-white. No emoji icons anywhere.
- Motion: Framer Motion, subtle and purposeful only, fade-and-rise on scroll
  into view, gentle hover on cards. Nothing looping, nothing parallax,
  nothing that moves without user cause. Respect prefers-reduced-motion.
- Typography: Fraunces headings with tight tracking at large sizes, Hanken
  Grotesk body at generous line height. Generous whitespace between
  sections, unhurried feel.
- /missed-call-rescue/ has a PhoneMockup component: phone frame, missed call
  notification, then rescue SMS animating in. Pure CSS/Framer Motion, no
  images, ASCII copy inside it.
- Performance is a design feature: Lighthouse performance above 95, no
  layout shift, static export stays lean.

## Workflow rules

- Read a file fully before editing it. Minimal diffs.
- After every change run `npm run build` and confirm the static export
  succeeds before considering the task done.
- Never touch DNS, domain, or Vercel project settings.
- Commit per logical change, one-line message.

## Before launch (Sept 2026 restructure)

Tracked in README.md "TODO before launch". Copy sign-off items live in
COPY-DECK.md section 2. Nothing deploys until Abhi signs off the copy deck.
