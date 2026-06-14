import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 border-t text-[.88rem] text-muted" style={{ borderColor: "var(--line)" }}>
      <div className="wrap flex flex-wrap items-center justify-between gap-4">
        <div>&copy; 2025 Coralstone Services Group &middot; Sydney, NSW, Australia</div>
        <div className="flex gap-5">
          <Link href="/websites/" className="hover:text-ink">Websites</Link>
          <Link href="/it-support/" className="hover:text-ink">IT Support</Link>
          <Link href="/pricing/" className="hover:text-ink">Pricing</Link>
          <Link href="/contact/" className="hover:text-ink">Contact</Link>
        </div>
        <div>hello@coralstonegroup.com.au &middot; +61 467 604 791</div>
      </div>
    </footer>
  );
}
