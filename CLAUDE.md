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

- /              home
- /websites      websites & search (SEO/AEO/GEO)
- /it-support    IT support & security
- /pricing       website packages + IT pricing
- /about         founder-led about
- /contact       details, Calendly, form
- /thank-you     post-submit
- /sitemap.xml, /robots.txt  auto-generated

## Positioning

Sells to small businesses and tradies in Greater Sydney. Three verticals: AI
Automation, IT Support, Websites and SEO. Flagship product: Missed-Call
Rescue ($497 setup + $79/mo). Only sitewide CTA is the free audit (Calendly
link already in the codebase). Services with no listed price end with "We
assess this in your free audit."

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

## Before launch (carried over, still open)

1. Contact form: `app/contact/page.tsx` posts to Web3Forms (see recent
   commit) — confirm the real endpoint/key is live, not a placeholder.
2. Confirm or remove claims: no "25+ years", no invented timeline, no case
   studies, no "AWS Certified" badge unless true and verifiable.
3. Add real proof (first client win, testimonial) once one exists.
4. Set canonical domain, verify in Google Search Console, submit
   sitemap.xml.
5. Replace public/logo.png if a higher-res source shows up.
