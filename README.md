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
    curl http://localhost:3000/ | grep "Get found online"
You should see the headline in raw HTML. The current live site does not.

## Pages
- /            home
- /websites     websites & search (SEO/AEO/GEO)
- /it-support   IT support & security
- /pricing      website packages + IT pricing
- /about        honest founder-led about
- /contact      details, Calendly, form
- /sitemap.xml, /robots.txt  auto-generated

## TODO before launch
1. Contact form: edit app/contact/page.tsx, replace the form `action`
   (https://formspree.io/f/your-form-id) with your real Formspree / Web3Forms
   / Basin endpoint. Static export cannot process forms server-side.
2. Confirm or remove claims: the old site's "25+ years", invented timeline,
   three case studies, and "AWS Certified" badge are intentionally NOT here.
   Add back only what is true and verifiable.
3. Add real proof (first client win, testimonial) when you have one.
4. Set canonical domain + verify in Google Search Console; submit sitemap.xml.
5. Replace public/logo.png if you have a higher-res source.
