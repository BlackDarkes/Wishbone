"use client"

import { OUR_PROCESS_ITEMS } from "@shared/constants/ourProcess/ourProcess";
import { Container } from "@shared/ui";
import { OurProcess } from "@shared/ui/OurProcess/OurProcess";
import { motion } from "framer-motion";

export const OurProcesses = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <Container size="midle" className="flex-col py-[clamp(60px,7vw,100px)]">
        <div className="flex flex-col gap-x-[13px] items-center">
          <p className="text-[14px] text-[#645C55] uppercase">Our process</p>
          <h2 className="text-[#1B1A1A] text-[clamp(26px,7vw,39px)]">How we do what we do.</h2>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }} viewport={{ once: true }} className="grid grid-cols-3 gap-[40px_16px] mt-[40px] max-[1024px]:grid-cols-2 max-[767px]:grid-cols-1">
          {OUR_PROCESS_ITEMS.map((ourProcessItem) => {
            return <OurProcess key={ourProcessItem.id} outProcess={ourProcessItem} />
          })}
        </motion.div>
      </Container>
    </motion.section>
  );
}