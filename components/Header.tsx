import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/ai-automation/", label: "AI Automation" },
  { href: "/it-support/", label: "IT Support" },
  { href: "/websites/", label: "Websites and SEO" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/about/", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ background: "rgba(243,235,221,.82)", borderColor: "var(--line)" }}>
      <div className="wrap">
        <nav className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center">
            <Image src="/CoralStoneLogoNew.svg" alt="Coralstone Services Group" width={89} height={56} className="h-[56px] w-auto" priority />
          </Link>
          <div className="hidden md:flex gap-[30px] font-medium text-[1.02rem]">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-charcoal/80 hover:text-ink transition">
                {l.label}
              </Link>
            ))}
          </div>
          <Link href="/contact/" className="btn btn-primary">Book a free chat</Link>
        </nav>
      </div>
    </header>
  );
}
