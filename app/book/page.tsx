import type { Metadata } from "next";
import Script from "next/script";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { PHONE_ABHI_TEXT, PHONE_ABHI_TEL, WHATSAPP_URL } from "@/lib/contact";
import { ENTITY } from "@/lib/facts";

// SLOTS production origin. Overridable at build time for local review
// against a dev booking server (BOOKING_ORIGIN=http://localhost:3100).
const BOOKING_ORIGIN =
  process.env.BOOKING_ORIGIN ?? "https://slots-peel-manor-house.vercel.app";
const BOOKING_URL = `${BOOKING_ORIGIN}/o/coralstone-services-group/free-check`;

export const metadata: Metadata = {
  title: "Book a Free Google Check",
  description:
    "Pick a time that suits. Thirty minutes on the phone. We look at your website, your Google presence, and where customers are slipping away. Free, no obligation.",
};

export default function Book() {
  return (
    <>
      <Script src={`${BOOKING_ORIGIN}/embed.js`} strategy="afterInteractive" />

      {/* HEADER */}
      <section className="pt-[64px] pb-8">
        <div className="wrap max-w-[760px]">
          <span className="eyebrow reveal">Free, no obligation</span>
          <h1 className="reveal text-ink mt-4" style={{ fontSize: "clamp(2.3rem,5vw,3.6rem)" }}>
            Book your free Google check.
          </h1>
          <p className="reveal mt-5 text-[1.18rem] text-muted">
            Thirty minutes on the phone. We look at your website, your Google presence, and where customers are slipping away. You keep the findings whether or not you hire us.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section>
        <div className="wrap pb-10">
          <div className="grid md:grid-cols-3 gap-[18px]">
            {[
              ["1", "Pick a time", "Choose any slot that suits, right here."],
              ["2", "Tell us about your business", "A few quick questions so we can look before we call."],
              ["3", "We call you", "Thirty minutes. Straight answers, no hard sell."],
            ].map(([n, h, p]) => (
              <div key={n} className="reveal rounded-[18px] p-6 border" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
                <div className="font-display text-[2.4rem] font-semibold leading-[.8]" style={{ color: "rgba(240,140,88,.92)" }}>{n}</div>
                <h2 className="text-ink text-[1.12rem] mt-3 mb-2">{h}</h2>
                <p className="text-muted text-[.92rem]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMBED */}
      <section>
        <div className="wrap pb-[64px]">
          <div
            className="reveal bg-paper border rounded-[24px] p-4 md:p-6"
            style={{ borderColor: "var(--line)", boxShadow: "var(--shadow)" }}
          >
            <div
              data-slots-inline
              data-url="/o/coralstone-services-group/free-check"
              data-theme="light"
              data-title="Free Google check booking"
              style={{ minWidth: 320, minHeight: 640 }}
            >
              <iframe
                title="Free Google check booking"
                src={`${BOOKING_URL}?embed=inline`}
                width="100%"
                height="640"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              >
                Your browser cannot show the booking form.{" "}
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Open booking in a new tab
                </a>
                .
              </iframe>
            </div>
            <p className="text-center text-[.84rem] text-muted mt-3">
              Booking not loading?{" "}
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: "var(--coral-3)" }}>
                Open it in a new tab &rarr;
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FALLBACKS */}
      <section style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap py-[64px]">
          <div className="sec-head reveal" style={{ maxWidth: 560 }}>
            <span className="eyebrow">Rather talk right now?</span>
            <h2>The phone always works.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <a href={`tel:${PHONE_ABHI_TEL}`} className="card reveal block" aria-label={PHONE_ABHI_TEXT}>
              <div className="ico"><Phone size={22} color="var(--coral-2)" strokeWidth={1.75} /></div>
              <h3 className="text-[1.05rem]">Call Abhi</h3>
              <p className="text-[.95rem]">{PHONE_ABHI_TEXT.replace("Call Abhi on ", "")}. A real engineer answers.</p>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="card reveal block">
              <div className="ico"><MessageCircle size={22} color="var(--coral-2)" strokeWidth={1.75} /></div>
              <h3 className="text-[1.05rem]">WhatsApp</h3>
              <p className="text-[.95rem]">Message any time. We reply within business hours.</p>
            </a>
            <a href={`mailto:${ENTITY.email}`} className="card reveal block">
              <div className="ico"><Mail size={22} color="var(--coral-2)" strokeWidth={1.75} /></div>
              <h3 className="text-[1.05rem]">Email</h3>
              <p className="text-[.95rem]">{ENTITY.email}. Same business day reply.</p>
            </a>
          </div>
          <p className="reveal mt-6 text-[.9rem] text-muted">{ENTITY.hours}. No lock-in, no hard sell, ever.</p>
        </div>
      </section>
    </>
  );
}
