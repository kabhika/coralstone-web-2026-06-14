import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Coralstone about your website or IT. Book a free 30-minute chat, email hello@coralstonegroup.com.au, or call +61 467 604 791. Sydney, NSW.",
};

const services = [
  "Website Design & Development",
  "SEO / AEO — Rank on Google",
  "E-Commerce Store Setup",
  "Computer setup & security (Intune / EUC)",
  "Network & Office Setup",
  "Cloud Migration (Microsoft 365 / Azure)",
  "Database Migration",
  "NAS Backup Setup",
  "AI / Automation",
  "Hardware Upgrades",
  "Office IT Relocation",
  "Something else",
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your tech."
        intro="No hard sell, no jargon. A straight conversation about what you need and whether we can help."
      />

      <section>
        <div className="wrap pb-[90px]">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12">
            {/* details */}
            <div className="reveal">
              <div className="grid gap-5">
                {[
                  ["📍", "Sydney, New South Wales, Australia"],
                  ["📞", "+61 467 604 791"],
                  ["📧", "hello@coralstonegroup.com.au"],
                  ["🕐", "Mon–Fri, 8am–6pm AEST"],
                ].map(([ico, v]) => (
                  <div key={v} className="flex items-center gap-4">
                    <span className="flex-none w-[44px] h-[44px] rounded-[12px] grid place-items-center text-[1.2rem]" style={{ background: "var(--sand-2)" }}>{ico}</span>
                    <span className="text-[1.02rem] text-charcoal">{v}</span>
                  </div>
                ))}
              </div>
              <a href="https://calendly.com/abhishek-sinha-coralstonegroup/30min" className="btn btn-primary mt-8">Book a free 30-minute chat &rarr;</a>
              <p className="text-muted text-[.86rem] mt-4">Prefer email? Write to hello@coralstonegroup.com.au and we will reply same business day.</p>
            </div>

            {/* form */}
            <div className="reveal bg-paper border rounded-[24px] p-[34px]" style={{ borderColor: "var(--line)", boxShadow: "var(--shadow)" }}>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="grid gap-4"
              >
                {/* Web3Forms access key — replace YOUR_ACCESS_KEY_HERE with the key from web3forms.com */}
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                {/* Redirect to branded thank-you page after submission */}
                <input type="hidden" name="redirect" value="https://www.coralstonegroup.com.au/thank-you/" />
                {/* Subject line in your inbox */}
                <input type="hidden" name="subject" value="New enquiry — coralstonegroup.com.au" />
                {/* Honeypot anti-spam */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="first_name" required placeholder="First name" className="fld" />
                  <input name="last_name" placeholder="Last name" className="fld" />
                </div>
                <input type="email" name="email" required placeholder="Your email" className="fld" />
                <input name="company" placeholder="Company name" className="fld" />
                <select name="service" required defaultValue="" className="fld">
                  <option value="" disabled>What do you need help with?</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <textarea name="message" rows={4} placeholder="Tell us more" className="fld" />
                <button type="submit" className="btn btn-primary justify-center">Send message &rarr;</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .fld{width:100%;background:var(--sand);border:1px solid var(--line);border-radius:12px;
          padding:13px 15px;font-size:.96rem;color:var(--charcoal);font-family:inherit;outline:none;
          transition:border-color .15s, box-shadow .15s}
        .fld:focus{border-color:var(--coral);box-shadow:0 0 0 3px rgba(217,87,46,.15)}
        .fld::placeholder{color:var(--muted)}
      `}</style>
    </>
  );
}
