import type { Metadata } from "next";
import Link from "next/link";
import { PhoneIncoming, MessageSquareText, CalendarCheck, Star, RefreshCw, Bot } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "AI Automation for Sydney small business",
  description:
    "Missed-Call Rescue, speed-to-lead, appointment reminders, review automation, customer reactivation, and Stella the AI receptionist. Installed on your existing number and tools by a local engineer. No lock-in.",
};

const automations = [
  {
    icon: MessageSquareText,
    h: "Speed-to-Lead",
    p: "Every form fill or ad enquiry gets an instant text back with a link to book, before the customer moves on to the next result on Google. We assess this in your free audit.",
    tag: "Instant lead response",
  },
  {
    icon: CalendarCheck,
    h: "No-Show Killer",
    p: "Automatic text reminders go out before every booking, with a tap to confirm or reschedule, so the jobs on your calendar actually happen. We assess this in your free audit.",
    tag: "Appointment reminders",
  },
  {
    icon: Star,
    h: "Review Engine",
    p: "Once a job is marked complete, the customer gets a text asking for a Google review, plus a direct line to you if something was not right. We assess this in your free audit.",
    tag: "Review automation",
  },
  {
    icon: RefreshCw,
    h: "Customer Reactivation",
    p: "A one-off text campaign to your old customer list, with a simple offer that brings past customers back. This is a single project, quoted once, not an ongoing subscription. We assess this in your free audit.",
    tag: "Database reactivation",
  },
  {
    icon: Bot,
    h: "Stella, AI Receptionist",
    p: "Plenty of providers resell the same generic voice bot under a different name. Stella is built around how your business actually takes bookings, and looked after by the engineer who set her up.",
    tag: "AI phone reception",
    note: "From $399/mo, scoped in your free audit.",
  },
];

export default function AIAutomation() {
  return (
    <>
      <PageHero
        eyebrow="AI Automation"
        title="You do not lose jobs because the phone does not ring."
        intro="Most jobs are lost after the call, not before it. Nobody answers on the fourth ring, nobody sends the reminder, nobody asks for the review once the job is done. These are the systems that fix that, installed on the number and tools you already use, by a local engineer who sets them up and keeps them running."
      />

      {/* FEATURED: MISSED-CALL RESCUE */}
      <section>
        <div className="wrap py-10">
          <div
            className="reveal rounded-[24px] p-8 md:p-10 grid md:grid-cols-[auto_1fr_auto] gap-8 items-center"
            style={{ background: "var(--ink)", color: "var(--sand)", boxShadow: "0 30px 60px -32px rgba(18,32,82,.6)" }}
          >
            <div className="w-[58px] h-[58px] rounded-[16px] grid place-items-center flex-none" style={{ background: "rgba(243,235,221,.1)" }}>
              <PhoneIncoming size={28} color="#E8A88B" strokeWidth={1.75} />
            </div>
            <div>
              <span className="eyebrow" style={{ color: "#E8A88B" }}>Start here</span>
              <h2 className="text-paper mt-2" style={{ fontSize: "clamp(1.7rem,3.2vw,2.3rem)" }}>Missed-Call Rescue</h2>
              <p className="mt-3 text-[1.02rem]" style={{ color: "rgba(243,235,221,.78)" }}>
                Every missed caller gets your text within seconds. Carrier sender registration, message copy written for your trade, and a monthly rescued-calls report are all included.
              </p>
              <p className="mt-3 font-display text-[1.3rem] font-semibold text-paper">$497 setup + $79/mo <span className="text-[.85rem] font-sans font-medium" style={{ color: "rgba(243,235,221,.65)" }}>&middot; no lock-in</span></p>
            </div>
            <Link href="/missed-call-rescue/" className="btn btn-primary whitespace-nowrap justify-self-start md:justify-self-end">
              See how it works &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FIVE MORE AUTOMATIONS */}
      <section>
        <div className="wrap py-[64px]">
          <div className="sec-head reveal">
            <span className="eyebrow">More automation</span>
            <h2>Five more systems, built into your everyday tools.</h2>
            <p>Each one connects to what you already use. Nothing to log into, nothing extra to check.</p>
          </div>
          <div className="cards">
            {automations.map(({ icon: Icon, h, p, tag, note }) => (
              <div key={h} className="card reveal">
                <div className="ico"><Icon size={22} color="var(--coral-2)" strokeWidth={1.75} /></div>
                <h3>{h}</h3>
                <p>{p}</p>
                {note && <p className="mt-2 font-semibold text-[.94rem] text-ink">{note}</p>}
                <span className="tech">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
