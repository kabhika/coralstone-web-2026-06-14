---
name: Coralstone Services Group
description: Warm, plainspoken enterprise-grade trust for Sydney small business
colors:
  warm-sand: "#F3EBDD"
  deep-sand: "#EBE0CD"
  dark-sand: "#E2D4BC"
  trust-navy: "#122052"
  navy-deep: "#1C3664"
  signal-terracotta: "#D86937"
  terracotta-deep: "#C15629"
  terracotta-ink: "#A44923"
  charcoal-ink: "#2A2722"
  muted-stone: "#6B6357"
  paper-white: "#FBF7EF"
  hairline: "rgba(42,39,34,.14)"
  soft-terracotta-tint: "#E8A88B"
  terracotta-ember: "#F08C58"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.3rem, 5.2vw, 3.8rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-.015em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 4.2vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-.015em"
  numeral:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.4rem, 4vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.1rem, 2vw, 1.32rem)"
    fontWeight: 600
    lineHeight: 1.05
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(.92rem, 1.5vw, 1.18rem)"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(.68rem, 1vw, .97rem)"
    fontWeight: 400
    lineHeight: 1.3
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: ".78rem"
    fontWeight: 600
    letterSpacing: ".16em"
rounded:
  pill: "999px"
  panel: "24px"
  card: "18px"
  input: "12px"
  icon-chip: "13px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "44px"
  xl: "70px"
components:
  button-primary:
    backgroundColor: "{colors.signal-terracotta}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.trust-navy}"
    rounded: "{rounded.pill}"
    padding: "11px 21px"
  button-ghost-hover:
    backgroundColor: "{colors.trust-navy}"
    textColor: "{colors.warm-sand}"
  card:
    backgroundColor: "{colors.paper-white}"
    rounded: "{rounded.card}"
    padding: "26px"
  tag:
    backgroundColor: "{colors.paper-white}"
    rounded: "{rounded.pill}"
    padding: "7px 15px"
---

# Design System: Coralstone Services Group

## Overview

**Creative North Star: "The Quiet Foreman"**

Coralstone reads like the person who actually turns up: grounded, competent, unshowy. Warm sand and paper backgrounds with a faint grain give the site the feel of a well-kept trade office, not a SaaS product demo. Trust Navy carries authority in headlines and the dark CTA band; Signal Terracotta is used sparingly, like a stamp of confidence, on buttons, tags, and the eyebrow label. Fraunces serif headlines with tight negative tracking sit above generous, unhurried Hanken Grotesk body copy, so the site never feels rushed or salesy.

The system explicitly rejects the dark-mode gradient AI-agency look: no glassmorphism, no neon accents, no cold greyscale UI chrome. Depth stays warm and diffuse rather than sharp or glassy. Motion is limited to a gentle fade-and-rise on scroll and a small hover lift; nothing loops, nothing auto-plays, everything respects prefers-reduced-motion.

**Key Characteristics:**
- Warm paper/sand palette with a subtle grain texture, never stark white or dark-mode
- Trust Navy for authority, Signal Terracotta as the single warm accent, used sparingly
- Fraunces display serif for all headings, Hanken Grotesk for all body copy, never mixed
- Fully pill-shaped interactive controls (999px), one card radius (18px) for containers
- Soft ambient dual-layer shadow at rest, deepening only on hover
- Scroll-triggered fade-and-rise reveals and gentle hover lift; nothing else moves

## Colors

Warm, paper-toned neutrals carry most of the page; Trust Navy and Signal Terracotta are the only two colors doing expressive work.

### Primary
- **Trust Navy** (#122052): Headings, the dark CTA band background, nav link hover, ghost button border and text. Reads as authority and calm competence.
- **Navy Deep** (#1C3664): Gradient partner to Trust Navy inside the PhoneMockup signature component only.

### Secondary
- **Signal Terracotta** (#D86937): The one warm accent. Primary button fill, tag dot, rescue-SMS bubble in PhoneMockup.
- **Terracotta Deep** (#C15629): Primary button hover state, icon accents on chips, the large-text hero accent span (clears 3:1 on Warm Sand).
- **Terracotta Ink** (#A44923): Small uppercase label text on light backgrounds only (`.eyebrow`, `.card .tech`, pricing tier tags). Darker than Terracotta Deep specifically so this text clears 4.5:1 on both Warm Sand and Paper White; never use Terracotta Deep or Signal Terracotta for small text on a light background.

### Tertiary
- **Soft Terracotta Tint** (#E8A88B): Label and icon-accent color used exclusively on Trust Navy backgrounds (the CTA band eyebrow, the How It Works eyebrow and step-pill border, the PhoneMockup missed-call icon). Never used on a light background; computes to 7.7:1 against Trust Navy, so it carries the terracotta hue into dark sections without the light-background contrast problem Terracotta Ink solves elsewhere.
- **Terracotta Ember** (#F08C58): Large standalone digits on Trust Navy only, specifically the "1 / 2 / 3" step numerals in How It Works. A warmer, more saturated sibling of Soft Terracotta Tint reserved for numeral-scale text rather than labels.

### Neutral
- **Warm Sand** (#F3EBDD): Page background (body).
- **Deep Sand** (#EBE0CD): Icon chip background inside cards.
- **Dark Sand** (#E2D4BC): Reserved deeper neutral step, used for further tonal contrast where Deep Sand is too light.
- **Charcoal Ink** (#2A2722): Body text color.
- **Muted Stone** (#6B6357): Secondary/supporting copy (card body text, intro paragraphs).
- **Paper White** (#FBF7EF): Card and tag surface background, sits above Warm Sand as the "lifted" surface.
- **Hairline** (rgba(42,39,34,.14)): Card borders, header border, footer border, section dividers.

### Named Rules
**The Terracotta Restraint Rule.** Signal Terracotta never fills a large surface. It appears only as button fills, a small dot, or the SMS bubble accent, always against sand, paper, or navy. Its rarity is what makes it read as confidence rather than noise.

**The Small-Text Ink Rule.** Any terracotta text under large-text size (roughly under 24px, or under ~18.66px bold) on a light (sand/paper) background uses Terracotta Ink, never Signal Terracotta or Terracotta Deep, so it clears 4.5:1. Terracotta Deep is reserved for large-text accents and icons; Signal Terracotta is reserved for fills.

## Typography

**Display Font:** Fraunces (with Georgia, serif fallback)
**Body Font:** Hanken Grotesk (with system-ui, sans-serif fallback)

**Character:** A tight-tracked, editorial serif for headlines paired with a plain, generous-line-height grotesk for body copy. The pairing reads as premium but not decorative, calm but not corporate.

### Hierarchy
- **Display** (600, clamp(2.3rem, 5.2vw, 3.8rem), line-height 1.02, letter-spacing -.015em): Page hero `h1` (PageHero component); the largest headline on any page.
- **Headline** (600, clamp(2rem, 4.2vw, 3rem), line-height 1.02): Section headings (`.sec-head h2`) and the dark CTA band heading.
- **Numeral** (600, clamp(1.4rem, 4vw, 3.4rem), line-height 1, Fraunces): Large standalone digits that are not headings: pricing tier prices, the home hero stat strip, and the "1 / 2 / 3" step numbers in How It Works. Sized per context rather than to a single fixed value.
- **Title** (600, clamp(1.1rem, 2vw, 1.32rem), line-height 1.05): Card, pricing-tier, and subsection headings (`h3`).
- **Body** (400, clamp(.92rem, 1.5vw, 1.18rem), line-height 1.55): Paragraph and UI copy; denser inside cards and form fields, roomier in hero intros and About's long-form column.
- **Caption** (400, clamp(.68rem, 1vw, .97rem), line-height 1.3): Fine print, list-item text, card meta, and pricing notes. Renders semibold/uppercase at the same size band for tag-style captions (e.g. the "tech" line under a card, pricing tier tags) without becoming a separate size step.
- **Label** (600, .78rem, letter-spacing .16em, uppercase, Terracotta Ink): Eyebrow tags above every section and hero (`.eyebrow`). The one fixed (non-fluid) size in the scale, and the only role that always uses Terracotta Ink for contrast; see the Small-Text Ink Rule under Colors.

### Named Rules
**The Serif Authority Rule.** Fraunces is reserved for `h1`/`h2`/`h3` only. Body copy, labels, and UI text always render in Hanken Grotesk; the two families never mix within the same text block.

## Layout

Content sits inside a single `.wrap` container: max-width 1120px, 24px inline padding, centered. Long-form prose (About body copy, hero intros) narrows further to a 760px column; section headers (`.sec-head`) cap at 660px so headline and intro copy stay readable.

Section rhythm is generous and unhurried: hero sections run ~64px top padding, most content sections run 70-80px vertical padding, the dark CTA band runs 80px. Card grids default to 3 columns and collapse to a single column below an 860px breakpoint. The header is sticky with a translucent, blurred Warm Sand background (`backdrop-filter: blur`) so it stays legible over any scrolled content.

## Elevation & Depth

Depth is soft and warm, never sharp or glassy: a single ambient shadow token combines a tight, barely-visible contact shadow with a large, very soft diffuse falloff tinted from Charcoal Ink. Cards and tags carry this shadow at rest, not only on hover; buttons carry a terracotta-tinted version of the same idea. Hover states deepen the same shadow language (larger, softer, slightly darker) rather than introducing a new material like a border, glow, or glass blur.

### Shadow Vocabulary
- **Ambient resting** (`0 1px 2px rgba(42,39,34,.06), 0 18px 40px -24px rgba(42,39,34,.35)`): Default state for cards and tags.
- **Ambient hover** (`0 1px 2px rgba(42,39,34,.06), 0 26px 50px -28px rgba(42,39,34,.5)`): Card hover, paired with a 4px upward translate.
- **CTA shadow** (`0 8px 22px -10px rgba(216,105,55,.8)`): Primary button resting shadow, tinted terracotta instead of charcoal.

### Named Rules
**The Ambient-Not-Glassy Rule.** Shadows are always warm-toned and diffuse. No hard-edged drop shadows, no colorless grey shadows, no glassmorphism or backdrop-blur used to fake elevation (blur is reserved for the sticky header only, for legibility, not depth).

## Shapes

The system runs on five radii. A full pill (999px) covers every clickable control (buttons, tags). A 24px "panel" radius covers larger feature containers that hold multiple elements (the contact form card, the home hero's phone-style card, the AI Automation featured banner) — a step up from the standard 18px card radius used for everything smaller (service cards, pricing tiers, FAQ items). Two smaller steps exist for components that are neither: 12px for form fields (inputs, select, textarea), and 13px for the small icon chips that sit above a card title or beside a contact detail. A couple of icon boxes that are deliberately larger or smaller than the standard 46px chip (the 58px AI Automation icon, the 42px "why" icon) scale their radius proportionally rather than reusing 13px exactly; treat these as sized-to-fit variants of Icon Chip, not a competing scale. The PhoneMockup signature component is the sole outright exception, using its own larger radii (38px outer frame, 30px inner screen) to read as an actual phone silhouette rather than a generic card.

## Components

Every interactive control reads as a soft, tactile, confident object: warm fills, pill shapes, a gentle lift on hover, never sharp or flat.

### Buttons
- **Shape:** Full pill (999px radius), 12px/22px padding, inline-flex with an 8px icon gap.
- **Primary:** Signal Terracotta fill, white text, terracotta-tinted CTA shadow.
- **Hover / Focus:** Primary darkens to Terracotta Deep and lifts 2px on translateY; ghost inverts to a solid Trust Navy fill with Warm Sand text.
- **Ghost:** Transparent fill, 1.5px Trust Navy border, Trust Navy text; used for secondary actions beside a primary CTA.
- **Icon Ghost:** Same fill/border/hover language as Ghost, in a 44x44px circle instead of a pill, for icon-only controls (the mobile menu toggle).

### Chips (Tags)
- **Style:** Paper White background, 1px hairline border, pill shape, Trust Navy text, ambient resting shadow, an 8px Signal Terracotta dot with a soft terracotta glow ring.
- **State:** Static/informational only; no selected/unselected variants in current use.

### Cards / Containers
- **Corner Style:** 18px radius (`--radius`).
- **Background:** Paper White against the Warm Sand page background, so cards read as a lifted surface.
- **Shadow Strategy:** Ambient resting shadow, deepening plus a 4px lift on hover (see Elevation & Depth).
- **Border:** 1px hairline.
- **Internal Padding:** 26px, with a 46px icon chip (Deep Sand background, 13px radius) above the title.

### Inputs / Fields
- **Style:** Warm Sand background, 1px hairline border, 12px radius, Charcoal Ink text, Muted Stone placeholder.
- **Focus:** Border shifts to Signal Terracotta with a soft 3px terracotta glow ring; no default browser outline is removed elsewhere in the system, only replaced here with an equally visible alternative.
- **Labels:** Every field has a bound `<label>`, visually hidden (`sr-only`) when the placeholder already states the field's purpose, so the accessible name persists after the placeholder disappears on input.

### Navigation
- **Style:** Sticky header, translucent blurred Warm Sand background, hairline bottom border. Logo left, text links center-right at 1.02rem medium weight (80% charcoal, Trust Navy on hover), a primary pill button ("Book a free chat") anchors the right edge. Footer mirrors the link set in a plain text row with a hairline top border, no background treatment.
- **Mobile (below 768px):** Desktop links and the header CTA are replaced by a single 44x44px icon button (Menu/X) that expands a full-width drawer below the header. The drawer leads with the "Book a free chat" CTA, then the same link set stacked full-width. Built with Framer Motion, unmounts on close (so closed links are never keyboard-focusable), and skips the height/opacity animation under `prefers-reduced-motion`.

### Phone Mockup (signature component)
A hand-built phone frame (Charcoal Ink body, ambient shadow, 38px/30px radii) with a Trust Navy-to-Navy-Deep gradient screen. Two messages animate in on scroll view: a missed-call notification (translucent Warm Sand card, PhoneMissed icon in a lighter terracotta tone) followed by a Signal Terracotta rescue-SMS bubble. Pure CSS/Framer Motion, no images; demonstrates Missed-Call Rescue without a screenshot.

## Do's and Don'ts

### Do:
- **Do** keep every clickable control fully pill-shaped (999px) and every static container at the single 18px card radius.
- **Do** apply the ambient dual-layer shadow to cards and tags at rest, deepening (never changing character) on hover.
- **Do** treat Signal Terracotta as the one warm accent: buttons, the tag dot, eyebrow labels, and small highlights only.
- **Do** use lucide-react icons only, one stroke weight (1.75), colored Terracotta Deep or Trust Navy on a sand/paper/navy background.
- **Do** respect `prefers-reduced-motion`: reveals must render fully visible with no transition when it is set.

### Don't:
- **Don't** introduce a dark-mode gradient, glassmorphism, or neon-accent look anywhere on the site; that is the explicit anti-reference for this brand.
- **Don't** mix Fraunces into body copy or Hanken Grotesk into headings.
- **Don't** add a radius between the pill (999px) and the card radius (18px); no `rounded-md`-style in-between values.
- **Don't** use emoji as icons, or icons from any library other than lucide-react.
- **Don't** add looping, parallax, or auto-playing motion; scroll-triggered fade-and-rise and hover lift are the only motion vocabulary.
