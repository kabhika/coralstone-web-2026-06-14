import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "AI Automation for Sydney small business",
  description:
    "Practical AI automation for Sydney small business, including Missed-Call Rescue. No lock-in, month to month.",
};

export default function AIAutomation() {
  return (
    <>
      <section className="pt-[64px] pb-8">
        <div className="wrap max-w-[760px]">
          <h1 className="reveal text-ink mt-4" style={{ fontSize: "clamp(2.3rem,5vw,3.6rem)" }}>
            AI automation that handles the busywork.
          </h1>
          <p className="reveal mt-5 text-[1.18rem] text-muted">
            We connect the tools you already use so missed calls, quotes, and follow-ups get handled without you lifting a finger. We assess this in your free audit.
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}
