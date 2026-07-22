"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PhoneMissed } from "lucide-react";

export default function PhoneMockup() {
  const reduce = useReducedMotion();

  return (
    <div
      className="relative mx-auto w-[270px] h-[540px] rounded-[38px] p-[8px]"
      style={{ background: "var(--charcoal)", boxShadow: "var(--shadow)" }}
    >
      <div className="relative w-full h-full rounded-[30px] overflow-hidden flex flex-col" style={{ background: "linear-gradient(180deg, var(--ink), var(--ink-2))" }}>
        <div className="absolute left-1/2 -translate-x-1/2 top-[10px] w-[86px] h-[16px] rounded-full" style={{ background: "rgba(0,0,0,.35)" }} />

        <div className="pt-9 px-5 text-center">
          <span className="text-[.7rem] font-semibold tracking-wide" style={{ color: "rgba(243,235,221,.45)" }}>9:41</span>
        </div>

        <div className="flex-1 flex flex-col justify-end gap-3 p-5">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="rounded-[16px] p-3 flex items-start gap-3"
            style={{ background: "rgba(243,235,221,.1)", border: "1px solid rgba(243,235,221,.18)" }}
          >
            <PhoneMissed size={18} color="#E8A88B" strokeWidth={1.75} style={{ marginTop: 2, flexShrink: 0 }} />
            <div>
              <div className="text-[.8rem] font-semibold text-paper">Missed Call</div>
              <div className="text-[.74rem]" style={{ color: "rgba(243,235,221,.6)" }}>0412 345 678 &middot; now</div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.9 }}
            className="self-start max-w-[86%] rounded-[16px] rounded-bl-[4px] p-3"
            style={{ background: "var(--coral)" }}
          >
            <p className="text-[.8rem] leading-snug text-white">
              Hi, sorry we missed your call. This is Dave's Plumbing, flat out on a job right now. Reply here or we will call you back within the hour.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
