import type { Metadata } from "next";
import Link from "next/link";
import { Search, MapPin, Bot } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Get Found on Google and AI Search",
  description:
    "Rankings don't ring. Calls do. Local SEO, Google Business Profile, reviews, and AI-answer optimisation that gets Sydney small businesses onto Google, into Maps, and named in the answers AI assistants give. Plans from $800 a month, no lock-in.",
};

const channels = [
  {
    icon: Search,
    h: "Google Search",
    p: "The map pack and the local results. Won with your Google profile, reviews, and a site Google can read.",
    tag: "Local SEO",
  },
  {
    icon: MapPin,
    h: "Google Maps",
    p: "A verified profile, the right categories, photos, and a steady flow of reviews. Claimed, cleaned up, and kept current.",
    tag: "Google Business Profile",
  },
  {
    icon: Bot,
    h: "AI assistants",
    p: "ChatGPT, Google AI, and Siri now answer who is a good electrician near me with names. Sites need to be structured so they can be read and trusted. Most are not.",
    tag: "AEO / GEO",
  },
];

const work = [
  "Your Google Business Profile claimed, complete, and consistent everywhere your name appears",
  "Pages built for your services and your suburbs, written for customers first",
  "Structured data, a label kit that lets Google and AI tools read your business details at a glance",
  "Reviews asked for properly, at the moment customers are happiest",
  "Speed and a mobile-first build, because Google ranks it and customers expect it",
  "Monthly reporting in plain English. What moved, what is next",
];

const faqs = [
  {
    q: "How do I get my business on page one of Google?",
    a: "There is no switch to flip. It is your Google profile, your reviews, your site's content and speed, and steady work over months. The free check shows you which of those is holding you back.",
  },
  {
    q: "What is AEO?",
    a: "Answer Engine Optimisation. SEO gets you found on Google. AEO gets you into the answers AI assistants like ChatGPT and Google AI give when people ask for a business like yours. Same discipline, newer doorway.",
  },
  {
    q: "How long does local SEO take?",
    a: "Google Maps and profile fixes show movement in weeks. Competitive search terms take months of steady work. Anyone promising page one by Friday is selling you something.",
  },
  {
    q: "Do you guarantee rankings?",
    a: "No. Nobody honestly can. We do the work that earns them, we show you the numbers monthly, and there is no lock-in if you stop.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function GetFound() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow="Get found"
        title="Rankings don't ring. Calls do."
        intro="Most SEO ends in a monthly report. Ours ends in a phone call. We get you on Google, into Maps, and named when someone asks AI who to call."
      />

      {/* WHERE CUSTOMERS LOOK */}
      <section>
        <div className="wrap py-[72px]">
          <div className="sec-head reveal">
            <span className="eyebrow">Where customers now look</span>
            <h2>Three doorways. All of them winnable.</h2>
          </div>
          <div className="cards">
            {channels.map(({ icon: Icon, h, p, tag }) => (
              <div key={h} className="card reveal">
                <div className="ico"><Icon size={22} color="var(--coral-2)" strokeWidth={1.75} /></div>
                <h3>{h}</h3>
                <p>{p}</p>
                <span className="tech">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THE WORK IS */}
      <section style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap py-[80px] max-w-[820px]">
          <div className="reveal">
            <span className="eyebrow">In plain English</span>
            <h2 className="text-ink mt-3" style={{ fontSize: "clamp(1.7rem,3.6vw,2.4rem)" }}>What the work actually is.</h2>
            <ul className="list-none mt-6 grid gap-3">
              {work.map((w) => (
                <li key={w} className="flex gap-[12px] text-[1.04rem] text-charcoal">
                  <span className="font-extrabold" style={{ color: "var(--coral)" }}>&#10003;</span>{w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW YOU BUY IT */}
      <section>
        <div className="wrap py-[72px]">
          <div className="reveal rounded-[24px] p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center" style={{ background: "var(--ink)", color: "var(--sand)", boxShadow: "0 30px 60px -32px rgba(18,32,82,.6)" }}>
            <div>
              <span className="eyebrow" style={{ color: "#E8A88B" }}>How you buy it</span>
              <h2 className="text-paper mt-2" style={{ fontSize: "clamp(1.7rem,3.2vw,2.3rem)" }}>Built in first, then a monthly plan if you want it.</h2>
              <p className="mt-4 text-[1.02rem]" style={{ color: "rgba(243,235,221,.78)" }}>
                Every website we build ships with the foundations done. Businesses that want to keep climbing take the monthly Stay Found plan, from $800 a month, no lock-in. We never promise a ranking, and you should not trust anyone who does.
              </p>
            </div>
            <Link href="/pricing/" className="btn btn-primary whitespace-nowrap justify-self-start md:justify-self-end">
              See pricing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap py-[80px]">
          <div className="sec-head reveal">
            <span className="eyebrow">FAQ</span>
            <h2>Questions people actually ask.</h2>
          </div>
          <div className="reveal grid gap-3 max-w-[720px]">
            {faqs.map((f) => (
              <details key={f.q} className="bg-paper border rounded-[18px] px-5 py-4" style={{ borderColor: "var(--line)" }}>
                <summary className="cursor-pointer font-semibold text-ink text-[1.02rem]">{f.q}</summary>
                <p className="text-muted text-[.94rem] mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Free, no obligation"
        title="See where you stand right now."
        body="Book a free check. We will show you how your current site looks to Google and to AI tools, and where customers are slipping away."
      />
    </>
  );
}
