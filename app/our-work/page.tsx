import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Real client websites built by Coralstone, live and taking bookings: an auto repair workshop in Riverstone, removalists in Western Sydney, a driving school in Penrith, and a wedding venue in WA.",
};

type CaseStudy = {
  name: string;
  where: string;
  industry: string;
  href?: string;
  hrefLabel?: string;
  before: string;
  built: string[];
  now: string;
  toCome?: string;
};

const cases: CaseStudy[] = [
  {
    name: "Switch Gear Automotive",
    where: "Riverstone NSW",
    industry: "Auto repair workshop",
    href: "https://www.switchgearautos.com.au/",
    hrefLabel: "switchgearautos.com.au",
    before:
      "No website at all. A Google profile with 3.7 stars from 36 reviews, and every booking taken by phone during workshop hours. None of the workshops in their search area offered online booking.",
    built: [
      "A 32-page website covering every service, with pink slip and blue slip information and real workshop photos",
      "Live online booking on our own platform. Eight services bookable around the clock, customers enter their vehicle and the job",
      "A display board in the workshop showing the day's bookings",
    ],
    now: "Bookings arrive through the site, for Riverstone, Rouse Hill, Box Hill, Marsden Park, Schofields, and nearby. Live in under a month from first meeting.",
    toCome: "Google rankings and booking counts, once there is a month of data.",
  },
  {
    name: "Sydney Movers & Packers",
    where: "Western Sydney",
    industry: "Removalists",
    href: "https://www.sydneymoversandpackers.biz/",
    hrefLabel: "sydneymoversandpackers.biz",
    before:
      "An ageing WordPress site that scored 28 out of 100 on our search readiness check.",
    built: [
      "A 29-page custom site with 27 suburb pages written for each area it serves",
      "Rates and service answers in plain language, and their 4.6-star Google rating wired into search results",
      "Every quote request landing instantly in their inbox",
    ],
    now: "Our search readiness score for the site is 85 out of 100 and climbing, with monthly work continuing.",
    toCome: "Rankings for the most competitive suburb pages.",
  },
  {
    name: "Derive Driving School",
    where: "Penrith NSW",
    industry: "Car and truck licence training",
    href: "https://www.derivedrivingschool.com/",
    hrefLabel: "derivedrivingschool.com",
    before:
      "Every booking meant phone tag during office hours, across dozens of course types.",
    built: [
      "Sixteen live online booking pages, one per course, from car lessons to HR truck licences",
      "Each page synced to the instructors' own calendars",
    ],
    now: "Students book and pay online, any hour, for every course on offer.",
  },
  {
    name: "Peel Manor House",
    where: "Karnup WA",
    industry: "Wedding and event venue",
    href: "https://www.peelmanorhouse.com.au/",
    hrefLabel: "peelmanorhouse.com.au",
    before:
      "An old WordPress site. Our audit before the rebuild found active malware redirecting visitors to gambling sites.",
    built: [
      "A nine-page rebuild, and the domain moved across without losing search history",
      "Online ticketing for their high tea events",
    ],
    now: "The venue takes enquiries and event bookings through the site.",
  },
];

export default function OurWork() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Real jobs, live sites, local businesses."
        intro="No mockups, no coming soon. Every business below is real, the sites are live, and the work is ours from start to finish. Numbers marked to come get filled in as we measure them, never before."
      />

      <section>
        <div className="wrap pb-[80px] grid gap-8">
          {cases.map((c, i) => (
            <article
              key={c.name}
              className="reveal bg-paper border rounded-[24px] p-8 md:p-10"
              style={{ borderColor: "var(--line)", boxShadow: "var(--shadow)" }}
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-6">
                <span className="font-display font-semibold text-ink text-[1.5rem] leading-none">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="text-ink text-[1.5rem]">{c.name}</h2>
                <span className="text-muted text-[.95rem]">{c.industry} &middot; {c.where}</span>
                {c.href && (
                  <a
                    href={c.href}
                    className="inline-flex items-center gap-1 text-[.88rem] font-semibold ml-auto"
                    style={{ color: "var(--coral-3)" }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink size={13} strokeWidth={2} /> {c.hrefLabel}
                  </a>
                )}
              </div>
              <div className="grid md:grid-cols-3 gap-7">
                <div>
                  <h3 className="text-[.78rem] uppercase tracking-[.14em] font-semibold mb-2" style={{ color: "var(--coral-3)" }}>Before</h3>
                  <p className="text-muted text-[.96rem]">{c.before}</p>
                </div>
                <div>
                  <h3 className="text-[.78rem] uppercase tracking-[.14em] font-semibold mb-2" style={{ color: "var(--coral-3)" }}>What we built</h3>
                  <ul className="list-none grid gap-2">
                    {c.built.map((b) => (
                      <li key={b} className="flex gap-[10px] text-[.96rem] text-charcoal">
                        <span className="font-extrabold" style={{ color: "var(--coral)" }}>&#10003;</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid gap-4 content-start">
                  <div>
                    <h3 className="text-[.78rem] uppercase tracking-[.14em] font-semibold mb-2" style={{ color: "var(--coral-3)" }}>Live now</h3>
                    <p className="text-muted text-[.96rem]">{c.now}</p>
                  </div>
                  {c.toCome && (
                    <div>
                      <h3 className="text-[.78rem] uppercase tracking-[.14em] font-semibold mb-2" style={{ color: "var(--coral-3)" }}>To come</h3>
                      <p className="text-muted text-[.96rem]">{c.toCome}</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BOOKING PLATFORM BAND */}
      <section style={{ background: "var(--ink)", color: "var(--sand)" }}>
        <div className="wrap py-[80px] max-w-[820px]">
          <div className="reveal">
            <span className="eyebrow" style={{ color: "#E8A88B" }}>Under the hood</span>
            <h2 className="text-paper mt-3" style={{ fontSize: "clamp(1.9rem,4vw,2.7rem)" }}>The booking system on these sites is ours.</h2>
            <p className="text-[1.06rem] mt-5" style={{ color: "rgba(243,235,221,.78)" }}>
              We did not plug in a third-party widget with someone else's branding and per-seat fees. Our booking platform runs on the client's own site, under their brand, on their domain. That is why it can take a mechanic's drop-off slots and a driving school's course calendar without breaking a sweat.
            </p>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="No hard sell"
        title="Your business could be next."
        body="Book a free check. We will look at what you have now and tell you straight what it would take, what it would cost, and what it is likely to bring in."
      />
    </>
  );
}
