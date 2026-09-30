import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PHONE_ABHI_TEL, WHATSAPP_URL } from "@/lib/contact";
import { ENTITY } from "@/lib/facts";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Coralstone about your website, bookings, or getting found on Google. Book a free 30-minute chat, WhatsApp us, email hello@coralstonegroup.com.au, or call Abhi on 0467 604 791. Box Hill NSW, Greater Sydney.",
};

const services = [
  "New website",
  "Online booking system",
  "Get found on Google (SEO / AEO)",
  "E-Commerce store setup",
  "Missed-Call Rescue and automation",
  "IT support, computers and network",
  "Cloud migration (Microsoft 365 / Azure)",
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
                <div key="addr" className="flex items-center gap-4">
                  <span className="flex-none w-[44px] h-[44px] rounded-[12px] grid place-items-center" style={{ background: "var(--sand-2)" }}>
                    <MapPin size={20} color="var(--coral-2)" strokeWidth={1.75} />
                  </span>
                  <span className="text-[1.02rem] text-charcoal">Box Hill NSW 2765 &middot; Greater Sydney</span>
                </div>
                <div key="phone" className="flex items-center gap-4">
                  <span className="flex-none w-[44px] h-[44px] rounded-[12px] grid place-items-center" style={{ background: "var(--sand-2)" }}>
                    <Phone size={20} color="var(--coral-2)" strokeWidth={1.75} />
                  </span>
                  <a href={`tel:${PHONE_ABHI_TEL}`} className="text-[1.02rem] text-charcoal hover:text-ink">Call Abhi, 0467 604 791</a>
                </div>
                <div key="wa" className="flex items-center gap-4">
                  <span className="flex-none w-[44px] h-[44px] rounded-[12px] grid place-items-center" style={{ background: "var(--sand-2)" }}>
                    <MessageCircle size={20} color="var(--coral-2)" strokeWidth={1.75} />
                  </span>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[1.02rem] text-charcoal hover:text-ink">WhatsApp us, any time</a>
                </div>
                <div key="mail" className="flex items-center gap-4">
                  <span className="flex-none w-[44px] h-[44px] rounded-[12px] grid place-items-center" style={{ background: "var(--sand-2)" }}>
                    <Mail size={20} color="var(--coral-2)" strokeWidth={1.75} />
                  </span>
                  <a href={`mailto:${ENTITY.email}`} className="text-[1.02rem] text-charcoal hover:text-ink">{ENTITY.email}</a>
                </div>
                <div key="hours" className="flex items-center gap-4">
                  <span className="flex-none w-[44px] h-[44px] rounded-[12px] grid place-items-center" style={{ background: "var(--sand-2)" }}>
                    <Clock size={20} color="var(--coral-2)" strokeWidth={1.75} />
                  </span>
                  <span className="text-[1.02rem] text-charcoal">{ENTITY.hours}</span>
                </div>
              </div>
              {/* Was Calendly: https://calendly.com/abhishek-sinha-coralstonegroup/30min */}
              <a href="/book/" className="btn btn-primary mt-8">Book a free 30-minute chat &rarr;</a>
              <p className="text-muted text-[.86rem] mt-4">Prefer email? Write to {ENTITY.email} and we will reply same business day.</p>
            </div>

            {/* form */}
            <div className="reveal bg-paper border rounded-[24px] p-[34px]" style={{ borderColor: "var(--line)", boxShadow: "var(--shadow)" }}>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="grid gap-4"
              >
                {/* Web3Forms access key */}
                <input type="hidden" name="access_key" value="168e60d7-87a0-4efc-9738-d907f9388a20" />
                {/* Redirect to branded thank-you page after submission */}
                <input type="hidden" name="redirect" value="https://www.coralstonegroup.com.au/thank-you/" />
                {/* Subject line in your inbox */}
                <input type="hidden" name="subject" value="New enquiry — coralstonegroup.com.au" />
                {/* Honeypot anti-spam */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first_name" className="sr-only">First name</label>
                    <input id="first_name" name="first_name" required placeholder="First name" className="fld" />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="sr-only">Last name</label>
                    <input id="last_name" name="last_name" placeholder="Last name" className="fld" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your email</label>
                  <input id="email" type="email" name="email" required placeholder="Your email" className="fld" />
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">Company name</label>
                  <input id="company" name="company" placeholder="Company name" className="fld" />
                </div>
                <div>
                  <label htmlFor="service" className="sr-only">What do you need help with?</label>
                  <select id="service" name="service" required defaultValue="" className="fld">
                    <option value="" disabled>What do you need help with?</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Tell us more</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us more" className="fld" />
                </div>
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
        .fld:focus{border-color:var(--coral);box-shadow:0 0 0 3px rgba(216,105,55,.15)}
        .fld::placeholder{color:var(--muted)}
      `}</style>
    </>
  );
}
