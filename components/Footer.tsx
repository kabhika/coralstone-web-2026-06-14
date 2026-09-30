import Link from "next/link";
import { ENTITY } from "@/lib/facts";
import { PHONE_ABHI_TEXT, PHONE_ABHI_TEL } from "@/lib/contact";

const links = [
  { href: "/websites/", label: "Websites" },
  { href: "/get-found/", label: "Get Found" },
  { href: "/our-work/", label: "Our Work" },
  { href: "/automation/", label: "Automation" },
  { href: "/it-support/", label: "IT Support" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="py-10 border-t text-[.88rem] text-muted" style={{ borderColor: "var(--line)" }}>
      <div className="wrap grid gap-4">
        <div>
          &copy; {new Date().getFullYear()} {ENTITY.legalName} &middot; ACN {ENTITY.acn} &middot; ABN {ENTITY.abn} &middot; {ENTITY.suburb}, Australia
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink">{l.label}</Link>
          ))}
        </div>
        <div>
          <a href={`mailto:${ENTITY.email}`} className="hover:text-ink">{ENTITY.email}</a> &middot;{" "}
          <a href={`tel:${PHONE_ABHI_TEL}`} aria-label={PHONE_ABHI_TEXT} className="hover:text-ink">
            {PHONE_ABHI_TEXT}
          </a>{" "}
          &middot; {ENTITY.hours}
        </div>
      </div>
    </footer>
  );
}
