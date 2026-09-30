import Link from "next/link";

// Homepage proof strip. Facts come from recorded client work only, see
// COPY-DECK.md section 5. No invented metrics.
const cases = [
  {
    name: "Switch Gear Automotive",
    where: "Riverstone, auto repair",
    p: "No website, a 3.7-star Google profile, and bookings by phone only. Three weeks later: a 32-page site with live online booking, the only workshop in its area with it.",
    tag: "Website + booking + local SEO",
  },
  {
    name: "Sydney Movers & Packers",
    where: "Western Sydney, removalists",
    p: "An old WordPress site became a 29-page site with 27 suburb pages and their 4.6-star Google rating wired into search results. Our search readiness score for it went from 28 to 85 out of 100.",
    tag: "Website + SEO, ongoing",
  },
  {
    name: "Derive Driving School",
    where: "Penrith, car and truck training",
    p: "Bookings used to mean playing phone tag. Now every course, car and truck, has its own live online booking page synced to the instructors' calendars.",
    tag: "Website + booking system",
  },
];

export default function CaseStudyStrip() {
  return (
    <section style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap py-[80px]">
        <div className="sec-head reveal">
          <span className="eyebrow">Our work</span>
          <h2>Real jobs, live sites, local businesses.</h2>
          <p>No mockups, no coming soon. Every business below is real and every site is live.</p>
        </div>
        <div className="cards">
          {cases.map((c) => (
            <div key={c.name} className="card reveal">
              <h3 className="text-[1.1rem]">{c.name}</h3>
              <span className="tech" style={{ display: "block", marginTop: 0, marginBottom: 10 }}>{c.where}</span>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-8">
          <Link href="/our-work/" className="inline-flex items-center gap-1 text-[.95rem] font-semibold" style={{ color: "var(--coral-3)" }}>
            See all our work &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
