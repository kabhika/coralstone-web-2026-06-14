import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="wrap text-center max-w-[560px] py-24">
        <div className="reveal">
          <span className="eyebrow">404</span>
          <h1 className="text-ink mt-4" style={{ fontSize: "clamp(2rem,4.5vw,2.8rem)" }}>
            This page has moved, or never existed.
          </h1>
          <p className="text-muted text-[1.1rem] mt-5 mb-8">
            The link is probably old. Everything we do starts on the home page, and a real person answers the phone.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn btn-primary">Back to home &rarr;</Link>
            <Link href="/contact/" className="btn btn-ghost">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
