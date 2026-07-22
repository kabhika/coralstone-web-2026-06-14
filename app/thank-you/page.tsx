import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Message received",
  description: "Thanks for getting in touch. Coralstone will be in touch within one business day.",
};

export default function ThankYou() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="wrap text-center max-w-[560px] py-24">
        <div className="reveal">
          <div className="mb-6 flex justify-center"><CheckCircle2 size={56} color="var(--coral)" strokeWidth={1.75} /></div>
          <span className="eyebrow">Message received</span>
          <h1 className="text-ink mt-4" style={{ fontSize: "clamp(2rem,4.5vw,2.8rem)" }}>
            Thanks for getting in touch.
          </h1>
          <p className="text-muted text-[1.1rem] mt-5 mb-8">
            We will reply to you within one business day. If it is urgent, call us on{" "}
            <a href="tel:+61467604791" className="text-ink font-semibold">+61 467 604 791</a>{" "}
            or book a time directly below.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://calendly.com/abhishek-sinha-coralstonegroup/30min"
              className="btn btn-primary"
            >
              Book a free chat now &rarr;
            </a>
            <Link href="/" className="btn btn-ghost">Back to home</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
