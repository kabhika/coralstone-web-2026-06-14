import Link from "next/link";
import { CALL_STELLA_TEXT, PHONE_TEL } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="py-10 border-t text-[.88rem] text-muted" style={{ borderColor: "var(--line)" }}>
      <div className="wrap flex flex-wrap items-center justify-between gap-4">
        <div>&copy; {new Date().getFullYear()} Coralstone Services Group &middot; Sydney, NSW, Australia</div>
        <div className="flex gap-5">
          <Link href="/ai-automation/" className="hover:text-ink">AI Automation</Link>
          <Link href="/it-support/" className="hover:text-ink">IT Support</Link>
          <Link href="/websites/" className="hover:text-ink">Websites and SEO</Link>
          <Link href="/pricing/" className="hover:text-ink">Pricing</Link>
          <Link href="/contact/" className="hover:text-ink">Contact</Link>
        </div>
        <div>
          hello@coralstonegroup.com.au &middot; +61 467 604 791 &middot;{" "}
          <a href={`tel:${PHONE_TEL}`} aria-label={CALL_STELLA_TEXT} className="hover:text-ink">
            {CALL_STELLA_TEXT}
          </a>
        </div>
      </div>
    </footer>
  );
}
