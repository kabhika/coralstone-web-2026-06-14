import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, fixed-scope pricing for websites and IT support. Website packages from $1,499 + GST. Start with a $400 deposit, pay the balance only when you are happy. No lock-in.",
};

const web = [
  {
    name: "Starter",
    desc: "For trades and small businesses that need a sharp, professional presence.",
    price: "$1,499",
    pop: false,
    items: ["Up to 5 pages", "Mobile-first, fast design", "Professional copywriting", "Google setup & basic SEO", "Contact form & 1 year hosting", "30 days post-launch support"],
  },
  {
    name: "Business + Search",
    desc: "For businesses that want to rank on Google and bring in leads.",
    price: "$2,499",
    pop: true,
    items: ["Everything in Starter", "Up to 15 pages", "Advanced SEO + AEO setup", "Analytics & Search Console", "Competitor keyword analysis", "Blog & speed optimisation"],
  },
  {
    name: "Online Store",
    desc: "For selling products online, with payments and stock built in.",
    price: "$3,999",
    pop: false,
    items: ["Everything in Business + Search", "Up to 50 products", "Card payments (Stripe / PayPal)", "Cart, checkout & accounts", "Stock management", "Shipping & pickup options"],
  },
];

const it = [
  {
    tag: "Break-fix",
    name: "Ad-hoc Support",
    desc: "Help now and then, no retainer.",
    price: "$120",
    unit: "/hr",
    note: "2hr minimum",
    pop: false,
    items: ["On-site or remote", "Hardware upgrades (RAM, SSD)", "Network troubleshooting", "PC setup & config"],
  },
  {
    tag: "Managed",
    name: "Monthly Retainer",
    desc: "Proactive management, flat rate.",
    price: "$890",
    unit: "/mo",
    note: "Per location",
    pop: true,
    items: ["Endpoint management (Intune)", "NAS backup & monitoring", "Security patching", "Priority response", "Monthly health report"],
  },
  {
    tag: "Project",
    name: "Fixed-scope Projects",
    desc: "Migrations and one-off builds.",
    price: "$2,400",
    unit: "",
    note: "Scope upfront",
    pop: false,
    items: ["Microsoft 365 migration", "Office IT relocation", "Backup & security setup", "AI / automation builds"],
  },
];

function Tier({ children, pop }: { children: React.ReactNode; pop?: boolean }) {
  return (
    <div
      className="reveal bg-paper rounded-[18px] p-[30px] flex flex-col relative"
      style={{
        border: pop ? "2px solid var(--coral)" : "1px solid var(--line)",
        boxShadow: pop ? "0 24px 50px -30px rgba(217,87,46,.7)" : "var(--shadow)",
      }}
    >
      {children}
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent. No surprises."
        intro="Fixed-scope quotes before any work begins, always. Websites are a one-off investment. IT is quoted separately so you only pay for what you use."
      />

      {/* WEBSITES */}
      <section>
        <div className="wrap py-[64px]">
          <div className="sec-head reveal" style={{ maxWidth: 680 }}>
            <span className="eyebrow">Website packages</span>
            <h2>One-time. No hidden charges.</h2>
            <p>A small deposit to start, the balance only when you are fully happy.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {web.map((t) => (
              <Tier key={t.name} pop={t.pop}>
                {t.pop && <span className="absolute -top-3 right-[22px] text-[.72rem] font-bold uppercase tracking-wide px-3 py-[5px] rounded-full" style={{ background: "var(--coral)", color: "#fff" }}>Most popular</span>}
                <h3 className="text-ink text-[1.25rem]">{t.name}</h3>
                <p className="text-muted text-[.9rem] mt-2 mb-[18px] min-h-[42px]">{t.desc}</p>
                <div className="text-[.78rem] uppercase tracking-wider text-muted font-semibold">Starting from</div>
                <div className="font-display text-[2.5rem] font-semibold text-charcoal leading-none">{t.price} <small className="text-[.85rem] font-sans text-muted font-medium">+ GST</small></div>
                <ul className="list-none my-5 grid gap-[10px]">
                  {t.items.map((i) => (
                    <li key={i} className="flex gap-[10px] text-[.92rem] text-charcoal"><span className="font-extrabold" style={{ color: "var(--coral)" }}>✓</span>{i}</li>
                  ))}
                </ul>
                <Link href="/contact/" className={`btn ${t.pop ? "btn-primary" : "btn-ghost"} mt-auto justify-center`}>Get a quote</Link>
              </Tier>
            ))}
          </div>
          <p className="reveal mt-6 text-center text-[.92rem] text-muted">Start with just a <b className="text-ink">$400 deposit</b>. The balance is payable only once your website is complete and you are fully satisfied.</p>
        </div>
      </section>

      {/* IT */}
      <section style={{ background: "var(--sand-2)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap py-[72px]">
          <div className="sec-head reveal" style={{ maxWidth: 680 }}>
            <span className="eyebrow">IT support</span>
            <h2>Pay for what you use.</h2>
            <p>No lock-in on any of these. Fixed quotes before work starts.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {it.map((t) => (
              <Tier key={t.name} pop={t.pop}>
                {t.pop && <span className="absolute -top-3 right-[22px] text-[.72rem] font-bold uppercase tracking-wide px-3 py-[5px] rounded-full" style={{ background: "var(--coral)", color: "#fff" }}>Most popular</span>}
                <div className="text-[.74rem] uppercase tracking-wider font-semibold mb-1" style={{ color: "var(--coral-2)" }}>{t.tag}</div>
                <h3 className="text-ink text-[1.25rem]">{t.name}</h3>
                <p className="text-muted text-[.9rem] mt-2 mb-[18px] min-h-[42px]">{t.desc}</p>
                <div className="text-[.78rem] uppercase tracking-wider text-muted font-semibold">Starting from</div>
                <div className="font-display text-[2.5rem] font-semibold text-charcoal leading-none">{t.price}<small className="text-[.95rem] font-sans text-muted font-medium">{t.unit}</small></div>
                <div className="text-[.8rem] text-muted mt-1">{t.note}</div>
                <ul className="list-none my-5 grid gap-[10px]">
                  {t.items.map((i) => (
                    <li key={i} className="flex gap-[10px] text-[.92rem] text-charcoal"><span className="font-extrabold" style={{ color: "var(--coral)" }}>✓</span>{i}</li>
                  ))}
                </ul>
                <Link href="/contact/" className={`btn ${t.pop ? "btn-primary" : "btn-ghost"} mt-auto justify-center`}>Get a quote</Link>
              </Tier>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
