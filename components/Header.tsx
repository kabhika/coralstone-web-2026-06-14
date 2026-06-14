import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/websites/", label: "Websites & Search" },
  { href: "/it-support/", label: "IT Support" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/about/", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ background: "rgba(243,235,221,.82)", borderColor: "var(--line)" }}>
      <div className="wrap">
        <nav className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-3 font-display font-semibold text-[1.15rem] text-ink">
            <Image src="/logo.png" alt="Coralstone Services Group" width={120} height={75} className="h-10 w-auto" priority />
            Coralstone
          </Link>
          <div className="hidden md:flex gap-[30px] font-medium text-[.95rem]">
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
