import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-[78px] pb-16">
        <div className="wrap">
          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-14 items-center">
            <div>
              <span className="tag reveal"><span className="dot" /> Sydney small business &middot; IT &amp; web</span>
              <h1 className="reveal text-ink mt-6" style={{ fontSize: "clamp(2.7rem,6vw,4.4rem)" }}>
                Get found online.<br />Stay found.<br />
                <span className="italic font-medium" style={{ color: "var(--coral)" }}>Never worry about the tech.</span>
              </h1>
              <p className="reveal mt-[22px] text-[1.18rem] text-muted max-w-[34ch]">
                Coralstone builds websites for Sydney small businesses that actually show up when customers search, on Google{" "}
                <strong className="text-charcoal font-semibold">and</strong> on AI assistants like ChatGPT. Then we quietly handle the IT behind the scenes.
              </p>
              <div className="reveal flex flex-wrap gap-[14px] mt-8">
                <Link className="btn btn-primary" href="/contact/">Get my free website &amp; Google check &rarr;</Link>
                <Link className="btn btn-ghost" href="/websites/">See how it works</Link>
              </div>
              <p className="reveal mt-4 text-[.86rem] text-muted">No lock-in contracts. A real engineer answers the phone, not a call centre.</p>

              <div className="reveal grid grid-cols-2 sm:grid-cols-4 mt-[46px] pt-6 border-t" style={{ borderColor: "var(--line)" }}>
                {[
                  ["Free", "Website & Google audit"],
                  ["$400", "Deposit to start"],
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
                  ["A website that wins customers", "Built for you, not a template"],
                  ["Found on Google & AI search", "SEO + AEO done properly"],
                  ["Your tech, handled", "Backups, security, computers"],
                  ["One local point of contact", "Pay the balance only when happy"],
                ].map(([b, s], i) => (
                  <div key={b} className={`flex items-center gap-3 py-[13px] ${i > 0 ? "border-t border-dashed" : ""}`} style={{ borderColor: "var(--line)" }}>
                    <span className="flex-none w-6 h-6 rounded-full grid place-items-center text-[.8rem]" style={{ background: "var(--ink)", color: "var(--sand)" }}>✓</span>
                    <div><b className="font-semibold text-charcoal text-[.95rem]">{b}</b><span className="block text-[.8rem] text-muted">{s}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section style={{ background: "var(--ink)", color: "var(--sand)" }}>
        <div className="wrap py-[84px]">
          <div className="sec-head reveal">
            <span className="eyebrow" style={{ color: "#E9A07F" }}>Where most people start</span>
            <h2 className="text-paper">A website is the foot in the door. Being found is the point.</h2>
            <p style={{ color: "rgba(243,235,221,.72)" }}>
              Most customers do not search for your business name. They search for what they need: &quot;plumber near me&quot;, &quot;best cafe Castle Hill&quot;, &quot;bookkeeper Western Sydney&quot;. We build the website, then make sure you are the answer they get.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-[22px]">
            {[
              ["1", "Build the website", "A fast, mobile-first site designed around your business, not a stock template. Clear, written for your customers, ready to take bookings or enquiries.", "Custom design"],
              ["2", "Get on the map", "Google Business Profile, local search, and reviews set up so you appear when nearby customers are looking. The unglamorous work that actually brings calls.", "Local SEO"],
              ["3", "Stay found, AI-ready", "We structure your site so AI assistants (ChatGPT, Google AI, Siri) can read it and recommend you. Most local sites are invisible to them. Yours will not be.", "AEO & GEO"],
            ].map(([n, h, p, pill]) => (
              <div key={n} className="reveal rounded-[18px] p-7 border" style={{ background: "rgba(243,235,221,.06)", borderColor: "rgba(243,235,221,.18)" }}>
                <div className="font-display text-[3.4rem] font-semibold leading-[.8]" style={{ color: "rgba(233,160,127,.55)" }}>{n}</div>
                <h3 className="text-paper text-[1.32rem] mt-[14px] mb-[10px]">{h}</h3>
                <p className="text-[.96rem]" style={{ color: "rgba(243,235,221,.74)" }}>{p}</p>
                <span className="inline-block mt-[14px] text-[.72rem] uppercase tracking-wide font-semibold border rounded-full px-[10px] py-[4px]" style={{ color: "#E9A07F", borderColor: "rgba(233,160,127,.4)" }}>{pill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITES & SEARCH */}
      <section>
        <div className="wrap py-[84px]">
          <div className="sec-head reveal">
            <span className="eyebrow">Websites &amp; search</span>
            <h2>Everything you need to be found and chosen.</h2>
            <p>Plain English, fixed quotes, no surprises. Pick what you need now and add the rest later.</p>
          </div>
          <div className="cards">
            {[
              ["🌐", "A website that wins customers", "Custom-built, fast, and mobile-first. Designed to turn visitors into calls, bookings, and sales.", "Custom web design"],
              ["📍", "Show up on Google", "Keyword research, your Google profile, reviews, and the technical setup so customers nearby find you first.", "Local SEO"],
              ["🤖", "Show up in AI answers", "When someone asks ChatGPT or Google AI for a business like yours, we make sure your name comes up.", "AEO / GEO"],
              ["🛒", "Sell online", "A full online store with secure card payments, a shopping cart, and stock management that you can update yourself.", "E-commerce, Stripe / PayPal"],
              ["📅", "Take bookings automatically", "Let customers book and pay online, with reminders sent for them. Fewer no-shows, less admin.", "Online booking systems"],
              ["💬", "Never miss a lead", "Missed-call text-back, instant replies, and a website chat assistant so an enquiry never goes cold.", "AI automation"],
            ].map(([ico, h, p, tech]) => (
              <div key={h} className="card reveal">
                <div className="ico">{ico}</div>
                <h3>{h}</h3><p>{p}</p><span className="tech">{tech}</span>
              </div>
            ))}
          </div>
          <div className="reveal mt-10">
            <Link href="/websites/" className="btn btn-ghost">More on websites &amp; search &rarr;</Link>
          </div>
        </div>
      </section>

      {/* IT */}
      <section style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap py-[84px]">
          <div className="sec-head reveal">
            <span className="eyebrow">Behind the scenes</span>
            <h2>The boring tech that keeps you running. Sorted.</h2>
            <p>The same enterprise-grade IT that big companies pay a fortune for, priced and explained for a small business. You will always know what we did and why.</p>
          </div>
          <div className="cards">
            {[
              ["💻", "Set up and secure your computers", "New laptops configured properly, old ones cleaned up, every machine kept patched and protected, from one dashboard.", "Endpoint management / Intune"],
              ["🛡️", "Protect against scams & ransomware", "Practical defences against the phishing and ransomware actually hitting Australian small businesses, aligned to the Essential Eight.", "Endpoint security"],
              ["🌐", "Set up your office network", "Reliable Wi-Fi and wired networks, business internet, and tidy structured cabling. Done once and done right.", "Network & connectivity"],
              ["💾", "Back up everything, on-site", "A local backup box plus the 3-2-1 rule, so a crash, theft, or ransomware never means losing your files.", "NAS backup, Synology"],
              ["☁️", "Move to the cloud", "Email, files, and accounts moved to Microsoft 365 or Google with no lost data and no downtime.", "Cloud migration / M365"],
              ["🗄️", "Move and modernise databases", "Shift ageing on-premise servers and databases to a modern, supported setup, safely.", "Database migration"],
              ["📦", "Move or open an office", "Full IT relocation, planned and executed so you are running again the next morning.", "Office IT relocation"],
              ["⚡", "Make slow computers fast again", "A simple RAM and storage upgrade can add years to a machine for a fraction of replacing it.", "Hardware upgrades"],
              ["🔧", "On-site help when you need it", "A real person who comes to you across Greater Sydney for setups, office moves, and the things that just break.", "Ad-hoc & managed support"],
            ].map(([ico, h, p, tech]) => (
              <div key={h} className="card reveal">
                <div className="ico">{ico}</div>
                <h3>{h}</h3><p>{p}</p><span className="tech">{tech}</span>
              </div>
            ))}
          </div>
          <div className="reveal mt-10">
            <Link href="/it-support/" className="btn btn-ghost">More on IT support &rarr;</Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section>
        <div className="wrap py-[84px]">
          <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-12 items-center">
            <div className="reveal">
              <span className="eyebrow">Why Coralstone</span>
              <h2 className="text-ink mt-[14px]" style={{ fontSize: "clamp(2rem,4.2vw,2.9rem)" }}>Enterprise experience. Small-business manners.</h2>
              <p className="text-muted text-[1.08rem] mt-4">Big IT firms chase big contracts and treat small businesses as an afterthought. Coralstone does the opposite. You get the same engineer every time, plain answers, and prices that make sense.</p>
            </div>
            <div className="reveal grid">
              {[
                ["📞", "A real engineer answers", "No ticket queue, no offshore call centre. You talk to the person doing the work."],
                ["🔓", "No lock-in contracts", "Stay because the work is good, not because you are trapped. Month to month, always."],
                ["💰", "Pay when you are happy", "Start with a $400 deposit. The balance is due only once the work is done and you are satisfied."],
                ["🗒️", "Fixed quotes, no jargon", "You get the scope and the price before anything starts, written in plain English."],
              ].map(([k, h, p], i) => (
                <div key={h} className={`flex gap-4 py-[18px] ${i < 3 ? "border-b" : ""}`} style={{ borderColor: "var(--line)" }}>
                  <div className="flex-none w-[42px] h-[42px] rounded-[11px] grid place-items-center text-[1.15rem]" style={{ background: "var(--ink)", color: "var(--sand)" }}>{k}</div>
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
