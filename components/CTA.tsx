export default function CTA({
  eyebrow = "No hard sell",
  title = "Start with a free check of your website and Google presence.",
  body = "A straight conversation about what you need and whether we can help. We will show you exactly where customers are slipping away, free, whether or not you hire us.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="text-center" style={{ background: "var(--ink)", color: "var(--sand)" }} id="contact">
      <div className="wrap py-20">
        <div className="reveal">
          <span className="eyebrow" style={{ color: "#E9A07F" }}>{eyebrow}</span>
          <h2 className="text-paper mt-3" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>{title}</h2>
          <p className="mx-auto mt-[18px] mb-[30px] text-[1.1rem]" style={{ color: "rgba(243,235,221,.75)", maxWidth: "48ch" }}>{body}</p>
          <a className="btn btn-primary text-[1.05rem] px-[30px] py-[15px]" href="https://calendly.com/abhishek-sinha-coralstonegroup/30min">
            Book a free 30-minute chat &rarr;
          </a>
          <p className="mt-[18px] text-[.88rem]" style={{ color: "rgba(243,235,221,.6)" }}>
            Or email hello@coralstonegroup.com.au &middot; +61 467 604 791 &middot; Mon&ndash;Fri 8am&ndash;6pm AEST
          </p>
        </div>
      </div>
    </section>
  );
}
