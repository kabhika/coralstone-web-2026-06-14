# Coralstone Services Group — Website (Next.js static export)

Marketing site for Coralstone. Next.js App Router, static export to plain HTML
so Google and AI crawlers read real content (no client-side-only rendering).

## Stack
- Next.js 14 (App Router), `output: 'export'`
- TypeScript + Tailwind
- Fonts: Fraunces (display) + Hanken Grotesk (body) via next/font
- Zero runtime backend. Form posts to a third-party endpoint (see below).

## Run
    npm install
    npm run dev        # local dev at http://localhost:3000
    npm run build      # outputs static site to ./out

`./out` is a folder of plain HTML/CSS/JS. Deploy it anywhere (Vercel, Netlify,
Cloudflare Pages, Hostinger static, S3). On Vercel, no config needed.

## Crawlability check (the whole point)
After build:
    npx serve out
    curl http://localhost:3000/ | grep "building your website is only the start"
You should see the headline in raw HTML.

## Pages
- /                    home (websites + get-found hero, Our Work proof strip)
- /our-work            case studies (Switch Gear, SMP, Derive, Peel Manor)
- /get-found           Google + AI search visibility (SEO/AEO/GEO)
- /websites            websites with online booking
- /automation          phone and booking automation (was /ai-automation, 301 via vercel.json)
- /missed-call-rescue  product page, linked from /automation
- /it-support          IT support & security
- /pricing             website packages + automation + IT pricing
- /about               founder-led about + entity block (ACN/ABN)
- /contact             details, Calendly, WhatsApp, form
- /sitemap.xml, /robots.txt  auto-generated
- 404                  custom not-found page

## Copy source of truth
All customer-facing copy for the Sept 2026 restructure is in COPY-DECK.md,
including the case study facts, what is deliberately not claimed, and the open
sign-off items. Business facts (entity, ACN, ABN, phones, hours) live in
lib/facts.ts and are imported everywhere. Do not hand-copy them into pages.

## TODO before launch (Sept 2026 restructure)
1. ~~Copy sign-off~~ DONE 30 Sept (see COPY-DECK.md sign-off log): pricing
   confirmed $1,399/$1,799/$2,399 + GST, SEO monthly corrected to $800 + GST,
   client names confirmed, OG image generated.
2. SLOTS org: Abhi signs up at slots-peel-manor-house.vercel.app/signup with a
   @coralstonegroup.com.au address and confirms the email. Then configure org
   "coralstone" (see COPY-DECK sign-off log item 3 for the exact settings).
3. E2E booking test through /book/, delete the test booking.
4. Push to main (Vercel auto-deploys), then verify /ai-automation/ 301s.
5. Google Search Console: verify domain, submit sitemap.xml.
6. Create/claim the Coralstone Google Business Profile.
7. Add analytics once the GA4 property is confirmed.
8. Late October: capture Switch Gear rankings + booking counts, update the
   Our Work case study with real numbers.
9. Oz Phone Fanatics case study is drafted in COPY-DECK history but held back
   (their domain 404s today). Add when live.
10. Founder photo into public/ when supplied (optional, post-launch OK).
11. Replace public/CoralStoneLogoNew.svg if a higher-res source shows up.

OG image: public/og-image.png is generated from og-image.html at the repo root
(open it in Chrome at 1200x630 and screenshot, or re-run the generation task).
