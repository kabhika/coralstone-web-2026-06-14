import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Coralstone is a Sydney IT and web consultancy run by an enterprise Modern Workplace engineer, now bringing big-company IT standards to small businesses, without the lock-in or the jargon.",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Coralstone"
        title="Enterprise IT, brought down to your size."
        intro="Coralstone is small on purpose. You get an engineer with a serious corporate background, working directly with you, at small-business prices."
      />

      <section>
        <div className="wrap pb-[40px] max-w-[760px]">
          <div className="reveal grid gap-6 text-[1.06rem] text-muted">
            <p>
              Most small businesses get the worst of the IT world. The big providers are built for big contracts, so a five or twenty person business ends up with slow tickets, offshore call centres, and bills nobody can explain.
            </p>
            <p>
              Coralstone exists to flip that. The same engineering standards used inside large Australian organisations, the way computers are secured and managed, the way data is backed up, the way migrations are run, applied to businesses that have never had access to it.
            </p>
            <div className="reveal grid sm:grid-cols-[200px_1fr] gap-6 items-start mt-2">
              <img
                src="/abhishek.jpg"
                alt="Abhishek Sinha, founder and engineer at Coralstone Services Group"
                width={200}
                height={299}
                className="w-full h-auto rounded-[18px] border"
                style={{ borderColor: "var(--line)", boxShadow: "var(--shadow)" }}
              />
              <p>
                Behind Coralstone is Abhishek Sinha, a Modern Workplace and End User Compute engineer (Microsoft certified, MS-102 and MD-102) who has spent more than twenty years managing devices and security for larger organisations, and now applies the same standards to businesses that never had access to them. The website and search side grew out of the same instinct: small businesses were paying too much to be found online, and getting too little. So that became part of the offer too.
              </p>
            </div>
            <p className="text-charcoal font-medium">
              The promise is simple: talk to the person doing the work, get plain answers, pay a fair fixed price, and never get locked in.
            </p>
            <div className="reveal mt-8 bg-paper border rounded-[18px] p-6 not-prose" style={{ borderColor: "var(--line)", boxShadow: "var(--shadow)" }}>
              <p className="m-0 text-[.95rem] text-charcoal leading-[1.9]">
                <b className="text-ink">Coralstone Services Group Pty Ltd</b><br />
                ACN 690 335 034 &middot; ABN 13 080 859 721<br />
                Box Hill NSW 2765, Australia<br />
                Mon-Fri 8am-6pm AEST
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap py-[70px]">
          <div className="sec-head reveal" style={{ maxWidth: 600 }}>
            <span className="eyebrow">What we stand for</span>
            <h2>Four rules we will not break.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              ["No lock-in", "You stay because the work is good. Month to month, always."],
              ["No jargon", "If we cannot explain it to you plainly, we have not understood it well enough ourselves."],
              ["Fixed quotes", "You see the scope and the price before anything starts. No creeping invoices."],
              ["Pay when happy", "Websites start with a $497 deposit. The balance is due only when you are satisfied."],
            ].map(([h, p]) => (
              <div key={h} className="card reveal">
                <h3 className="text-ink text-[1.2rem] mb-2">{h}</h3>
                <p className="text-muted text-[.96rem]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
