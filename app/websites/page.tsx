import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Websites & Search (SEO, AEO, GEO) for Sydney small business",
  description:
    "Custom websites for Sydney small businesses that get found on Google and AI search. Local SEO, Answer Engine Optimisation, online stores, booking systems, and lead capture.",
};

const services = [
  ["🌐", "A website that wins customers", "Custom-built, fast, and mobile-first. No stock templates. Designed around how your customers actually decide, so visits turn into calls, bookings, and sales.", "Custom web design"],
  ["📍", "Show up on Google", "Keyword and competitor research, Google Business Profile, reviews, and the on-page technical work so nearby customers find you first.", "Local SEO"],
  ["🤖", "Show up in AI answers", "When someone asks ChatGPT, Google AI, or Siri for a business like yours, your site is structured so the AI can read it and recommend you. Most local sites cannot be read by these tools at all.", "AEO / GEO"],
  ["🛒", "Sell online", "A full store: secure card payments, cart and checkout, customer accounts, and stock you can manage yourself.", "E-commerce, Stripe / PayPal"],
  ["📅", "Take bookings automatically", "Customers book and pay online, with reminders handled for you. Fewer no-shows, less phone tag.", "Online booking"],
  ["💬", "Never miss a lead", "Missed-call text-back, instant first replies, and a site chat assistant so an enquiry never goes cold while you are on the tools.", "AI automation"],
  ["✏️", "Update it yourself", "A simple editor so you can change text, swap photos, and add products without touching code or paying us for every tweak.", "Easy content management"],
  ["📱", "Fast on every device", "Built mobile-first and tuned for speed. Google ranks fast, mobile-friendly sites higher, and so do impatient customers.", "Responsive & performance"],
];

export default function Websites() {
  return (
    <>
      <PageHero
        eyebrow="Websites & search"
        title="A website is the foot in the door. Being found is the point."
        intro="We build the site, then do the unglamorous work that actually brings calls: getting you onto Google, into local search, and readable by the AI assistants more people now ask first."
      />

      {/* 1-2-3 band */}
      <section style={{ background: "var(--ink)", color: "var(--sand)" }}>
        <div className="wrap py-[72px]">
          <div className="grid md:grid-cols-3 gap-[22px]">
            {[
              ["1", "Build", "Fast, mobile-first, written for your customers and ready to take enquiries from day one."],
              ["2", "Get on the map", "Google profile, local SEO, and reviews so you appear when people nearby are searching."],
              ["3", "Stay found", "Answer Engine Optimisation so AI tools surface you, not just your competitors."],
            ].map(([n, h, p]) => (
              <div key={n} className="reveal rounded-[18px] p-7 border" style={{ background: "rgba(243,235,221,.06)", borderColor: "rgba(243,235,221,.18)" }}>
                <div className="font-display text-[3rem] font-semibold leading-[.8]" style={{ color: "rgba(233,160,127,.55)" }}>{n}</div>
                <h3 className="text-paper text-[1.25rem] mt-3 mb-2">{h}</h3>
                <p className="text-[.95rem]" style={{ color: "rgba(243,235,221,.74)" }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap py-[80px]">
          <div className="sec-head reveal">
            <span className="eyebrow">What you can pick from</span>
            <h2>Everything you need to be found and chosen.</h2>
            <p>Start with what you need now. Add the rest when it earns its place.</p>
          </div>
          <div className="cards">
            {services.map(([ico, h, p, tech]) => (
              <div key={h} className="card reveal">
                <div className="ico">{ico}</div>
                <h3>{h}</h3><p>{p}</p><span className="tech">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plain explainer: what is AEO */}
      <section style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap py-[80px] max-w-[820px]">
          <div className="reveal">
            <span className="eyebrow">In plain English</span>
            <h2 className="text-ink mt-3" style={{ fontSize: "clamp(1.7rem,3.6vw,2.4rem)" }}>What is &quot;AI search&quot;, and why should you care?</h2>
            <p className="text-muted text-[1.06rem] mt-5">
              More and more people skip Google and just ask an AI: &quot;who is a good electrician in Penrith?&quot; The AI answers with a few names. If your website is not built so the AI can read and trust it, you are not on that list, and you never even knew the question was asked.
            </p>
            <p className="text-muted text-[1.06rem] mt-4">
              We structure your content, headings, and business details so both Google and these AI tools can understand exactly what you do, where, and for whom. It is the same idea as SEO, pointed at the place search is heading.
            </p>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Free, no obligation"
        title="Want to see where you stand right now?"
        body="Book a free check. We will show you how your current site looks to Google and to AI tools, and where customers are slipping away."
      />
    </>
  );
}
