import Link from "next/link";
import Image from "next/image";
import { Globe, Search, Zap, Wrench, Phone, Unlock, Wallet, FileText } from "lucide-react";
import CTA from "@/components/CTA";
import CaseStudyStrip from "@/components/CaseStudyStrip";

const services = [
  {
    icon: Globe,
    h: "A website that wins work",
    tag: "Websites + booking",
    p: "Custom-built, fast, and mobile-first, written for your customers. Online booking built in, on our own platform, so the site works while you are on the tools.",
    href: "/websites/",
  },
  {
    icon: Search,
    h: "Get found on Google",
    tag: "SEO / AEO / GEO",
    p: "Local search, your Google profile, reviews, and the structured work that puts you in front of people searching nearby, and in the answers AI assistants give.",
    href: "/get-found/",
  },
  {
    icon: Zap,
    h: "Never miss a job",
    tag: "Automation",
    p: "Every missed caller texted back in seconds. An AI receptionist who answers, books, and never puts anyone on hold. Installed and looked after by a local engineer.",
    href: "/automation/",
  },
];

const whoWeHelp = ["Mechanics", "Removalists", "Electricians and tradies", "Driving schools", "Repair shops", "Venues and shops"];

const why = [
  { icon: Phone, h: "A real engineer answers", p: "No ticket queue, no offshore call centre. You talk to the person doing the work." },
  { icon: Unlock, h: "No lock-in contracts", p: "Stay because the work is good, not because you are trapped. Month to month, always." },
  { icon: Wallet, h: "Pay when you are happy", p: "Websites start with a $497 deposit. The balance is due only when you are satisfied. Everything else is quoted the same way, agreed before we start." },
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
              <span className="tag reveal"><span className="dot" /> Websites &middot; Google visibility &middot; Greater Sydney</span>
              <h1 className="reveal text-ink mt-6" style={{ fontSize: "clamp(2.5rem,5.6vw,4.1rem)" }}>
                At Coralstone, building your website is only the start.<br />
                <span className="italic font-medium" style={{ color: "var(--coral-2)" }}>We find you customers and get you booked and busy.</span>
              </h1>
              <p className="reveal mt-[22px] text-[1.18rem] text-muted max-w-[50ch]">
                We build your website and get you found on Google and in AI search. Then we add online booking, automation and custom apps that save you time, plus marketing that brings in more customers. One local engineer. Fixed prices. No lock-in.
              </p>
              <div className="reveal flex flex-wrap gap-[14px] mt-8">
                {/* Was Calendly: https://calendly.com/abhishek-sinha-coralstonegroup/30min */}
                <Link className="btn btn-primary" href="/book/">Book a free check &rarr;</Link>
                <Link className="btn btn-ghost" href="/our-work/">See our work</Link>
              </div>
              <p className="reveal mt-4 text-[.86rem] text-muted">Free, no obligation. A straight answer about where your customers are slipping away.</p>

              <dl className="reveal grid grid-cols-2 sm:grid-cols-4 mt-[46px] pt-6 border-t" style={{ borderColor: "var(--line)" }}>
                {[
                  ["Free", "No-obligation check"],
                  ["Weeks", "From first chat to live site"],
                  ["No", "Lock-in contracts"],
                  ["Local", "On-site, Greater Sydney"],
                ].map(([n, l], i) => (
                  <div key={l} className={i > 0 ? "sm:border-l sm:pl-[22px] pr-[18px]" : "pr-[18px]"} style={{ borderColor: "var(--line)" }}>
                    <dt className="font-display text-[1.5rem] font-semibold text-ink leading-none">{n}</dt>
                    <dd className="text-[.74rem] uppercase tracking-wider text-muted mt-[7px] font-semibold">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="reveal flex justify-center">
              <div className="bg-paper border rounded-[24px] p-[30px] w-full max-w-[380px]" style={{ borderColor: "var(--line)", boxShadow: "var(--shadow)" }}>
                <p className="eyebrow mb-[18px]">What you get</p>
                <ul className="list-none">
                  {[
                    ["A fast, custom website", "Mobile-first, built to turn visits into calls"],
                    ["Online booking", "Customers book while you are under a car or on a job"],
                    ["Found on Google", "Structured so Google, and the AI people now ask, can read it"],
                    ["One local engineer", "The person who builds it is the person who answers"],
                  ].map(([b, s], i) => (
                    <li key={b} className={`flex items-center gap-3 py-[13px] ${i > 0 ? "border-t border-dashed" : ""}`} style={{ borderColor: "var(--line)" }}>
                      <span aria-hidden="true" className="flex-none w-6 h-6 rounded-full grid place-items-center text-[.8rem]" style={{ background: "var(--ink)", color: "var(--sand)" }}>&#10003;</span>
                      <div><b className="font-semibold text-charcoal text-[.95rem]">{b}</b><span className="block text-[.8rem] text-muted">{s}</span></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <CaseStudyStrip />

      {/* WHAT WE DO */}
      <section>
        <div className="wrap py-[84px]">
          <div className="sec-head reveal">
            <span className="eyebrow">What we do</span>
            <h2>Websites, Google visibility, and phones that get answered.</h2>
            <p>Pick what you need now. Everything is quoted up front, and none of it locks you in.</p>
          </div>
          <div className="cards">
            {services.map(({ icon: Icon, h, tag, p, href }) => (
              <div key={h} className="card reveal">
                <div className="ico"><Icon size={22} color="var(--coral-2)" strokeWidth={1.75} /></div>
                <h3>{h}</h3>
                <span className="tech" style={{ display: "block", marginTop: 0, marginBottom: 10 }}>{tag}</span>
                <p>{p}</p>
                <Link href={href} className="inline-flex items-center gap-1 mt-4 text-[.9rem] font-semibold" style={{ color: "var(--coral-3)" }}>
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
          <div className="reveal mt-8 rounded-[18px] border p-6 flex flex-wrap items-center justify-between gap-4" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
            <p className="text-muted text-[.98rem] m-0">
              <b className="text-ink">We also keep the boring tech running.</b> Computers, networks, backups, and security, looked after by the same engineer.
            </p>
            <Link href="/it-support/" className="inline-flex items-center gap-1 text-[.9rem] font-semibold whitespace-nowrap" style={{ color: "var(--coral-3)" }}>
              <Wrench size={14} strokeWidth={2} className="inline" /> IT support &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "var(--ink)", color: "var(--sand)" }}>
        <div className="wrap py-[84px]">
          <div className="sec-head reveal">
            <span className="eyebrow" style={{ color: "#E8A88B" }}>How it works</span>
            <h2 className="text-paper">Four steps. No mystery, no open-ended invoices.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[22px]">
            {[
              ["1", "Free check", "Thirty minutes. We look at your site, your Google presence, and where enquires are slipping away. You keep the findings either way."],
              ["2", "Fixed quote", "The scope and the price in writing, before anything starts."],
              ["3", "Live in weeks", "Most sites go from first chat to live in three to six weeks."],
              ["4", "Stay found", "Optional monthly work that keeps you climbing, and keeps you in the AI answers."],
            ].map(([n, h, p]) => (
              <div key={n} className="reveal rounded-[18px] p-7 border" style={{ background: "rgba(243,235,221,.06)", borderColor: "rgba(243,235,221,.18)" }}>
                <div className="font-display text-[3.4rem] font-semibold leading-[.8]" style={{ color: "rgba(240,140,88,.92)" }}>{n}</div>
                <h3 className="text-paper text-[1.32rem] mt-[14px] mb-[10px]">{h}</h3>
                <p className="text-[.96rem]" style={{ color: "rgba(243,235,221,.74)" }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section>
        <div className="wrap py-[72px] text-center">
          <div className="sec-head reveal mx-auto text-center" style={{ maxWidth: 560 }}>
            <span className="eyebrow">Who we help</span>
            <h2>If your customers find you on Google, we can help.</h2>
          </div>
          <div className="reveal flex flex-wrap justify-center gap-3">
            {whoWeHelp.map((w) => (
              <span key={w} className="tag" style={{ boxShadow: "none" }}>{w}</span>
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
