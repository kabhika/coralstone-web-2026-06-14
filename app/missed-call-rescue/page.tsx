import type { Metadata } from "next";
import PhoneMockup from "@/components/PhoneMockup";
import DemoWidget from "@/components/DemoWidget";
import CaseStudyStrip from "@/components/CaseStudyStrip";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Missed-Call Rescue for Sydney small business",
  description:
    "Every missed caller gets a text within seconds, on the number you already use. $497 setup + $79/mo, no lock-in, live within 10 business days.",
};

const steps = [
  ["1", "Forwarding on your own mobile", "Conditional call forwarding is set up on the mobile you already carry. No new number, nothing to reprint.", "Conditional forwarding"],
  ["2", "The call rings us, not voicemail", "For a moment, a missed call rings our system instead of dropping straight into voicemail.", "Instant detection"],
  ["3", "Your customer gets a text", "Within seconds, they get a message written for your trade, not a generic auto-reply.", "Automatic SMS"],
  ["4", "You see it in your report", "Every rescued call is logged and shows up in a simple report each month.", "Monthly report"],
];

const setupIncludes = [
  "Forwarding configured on your handset",
  "Carrier sender registration, so your texts actually deliver",
  "Message copy written with you, for your trade",
  "Logging set up so every rescue is tracked",
  "Test calls verified with you, on site or on a call",
];

const monthlyIncludes = [
  "The number and message costs",
  "Your monthly rescued-calls report",
  "Message changes whenever you want them",
];

const faqs = [
  {
    q: "Do I need to change my number?",
    a: "No. Missed-Call Rescue runs on the mobile number you already give out. Nothing changes for your customers.",
  },
  {
    q: "What if the customer replies?",
    a: "The reply goes straight to your phone, the same as any other text.",
  },
  {
    q: "Is this legal, or is it spam?",
    a: "A single text back to someone who just called you is a reply, not marketing. Every message identifies your business, so your customers always know who is texting them.",
  },
  {
    q: "What phones does it work with?",
    a: "Any mobile on a major Australian carrier that supports conditional call forwarding. We confirm this during your audit before anything is set up.",
  },
  {
    q: "How fast can it be live?",
    a: "Within 10 business days of your audit.",
  },
];

export default function MissedCallRescue() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-[78px] pb-16">
        <div className="wrap">
          <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-14 items-center">
            <div>
              <span className="tag reveal"><span className="dot" /> Missed-Call Rescue</span>
              <h1 className="reveal text-ink mt-6" style={{ fontSize: "clamp(2.4rem,5.2vw,3.8rem)" }}>
                The call you missed just booked with someone else.
              </h1>
              <p className="reveal mt-[22px] text-[1.15rem] text-muted max-w-[42ch]">
                An automatic text goes out to every missed caller, on the number you already use, live within 10 business days.
              </p>
              <div className="reveal mt-8">
                <a className="btn btn-primary" href="https://calendly.com/abhishek-sinha-coralstonegroup/30min">Get my free audit &rarr;</a>
              </div>
            </div>
            <div className="reveal">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* DEMO SLOT */}
      <DemoWidget />

      {/* HOW IT WORKS */}
      <section style={{ background: "var(--ink)", color: "var(--sand)" }}>
        <div className="wrap py-[84px]">
          <div className="sec-head reveal">
            <span className="eyebrow" style={{ color: "#E8A88B" }}>How it works</span>
            <h2 className="text-paper">Four steps. Nothing changes on your end.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {steps.map(([n, h, p, pill]) => (
              <div key={n} className="reveal rounded-[18px] p-6 border" style={{ background: "rgba(243,235,221,.06)", borderColor: "rgba(243,235,221,.18)" }}>
                <div className="font-display text-[2.6rem] font-semibold leading-[.8]" style={{ color: "rgba(240,140,88,.92)" }}>{n}</div>
                <h3 className="text-paper text-[1.14rem] mt-3 mb-2">{h}</h3>
                <p className="text-[.9rem]" style={{ color: "rgba(243,235,221,.74)" }}>{p}</p>
                <span className="inline-block mt-3 text-[.68rem] uppercase tracking-wide font-semibold border rounded-full px-[9px] py-[3px]" style={{ color: "#E8A88B", borderColor: "rgba(232,168,139,.4)" }}>{pill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section>
        <div className="wrap py-[84px]">
          <div className="sec-head reveal">
            <span className="eyebrow">Pricing</span>
            <h2>What is included.</h2>
            <p>One setup fee, one flat monthly cost. Nothing hidden.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="reveal bg-paper border rounded-[18px] p-7" style={{ borderColor: "var(--line)", boxShadow: "var(--shadow)" }}>
              <div className="text-[.78rem] uppercase tracking-wider text-muted font-semibold">One-off</div>
              <div className="font-display text-[2.3rem] font-semibold text-charcoal leading-none mt-1">$497 <small className="text-[.85rem] font-sans text-muted font-medium">setup</small></div>
              <ul className="list-none mt-5 grid gap-[10px]">
                {setupIncludes.map((i) => (
                  <li key={i} className="flex gap-[10px] text-[.92rem] text-charcoal"><span className="font-extrabold" style={{ color: "var(--coral)" }}>&#10003;</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="reveal bg-paper border rounded-[18px] p-7" style={{ borderColor: "var(--line)", boxShadow: "var(--shadow)" }}>
              <div className="text-[.78rem] uppercase tracking-wider text-muted font-semibold">Ongoing</div>
              <div className="font-display text-[2.3rem] font-semibold text-charcoal leading-none mt-1">$79 <small className="text-[.85rem] font-sans text-muted font-medium">/mo</small></div>
              <ul className="list-none mt-5 grid gap-[10px]">
                {monthlyIncludes.map((i) => (
                  <li key={i} className="flex gap-[10px] text-[.92rem] text-charcoal"><span className="font-extrabold" style={{ color: "var(--coral)" }}>&#10003;</span>{i}</li>
                ))}
              </ul>
              <p className="mt-5 text-[.9rem] font-semibold text-ink">No lock-in. Cancel any month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY SLOT */}
      <CaseStudyStrip />

      {/* FAQ */}
      <section style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap py-[84px]">
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
        eyebrow="No hard sell"
        title="Ready to stop losing calls to voicemail?"
        body="Book a free audit. We will look at how your calls currently get missed and tell you straight whether Missed-Call Rescue is worth setting up."
      />
    </>
  );
}
