// Placeholder for the live Missed-Call Rescue demo.
// A later task replaces the contents of this component with the real
// interactive widget. Keep the component boundary and export signature
// stable so that swap stays a one-file change.
export default function DemoWidget() {
  return (
    <section>
      <div className="wrap py-16 text-center">
        <div
          className="reveal inline-block rounded-[18px] border px-8 py-10"
          style={{ borderColor: "var(--line)", background: "var(--paper)", boxShadow: "var(--shadow)" }}
        >
          <p className="text-[1.05rem] text-charcoal">
            Want to see it? Book the free audit and we will send the demo to your phone.
          </p>
        </div>
      </div>
    </section>
  );
}
