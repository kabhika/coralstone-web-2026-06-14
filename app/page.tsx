import Link from "next/link";
import Image from "next/image";
import { Zap, ShieldCheck, Search, Phone, Unlock, Wallet, FileText } from "lucide-react";
import CTA from "@/components/CTA";

const verticals = [
  {
    icon: Zap,
    h: "AI Automation",
    tag: "Never lose another lead",
    p: "Missed-Call Rescue, instant replies, and quote follow-ups connect the tools you already use, so an enquiry never goes cold while you are on a job.",
    href: "/ai-automation/",
  },
  {
    icon: ShieldCheck,
    h: "IT Support",
    tag: "The boring tech that keeps you running, sorted",
    p: "Backups, security, networks, and computers, managed by one local engineer who answers the phone himself. No ticket queue, no call centre.",
    href: "/it-support/",
  },
  {
    icon: Search,
    h: "Websites and SEO",
    tag: "Get found on Google and AI search",
    p: "A fast, custom website built and structured so customers, and the AI assistants they ask, find you first. We assess this in your free audit.",
    href: "/websites/",
  },
];

const why = [
  { icon: Phone, h: "A real engineer answers", p: "No ticket queue, no offshore call centre. You talk to the person doing the work." },
  { icon: Unlock, h: "No lock-in contracts", p: "Stay because the work is good, not because you are trapped. Month to month, always." },
  { icon: Wallet, h: "Pay when you are happy", p: "Missed-Call Rescue starts with a $497 setup. The rest of our work is quoted the same way, agreed before we start." },
  { icon: FileText, h: "Fixed quotes, no jargon", p: "You get the scope and the price before anything starts, written in plain English." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-[78px] pb-16">
        <div className="wrap">
          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-14 items-center">
            <div>
              <span className="tag reveal"><span className="dot" /> Missed-Call Rescue &middot; Greater Sydney</span>
              <h1 className="reveal text-ink mt-6" style={{ fontSize: "clamp(2.7rem,6vw,4.4rem)" }}>
                A missed call does not wait.<br />
                <span className="italic font-medium" style={{ color: "var(--coral)" }}>It just calls the next name on Google.</span>
              </h1>
              <p className="reveal mt-[22px] text-[1.18rem] text-muted max-w-[38ch]">
                Most callers who reach your voicemail do not leave a message. Missed-Call Rescue sends every missed caller a text within seconds, so you are still in the running while you finish the job in front of you. A local engineer installs it on your existing number and takes care of it from there.
              </p>
              <div className="reveal flex flex-wrap gap-[14px] mt-8">
                <a className="btn btn-primary" href="https://calendly.com/abhishek-sinha-coralstonegroup/30min">Get my free audit &rarr;</a>
                <a className="btn btn-ghost" href="#how-it-works">See how it works</a>
              </div>
              <p className="reveal mt-4 text-[.86rem] text-muted">No lock-in. A local engineer sets it up, not a call centre reading a script.</p>

              <div className="reveal grid grid-cols-2 sm:grid-cols-4 mt-[46px] pt-6 border-t" style={{ borderColor: "var(--line)" }}>
                {[
                  ["Free", "No-obligation audit"],
                  ["$497", "To get started"],
                  ["No", "Lock-in contracts"],
                  ["Local", "On-site, Greater Sydney"],
                ].map(([n, l], i) => (
                  <div key={l} className={i > 0 ? "sm:border-l sm:pl-[22px] pr-[18px]" : "pr-[18px]"} style={{ borderColor: "var(--line)" }}>
                    <div className="font-display text-[1.5rem] font-semibold text-ink leading-none">{n}</div>
                    <div className="text-[.74rem] uppercase tracking-wider text-muted mt-[7px] font-semibold">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal flex justify-center">
              <div className="bg-paper border rounded-[24px] p-[30px] w-full max-w-[360px]" style={{ borderColor: "var(--line)", boxShadow: "var(--shadow)" }}>
                <Image src="/logo.png" alt="Coralstone" width={130} height={82} className="w-[130px] mx-auto mb-[18px]" />
                {[
                  ["Instant text back", "Sent within seconds of a missed call"],
                  ["Works on your number", "Call forwarding, nothing new to give out"],
                  ["Set up by a real engineer", "Registered, tested, and monitored"],
                  ["Every rescue logged", "One simple report, sent monthly"],
                ].map(([b, s], i) => (
                  <div key={b} className={`flex items-center gap-3 py-[13px] ${i > 0 ? "border-t border-dashed" : ""}`} style={{ borderColor: "var(--line)" }}>
                    <span className="flex-none w-6 h-6 rounded-full grid place-items-center text-[.8rem]" style={{ background: "var(--ink)", color: "var(--sand)" }}>&#10003;</span>
                    <div><b className="font-semibold text-charcoal text-[.95rem]">{b}</b><span className="block text-[.8rem] text-muted">{s}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ background: "var(--ink)", color: "var(--sand)" }}>
        <div className="wrap py-[84px]">
          <div className="sec-head reveal">
            <span className="eyebrow" style={{ color: "#E9A07F" }}>How it works</span>
            <h2 className="text-paper">Three steps. Your phone number stays the same.</h2>
            <p style={{ color: "rgba(243,235,221,.72)" }}>
              Missed-Call Rescue runs quietly in the background on the number you already advertise. Nothing to reprint, nothing new to learn.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-[22px]">
            {[
              ["1", "We forward your number", "Call forwarding on your existing business line detects the moment a call goes unanswered. No new number, no new SIM.", "Call forwarding"],
              ["2", "The caller gets a text", "Within seconds, the missed caller receives a text letting them know you saw the call and will be in touch.", "Automatic SMS"],
              ["3", "You get the report", "Every rescued call is logged. You receive a simple report each month showing what came in and what it was worth.", "Monthly report"],
            ].map(([n, h, p, pill]) => (
              <div key={n} className="reveal rounded-[18px] p-7 border" style={{ background: "rgba(243,235,221,.06)", borderColor: "rgba(243,235,221,.18)" }}>
                <div className="font-display text-[3.4rem] font-semibold leading-[.8]" style={{ color: "rgba(233,160,127,.55)" }}>{n}</div>
                <h3 className="text-paper text-[1.32rem] mt-[14px] mb-[10px]">{h}</h3>
                <p className="text-[.96rem]" style={{ color: "rgba(243,235,221,.74)" }}>{p}</p>
                <span className="inline-block mt-[14px] text-[.72rem] uppercase tracking-wide font-semibold border rounded-full px-[10px] py-[4px]" style={{ color: "#E9A07F", borderColor: "rgba(233,160,127,.4)" }}>{pill}</span>
              </div>
            ))}
          </div>
          <p className="reveal mt-8 text-[.9rem]" style={{ color: "rgba(243,235,221,.6)" }}>
            Setup includes carrier sender registration, the paperwork that stops your texts landing in spam or getting blocked before they reach anyone. We handle it for you.
          </p>
        </div>
      </section>

      {/* THREE VERTICALS */}
      <section>
        <div className="wrap py-[84px]">
          <div className="sec-head reveal">
            <span className="eyebrow">What we do</span>
            <h2>Three ways we help Sydney small business.</h2>
            <p>Pick what you need now. Everything is quoted up front, and none of it locks you in.</p>
          </div>
          <div className="cards">
            {verticals.map(({ icon: Icon, h, tag, p, href }) => (
              <div key={h} className="card reveal">
                <div className="ico"><Icon size={22} color="var(--coral-2)" strokeWidth={1.75} /></div>
                <h3>{h}</h3>
                <span className="tech" style={{ display: "block", marginTop: 0, marginBottom: 10 }}>{tag}</span>
                <p>{p}</p>
                <Link href={href} className="inline-flex items-center gap-1 mt-4 text-[.9rem] font-semibold" style={{ color: "var(--coral-2)" }}>
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap py-[84px]">
          <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-12 items-center">
            <div className="reveal">
              <span className="eyebrow">Why Coralstone</span>
              <h2 className="text-ink mt-[14px]" style={{ fontSize: "clamp(2rem,4.2vw,2.9rem)" }}>Enterprise experience. Small-business manners.</h2>
              <p className="text-muted text-[1.08rem] mt-4">Big IT firms chase big contracts and treat small businesses as an afterthought. Coralstone does the opposite. You get the same engineer every time, plain answers, and prices that make sense.</p>
            </div>
            <div className="reveal grid">
              {why.map(({ icon: Icon, h, p }, i) => (
                <div key={h} className={`flex gap-4 py-[18px] ${i < why.length - 1 ? "border-b" : ""}`} style={{ borderColor: "var(--line)" }}>
                  <div className="flex-none w-[42px] h-[42px] rounded-[11px] grid place-items-center" style={{ background: "var(--ink)", color: "var(--sand)" }}>
                    <Icon size={19} strokeWidth={1.75} />
                  </div>
                  <div><h3 className="text-ink text-[1.1rem] mb-[3px]">{h}</h3><p className="text-muted text-[.93rem]">{p}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
