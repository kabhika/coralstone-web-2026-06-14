import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for AI automation, IT support, and websites and SEO. Missed-Call Rescue from $497 setup + $79/mo. IT and website work is quoted after your free audit. No lock-in.",
};

const ai = [
  {
    name: "Missed-Call Rescue",
    desc: "Every missed caller gets a text within seconds. Carrier sender registration, message copy written for your trade, and your monthly rescued-calls report are all included.",
    price: "$497",
    priceNote: "+ GST setup",
    price2: "$79",
    price2Note: "+ GST /mo",
    href: "/missed-call-rescue/",
    cta: "See how it works",
  },
  {
    name: "Front Desk",
    desc: "Everything in Rescue, plus Speed-to-Lead, appointment reminders, and the Review Engine. Most clients start with Rescue and step up once they see their first month's rescued-calls report.",
    price: "$297",
    priceNote: "+ GST /mo",
    href: "/contact/",
    cta: "Get a quote",
  },
  {
    name: "Customer Reactivation",
    desc: "A one-off text campaign to your existing customer list, with a simple offer that brings past customers back. Scoped in your free audit.",
    price: "From $750",
    priceNote: "+ GST, one-off",
    href: "/contact/",
    cta: "Get a quote",
  },
  {
    name: "Stella, AI Receptionist",
    desc: "A managed AI that answers your phone, books jobs, and texts you the summary. Scoped in your free audit.",
    price: "From $399",
    priceNote: "+ GST /mo",
    href: "/contact/",
    cta: "Get a quote",
  },
];

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
    items: ["Everything in Starter", "Up to 15 pages", "Advanced SEO + AEO setup", "Analytics & Search Console", "Competitor keyword analysis", "Blog & speed optimisation", "Ongoing SEO from $300/mo (optional)"],
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
        boxShadow: pop ? "0 24px 50px -30px rgba(216,105,55,.7)" : "var(--shadow)",
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
        intro="AI automation has set prices below. Websites, SEO, and IT support are quoted after your free audit. No lock-in, ever, and you only pay when you are happy with the work."
      />

      {/* AI AUTOMATION */}
      <section>
        <div className="wrap py-[64px]">
          <div className="sec-head reveal" style={{ maxWidth: 680 }}>
            <span className="eyebrow">AI automation</span>
            <h2>Start with the one that pays for itself first.</h2>
            <p>No lock-in on any of these. Cancel any month.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ai.map((t) => (
              <Tier key={t.name}>
                <h3 className="text-ink text-[1.15rem]">{t.name}</h3>
                <p className="text-muted text-[.88rem] mt-2 mb-[16px] min-h-[95px]">{t.desc}</p>
                <div className="font-display text-[1.9rem] font-semibold text-charcoal leading-none">
                  {t.price} <small className="text-[.78rem] font-sans text-muted font-medium">{t.priceNote}</small>
                </div>
                {t.price2 && (
                  <div className="font-display text-[1.4rem] font-semibold text-charcoal leading-none mt-1">
                    {t.price2} <small className="text-[.78rem] font-sans text-muted font-medium">{t.price2Note}</small>
                  </div>
                )}
                <Link href={t.href} className="btn btn-ghost mt-5 justify-center w-full">{t.cta}</Link>
              </Tier>
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITES */}
      <section style={{ background: "var(--sand-2)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap py-[72px]">
          <div className="sec-head reveal" style={{ maxWidth: 680 }}>
            <span className="eyebrow">Websites and SEO</span>
            <h2>One-time. No hidden charges.</h2>
            <p>A fixed quote confirmed in your free audit. A small deposit to start, the balance only when you are fully happy.</p>
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
                    <li key={i} className="flex gap-[10px] text-[.92rem] text-charcoal"><span className="font-extrabold" style={{ color: "var(--coral)" }}>&#10003;</span>{i}</li>
                  ))}
                </ul>
                <Link href="/contact/" className={`btn ${t.pop ? "btn-primary" : "btn-ghost"} mt-auto justify-center`}>Get a quote</Link>
              </Tier>
            ))}
          </div>
          <p className="reveal mt-6 text-center text-[.92rem] text-muted">Start with just a <b className="text-ink">$497 deposit</b>. The balance is payable only once your website is complete and you are fully satisfied.</p>
        </div>
      </section>

      {/* IT */}
      <section>
        <div className="wrap py-[64px]">
          <div className="sec-head reveal" style={{ maxWidth: 680 }}>
            <span className="eyebrow">IT support</span>
            <h2>Pay for what you use.</h2>
            <p>Fixed quotes and simple monthly options, confirmed in your free audit. No lock-in on any of these.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {it.map((t) => (
              <Tier key={t.name} pop={t.pop}>
                {t.pop && <span className="absolute -top-3 right-[22px] text-[.72rem] font-bold uppercase tracking-wide px-3 py-[5px] rounded-full" style={{ background: "var(--coral)", color: "#fff" }}>Most popular</span>}
                <div className="text-[.74rem] uppercase tracking-wider font-semibold mb-1" style={{ color: "var(--coral-2)" }}>{t.tag}</div>
                <h3 className="text-ink text-[1.25rem]">{t.name}</h3>
                <p className="text-muted text-[.9rem] mt-2 mb-[18px] min-h-[42px]">{t.desc}</p>
                <div className="text-[.78rem] uppercase tracking-wider text-muted font-semibold">Starting from</div>
                <div className="font-display text-[2.5rem] font-semibold text-charcoal leading-none">{t.price}<small className="text-[.95rem] font-sans text-muted font-medium">{t.unit} + GST</small></div>
                <div className="text-[.8rem] text-muted mt-1">{t.note}</div>
                <ul className="list-none my-5 grid gap-[10px]">
                  {t.items.map((i) => (
                    <li key={i} className="flex gap-[10px] text-[.92rem] text-charcoal"><span className="font-extrabold" style={{ color: "var(--coral)" }}>&#10003;</span>{i}</li>
                  ))}
                </ul>
                <Link href="/contact/" className={`btn ${t.pop ? "btn-primary" : "btn-ghost"} mt-auto justify-center`}>Get a quote</Link>
              </Tier>
            ))}
          </div>
          <p className="reveal mt-6 text-center text-[.92rem] text-muted">Cloud and database migrations, office relocations, security setups, and automation builds are quoted as <b className="text-ink">fixed-scope projects</b>, with the price agreed before any work starts.</p>
        </div>
      </section>

      <CTA />
    </>
  );
}
