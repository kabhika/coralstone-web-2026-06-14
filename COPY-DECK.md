# Copy Deck, Coralstone website restructure (Sept 2026)

This deck is the source of truth for every line of copy in the restructure. Review
and confirm the items in section 2 before the site is deployed. Nothing goes live
until you sign this off.

ASCII only, Australian English, coralstone-voice throughout. Technical terms appear
only as small tags, never in headlines.

---

## 1. What changed and why

The old site led with Missed-Call Rescue, a product no client has bought yet, while
six real client builds were shown nowhere. The new site leads with what sells:
websites with online booking, and getting found on Google. Proof of real work is now
front and centre. Automation is still sold, one click deeper, in plain English.

The legal entity details (ACN, ABN, Pty Ltd) now appear in the footer of every page,
on About, and in structured data for search engines.

## 2. Decisions you must confirm before deploy

SIGN-OFF LOG (30 Sept 2026, all items answered by Abhi):
1. PRICING. CONFIRMED: $1,399 / $1,799 / $2,399 + GST, after a market reality
   check (direct competitor Ai Local Link: sites from $1,250/$1,950/$2,950,
   retainer $750/mo, paid audit $299; AU agencies $10k-$30k; SEO market
   $500-$2,000/mo). CORRECTION APPLIED: ongoing SEO is $800/mo + GST, not
   $300/mo as first drafted.
2. CLIENT NAMES. CONFIRMED: real names and live links stay.
3. BOOKING. DECIDED: replace Calendly with our own SLOTS booking platform.
   /book/ embeds slots-peel-manor-house.vercel.app/o/coralstone/free-check
   (Switch Gear pattern). Calendly URLs kept as rollback comments. Launch
   waits until the coralstone org is live on SLOTS.
4. ANALYTICS. Unresolved, optional post-launch. GA4 G-Q5XW2CM260 ownership
   unconfirmed; Abhi to check analytics.google.com.
5. OG IMAGE. APPROVED: generated from brand assets as public/og-image.png
   (1200x630, from og-image.html). Fixes blank WhatsApp link previews.
6. GOOGLE BUSINESS PROFILE. None exists. Abhi creates it after launch.
7. PHOTO. Abhi will drop it into public/ (folder preferred over chat).
   Optional for launch.

Original questions kept for reference below.

1. PRICING. Website tiers in this deck are $1,399 / $1,799 / $2,399 + GST (the
   benchmark correction from your records; the live site still shows the older
   $899 / $1,399 / $1,799). Confirm or change.
2. CLIENT NAMES. Our Work names Switch Gear Automotive, Sydney Movers & Packers,
   Derive Driving School, and Peel Manor House, with live links (all verified
   30 Sept 2026). Give each a final yes, or tell me to genericise any of them.
3. CALENDLY. All CTAs say "Book a free chat" and point to your existing 30-minute
   Calendly event. If you want to sell a "15-minute Google check", shorten the
   Calendly event itself, then I update the label.
4. ANALYTICS. No analytics are wired in. Confirm whether GA4 G-Q5XW2CM260 is
   Coralstone's own property and I will add the tag.
5. OG IMAGE. There is no social share image. Needs a brand asset decision.
6. GOOGLE BUSINESS PROFILE. Does Coralstone have one? If not, create it after
   launch. You sell local visibility, you must have it.
7. PHOTO. About currently has no founder photo. Send one and I add it.

## 3. New site map

| Route | Page |
|---|---|
| / | Home. Websites + get found hero, Our Work strip |
| /our-work/ | Case studies (NEW) |
| /get-found/ | Google + AI search visibility (NEW) |
| /websites/ | Websites that win work, incl. online booking |
| /automation/ | Was /ai-automation/. Plain English, Stella live demo |
| /it-support/ | Unchanged apart from cross references |
| /pricing/ | Websites first, corrected tiers |
| /about/ | Entity block, founder named |
| /contact/ | WhatsApp added, phone story cleaned up |
| /missed-call-rescue/ | Product page, kept, linked from /automation/ |

/ai-automation/ 301 redirects to /automation/. Sitemap now lists every public page.
Structured data (LocalBusiness) added site-wide, FAQ schema where FAQs appear.

Nav: Websites · Get Found · Our Work · Automation · IT Support · Pricing.
About and Contact stay in the footer. Header phone pill is now your mobile
(0467 604 791, "Call Abhi"). The 1300 number belongs to the Stella demo on
/automation/ only.

---

## 4. Home page

TAG: Websites · Google visibility · Greater Sydney

H1: Your next customer is searching.
(second line, terracotta italic) Make sure they find you first.

Sub: We build fast websites with online booking, and get Sydney trades and small
businesses onto page one of Google, and into the answers AI assistants give.
One local engineer. Fixed prices. No lock-in.

CTAs: [Book a free check ->] [See our work]
Microcopy: Free, no obligation. A straight answer about where your customers are
slipping away.

Stat strip: Free (No-obligation check) · Weeks (From first chat to live site) ·
No (Lock-in contracts) · Local (On-site, Greater Sydney)

Right-hand card, "What you get":
- A fast, custom website. Mobile-first, built to turn visits into calls.
- Online booking. Customers book while you are under a car or on a job.
- Found on Google. Structured so Google, and the AI people now ask, can read it.
- One local engineer. The person who builds it is the person who answers.

OUR WORK strip (3 cards + link "See all our work ->"):

Switch Gear Automotive, Riverstone
"No website, a 3.7-star Google profile, and bookings by phone only. Three weeks
later: a 32-page site with live online booking, the only workshop in its area
with it."
Tag: Website + booking + local SEO

Sydney Movers & Packers, Western Sydney
"An old WordPress site became a 29-page site with 27 suburb pages and their
4.6-star Google rating wired into search results. Our search-readiness score for
the site went from 28 to 85 out of 100."
Tag: Website + SEO, ongoing

Derive Driving School, Penrith
"Bookings used to mean playing phone tag. Now every course, car and truck, has
its own live online booking page synced to the instructors' calendars."
Tag: Website + booking system

WHAT WE DO (3 cards):
1. A website that wins work. Custom-built, fast, mobile-first, written for your
   customers. Online booking built in, on our own platform. -> /websites/
   Tag: Websites + booking
2. Get found on Google. Local search, your Google profile, reviews, and the
   structured work that puts you in front of people searching nearby, and in the
   answers AI assistants give. -> /get-found/
   Tag: SEO / AEO / GEO
3. Never miss a job. Every missed caller texted back in seconds. An AI
   receptionist who answers, books, and never puts anyone on hold. -> /automation/
   Tag: Automation

Slim band under the cards: "We also keep the boring tech running. Computers,
networks, backups, and security, looked after by the same engineer. -> IT support"

HOW IT WORKS (4 steps, ink band):
1. Free check. 30 minutes. We look at your site, your Google presence, and where
   enquires are slipping away. You keep the findings either way.
2. Fixed quote. Scope and price in writing before anything starts.
3. Live in weeks. Most sites go from kickoff to live in three to six weeks.
4. Stay found. Optional monthly work that keeps you climbing, and keeps you in
   the AI answers.

WHO WE HELP (chip row): Mechanics · Removalists · Electricians and tradies ·
Driving schools · Repair shops · Venues and shops
Line: "If your customers find businesses like yours on Google, we can help."

WHY CORALSTONE (kept, one fix):
- A real engineer answers. (unchanged)
- No lock-in contracts. (unchanged)
- Pay when you are happy. Websites start with a $497 deposit. The balance is due
  only when you are satisfied. Everything else is quoted the same way, agreed
  before we start.
- Fixed quotes, no jargon. (unchanged)
Headline kept: "Enterprise experience. Small-business manners."

CTA band (kept): "Start with a free check of your website and Google presence."
Button: "Book a free 30-minute chat ->"
Footer line: Or email hello@coralstonegroup.com.au · Call Abhi on 0467 604 791 ·
Mon-Fri 8am-6pm AEST

## 5. /our-work/

EYEBROW: Our work
H1: Real jobs, live sites, local businesses.
Intro: No mockups, no "coming soon". Every business below is real, the sites are
live, and the work is ours from start to finish. Numbers marked "to come" get
filled in as we measure them, never before.

Case study block layout: Before / What we built / Live now, plus live site link.

1) SWITCH GEAR AUTOMOTIVE, Riverstone NSW. Auto repair workshop. switchgearautos.com.au
Before: No website at all. A Google profile with 3.7 stars from 36 reviews, and
every booking taken by phone during workshop hours. None of the workshops in
their search area offered online booking.
What we built: A 32-page website covering every service, pink slip and blue slip
information, real workshop photos, and live online booking on our own platform.
Eight services bookable around the clock, customers enter their vehicle and the
job, and a display board in the workshop shows the day's bookings. Live in under
a month from first meeting.
Live now: Bookings arrive through the site, for Riverstone, Rouse Hill, Box Hill,
Marsden Park, Schofields, and nearby.
To come: Google rankings and booking counts, once there is a month of data.

2) SYDNEY MOVERS & PACKERS, Western Sydney. Removalists. sydneymoversandpackers.biz
Before: An ageing WordPress site that scored 28 out of 100 on our search
readiness check.
What we built: A 29-page custom site with 27 suburb pages written for each area,
rates and service answers in plain language, their 4.6-star Google rating wired
into search results, and every quote request landing instantly in their inbox.
Live now: Our search readiness score for the site is 85 out of 100 and climbing,
with monthly work continuing. (Score is our own audit tool, first scored 28 at
handover, 85 on our current stricter scorecard.)
To come: Rankings for the competitive suburb pages.

3) DERIVE DRIVING SCHOOL, Penrith NSW. Car and truck licence training.
derivedrivingschool.com
Before: Every booking meant phone tag during office hours, across dozens of
course types.
What we built: Sixteen live online booking pages, one per course, from car
lessons to HR truck licences, synced to the instructors' own calendars.
Live now: Students book and pay online, any hour, for every course on offer.

4) PEEL MANOR HOUSE, Karnup WA. Wedding and event venue. peelmanorhouse.com.au
Before: An old WordPress site. Our audit before the rebuild found active malware
redirecting visitors to gambling sites.
What we built: A nine-page rebuild, the domain moved across without losing
search history, and online ticketing for their high tea events.
Live now: The venue takes enquiries and event bookings through the site.

STRIP (ink band): The booking system on these sites is ours.
"We did not plug in a third-party widget with someone else's branding and
per-seat fees. Our booking platform runs on the client's own site, under their
brand, on their domain. That is why it can take a mechanic's drop-off slots and a
driving school's course calendar without breaking a sweat."

CTA: "Your business could be next." / "Book a free check. We will look at what
you have now and tell you straight what it would take."

## 6. /get-found/

EYEBROW: Get found
H1: Rankings don't ring. Calls do.
Intro: Most SEO ends in a monthly report. Ours ends in a phone call. We get you
on Google, into Maps, and named when someone asks AI who to call.

Section: Where customers now look (3 cards)
1. Google Search. The map pack and the local results. Won with your Google
   profile, reviews, and a site Google can read. Tag: Local SEO
2. Google Maps. Verified profile, the right categories, photos, and a steady
   flow of reviews. Claimed, cleaned up, and kept current. Tag: Google Business
   Profile
3. AI assistants. ChatGPT, Google AI, and Siri now answer "who is a good
   electrician near me" with names. Sites need to be structured so they can be
   read and trusted, most are not. Tag: AEO / GEO

Section: What the work actually is (plain list)
- Your Google Business Profile claimed, complete, and consistent everywhere your
  name appears
- Pages built for your services and your suburbs, written for customers first
- Structured data, a label kit that lets Google and AI tools read your business
  details at a glance
- Reviews asked for properly, at the moment customers are happiest
- Speed and mobile-first build, because Google ranks it and customers expect it
- Monthly reporting in plain English: what moved, what is next

Section: How you buy it
Every website we build ships with the foundations done. Businesses that want to
keep climbing take the monthly Stay Found plan, from $800 a month, no lock-in.
We never promise a ranking, and you should not trust anyone who does.

FAQ (FAQPage schema):
- How do I get my business on page one of Google? "There is no switch to flip.
  It is your Google profile, your reviews, your site's content and speed, and
  steady work over months. The free check shows you which of those is holding
  you back."
- What is AEO? "Answer Engine Optimisation. SEO gets you found on Google. AEO
  gets you into the answers AI assistants like ChatGPT and Google AI give when
  people ask for a business like yours. Same discipline, newer doorway."
- How long does local SEO take? "Google Maps and profile fixes show movement in
  weeks. Competitive search terms take months of steady work. Anyone promising
  page one by Friday is selling you something."
- Do you guarantee rankings? "No. Nobody honestly can. We do the work that
  earns them, we show you the numbers monthly, and there is no lock-in if you
  stop."

CTA: "See where you stand right now." / Free check, no obligation.

## 7. /websites/ (updated)

EYEBROW: Websites
H1: A website is the foot in the door. Being found is the point.
Intro: A fast, custom website with online booking built in, then the unglamorous
work that actually brings calls: Google, local search, and the AI assistants
more people now ask first. One engineer builds it, owns it, and answers for it.

1-2-3 band (kept): Build / Get on the map / Stay found

Services cards (kept 8, two updates):
- "Take bookings automatically" rewritten: "Customers book online, on your own
  site, on our own booking platform. No third-party branding, no per-seat fees,
  and every booking lands in your calendar and your reports. Built for trades:
  drop-off slots, service menus, vehicle details." Tag: Online booking
- "A website that wins customers" card unchanged, rest unchanged.

NEW proof band: "Recent builds: Switch Gear Automotive, Derive Driving School,
Peel Manor House. -> See our work"

AEO explainer kept as is.

CTA (kept).

## 8. /automation/ (was /ai-automation/)

EYEBROW: Automation
H1: You do not lose jobs because the phone does not ring.
Intro (kept, one wording change): as current, plain English.

Missed-Call Rescue featured band kept ($497 setup + $79/mo).

NEW: TRY IT NOW band (ink):
"Want to see what an AI receptionist actually sounds like? Call 1300 404 523
right now. Stella will answer. Ask her what your business does, ask her to book
you in, try to catch her out. That is the same receptionist we can put on your
business line, and the engineer who set her up is the one who looks after her."
Button: Call 1300 404 523 (tel link). Microcopy: A live demo, not a recording.
Stella is Coralstone's own receptionist.

Five more systems cards kept (Speed-to-Lead, No-Show Killer, Review Engine,
Customer Reactivation, Stella).

CTA kept.

## 9. /pricing/ (updated)

EYEBROW: Pricing
H1: Transparent. No surprises.
Intro: Website prices are right here. Automation and IT support are quoted after
a free check, and anything monthly is month to month. You only pay when you are
happy with the work.

Section 1: WEBSITES (moved first). "One-time. No hidden charges."
- Starter, $1,399 + GST: up to 5 pages, mobile-first fast design, professional
  copywriting, Google setup and basic SEO, contact form and 1 year hosting,
  30 days post-launch support
- Business + Search, $1,799 + GST (Most popular): everything in Starter, up to
  15 pages, online booking on our own platform, advanced SEO + AEO setup,
  analytics and Search Console, competitor keyword analysis, blog and speed
  optimisation, optional ongoing SEO from $300/mo
- Online Store, $2,399 + GST: everything in Business + Search, up to 50
  products, card payments (Stripe / PayPal), cart checkout and accounts, stock
  management, shipping and pickup options
Note kept: start with a $497 deposit, balance when satisfied.

Section 2: AUTOMATION (kept as current AI section, heading "Automation").
Section 3: IT SUPPORT (kept).

## 10. /about/ (updated)

EYEBROW: About Coralstone
H1: Enterprise IT, brought down to your size.
Intro: Coralstone is small on purpose. You get an engineer with a serious
corporate background, working directly with you, at small-business prices.

Body (kept, founder now named): "Coralstone is run by Abhishek Sinha, a Modern
Workplace and End User Compute engineer (Microsoft certified, MS-102 and
MD-102) who spent years managing fleets of devices and security for larger
organisations..." (rest of current copy kept)

NEW entity block (card at the end of the body):
Coralstone Services Group Pty Ltd
ACN 690 335 034
ABN 51 690 335 034
Box Hill NSW 2765, Australia
Mon-Fri 8am-6pm AEST

Four rules kept unchanged.

## 11. /contact/ (updated)

H1: Let's talk about your tech. (kept)
Details list: Box Hill NSW 2765, Sydney (was "Sydney, New South Wales,
Australia") · Call Abhi, +61 467 604 791 · WhatsApp, message us any time (wa.me
link) · hello@coralstonegroup.com.au · Mon-Fri 8am-6pm AEST
Button: Book a free 30-minute chat
Form service dropdown, reordered: New website / Online booking system / Get
found on Google (SEO / AEO) / Online store / Missed-Call Rescue and automation /
IT support, computers and network / Cloud migration (Microsoft 365) / Something
else

## 12. Footer (every page)

Line 1: (c) 2026 Coralstone Services Group Pty Ltd · ACN 690 335 034 ·
ABN 51 690 335 034 · Box Hill NSW 2765, Australia
Line 2 links: Websites · Get Found · Our Work · Automation · IT Support ·
Pricing · About · Contact
Line 3: hello@coralstonegroup.com.au · Call Abhi, 0467 604 791 · Mon-Fri 8am-6pm

## 13. What we deliberately do NOT claim

- No Google ranking positions anywhere. Switch Gear's site is days old, no
  ranking data exists yet. The "only workshop in its area with online booking"
  claim is from our own competitive audit of their search area.
- No booking counts, lead counts, or revenue figures for any client.
- No testimonial quotes. None have been collected. When a client gives one in
  writing, it goes in.
- No "25+ years", no AWS badge, no team size. Verified facts only: 20+ years in
  enterprise IT, Microsoft certified MS-102 and MD-102.
- No guarantees of rankings or AI visibility, ever.

## 14. Launch checklist (after your sign-off)

1. Deploy (push to main, Vercel auto-deploys)
2. Verify /ai-automation/ 301s to /automation/
3. Google Search Console: verify domain, submit sitemap.xml
4. Create/claim Coralstone Google Business Profile
5. Add analytics once property confirmed
6. Calendar reminder for late October: capture Switch Gear GSC rankings and
   booking counts, update the case study with real numbers
7. Oz Phone Fanatics case study is written and held back (their domain returns
   404 today). Add when live.

## 15. Hook bank (rotation)

Written by Abhi, 2026-09-30. To be rotated through the Get Found page hero (and
ads/social when they exist). Hook 1 is LIVE since 2026-09-30. When rotating,
update the H1, the intro line, the page metadata description, and section 6 here.

1. Rankings don't ring. Calls do.
   Most SEO ends in a monthly report. Ours ends in a phone call. We get you on
   Google, into Maps, and named when someone asks AI who to call.

2. Google ranks you. AI recommends you. Locals call you.
   Three places customers decide who to call. We make sure you show up in all
   of them.

3. SEO that ends in a phone call, not a PDF.
   Other agencies tell you where you ranked. We make sure you're the name that
   comes up on Google, in Maps, and in ChatGPT.

4. Someone just asked AI for an electrician in Penrith. Were you the answer?
   More customers skip Google and ask AI. If your site isn't built for that,
   you never knew the question was asked.

5. Be the name Google shows and AI says.
   Local SEO for Sydney trades and small business. Built for how people search
   now, not how they searched in 2019.
