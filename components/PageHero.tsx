export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="pt-[64px] pb-8">
      <div className="wrap max-w-[760px]">
        <span className="eyebrow reveal">{eyebrow}</span>
        <h1 className="reveal text-ink mt-4" style={{ fontSize: "clamp(2.3rem,5vw,3.6rem)" }}>{title}</h1>
        <p className="reveal mt-5 text-[1.18rem] text-muted">{intro}</p>
      </div>
    </section>
  );
}
