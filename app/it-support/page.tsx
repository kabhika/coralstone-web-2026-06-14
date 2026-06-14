import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "IT Support & Security for Sydney small business",
  description:
    "On-site and remote IT support across Greater Sydney: computer setup and security, office networks, NAS backup, ransomware protection, cloud and database migration, Microsoft 365, hardware upgrades, office relocation, and automation. No lock-in.",
};

const services = [
  ["💻", "Set up and secure your computers", "New laptops configured properly, old ones cleaned up, every machine kept patched, encrypted, and protected from one dashboard. Staff start their first day ready to work.", "Endpoint management / Intune / EUC"],
  ["🛡️", "Protect against scams & ransomware", "Practical defences against the phishing and ransomware actually hitting Australian small businesses, aligned to the government's Essential Eight guidance.", "Endpoint security"],
  ["🌐", "Set up your office network", "Reliable Wi-Fi and wired networks, business internet, and tidy structured cabling. The plumbing that everything else depends on, done once and done right.", "Network & connectivity"],
  ["💾", "Back up everything, on-site", "A local backup box plus the 3-2-1 rule, kept separate from your cloud. A crash, theft, or ransomware never means losing your files.", "NAS backup, Synology"],
  ["☁️", "Move to the cloud", "Email, files, and accounts moved to Microsoft 365 or Google with no lost data and no downtime, then set up the way it should have been the first time.", "Cloud migration / M365"],
  ["🗄️", "Move and modernise your databases", "Shift ageing on-premise servers and databases to a modern, supported setup, safely and with a clear rollback plan.", "Database migration"],
  ["📦", "Move or open an office", "Full IT relocation: we plan, disconnect, move, and reconnect your whole setup so you are running again the next morning, not next week.", "Office IT relocation"],
  ["⚡", "Make slow computers fast again", "A simple RAM and storage upgrade can add three or more years to a machine for a fraction of replacing it. We assess, source, and fit.", "Hardware upgrades"],
  ["🤖", "Automate the busywork", "Connect the tools you already use so quotes, invoices, reminders, and follow-ups happen on their own. Practical automation, not buzzwords.", "AI & workflow automation"],
  ["🔧", "On-site & ongoing support", "A real person who comes to you across Greater Sydney for setups and the things that just break, plus optional proactive monthly care.", "Ad-hoc & managed support"],
];

export default function ITSupport() {
  return (
    <>
      <PageHero
        eyebrow="IT support & security"
        title="The boring tech that keeps you running. Sorted."
        intro="The same enterprise-grade IT that big companies pay a fortune for, priced and explained for a small business. You will always know what we did and why."
      />

      <section>
        <div className="wrap py-[64px]">
          <div className="cards">
            {services.map(([ico, h, p, tech]) => (
              <div key={h} className="card reveal">
                <div className="ico">{ico}</div>
                <h3>{h}</h3><p>{p}</p><span className="tech">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section style={{ background: "var(--ink)", color: "var(--sand)" }}>
        <div className="wrap py-[80px]">
          <div className="sec-head reveal" style={{ maxWidth: 660 }}>
            <span className="eyebrow" style={{ color: "#E9A07F" }}>How support works</span>
            <h2 className="text-paper">Two ways to work with us. Both no lock-in.</h2>
            <p style={{ color: "rgba(243,235,221,.72)" }}>Pick the one that fits where you are. Move between them whenever you like.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-[22px]">
            {[
              ["When something breaks", "Ad-hoc support, on-site or remote, charged by the hour with a fixed quote up front for anything bigger. Good if you only need help now and then."],
              ["Keep it all running", "A flat monthly rate that covers proactive management, backups, security patching, and priority response, so problems get caught before they cost you a day."],
            ].map(([h, p]) => (
              <div key={h} className="reveal rounded-[18px] p-7 border" style={{ background: "rgba(243,235,221,.06)", borderColor: "rgba(243,235,221,.18)" }}>
                <h3 className="text-paper text-[1.3rem] mb-2">{h}</h3>
                <p className="text-[.97rem]" style={{ color: "rgba(243,235,221,.74)" }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="No hard sell"
        title="Not sure what you actually need?"
        body="Book a free chat. We will look at your setup and tell you straight what is worth doing, what can wait, and what it would cost."
      />
    </>
  );
}
