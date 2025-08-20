"use client"

import { FEATURED_PROJECTS } from "@shared/constants/featuredProjects/featuredProjects";
import { Container } from "@shared/ui";
import { FeaturedProjects } from "@shared/ui/FeaturedProjects/FeaturedProjects";
import { motion } from "framer-motion";

export const FeaturedProject = () => {
  return (
    <section className="bg-[#F7F7F7]">
      <Container size="midle" className="flex-col py-[clamp(60px,7vw,100px)]">
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="self-start">
          <h2 className="text-[clamp(26px,7vw,39px)] text-[#1B1A1A]">Featured projects</h2>
          <p className="text-[#645C55] text-[clamp(16px,7vw,24px)] w-[min(100%,581px)]">
            Some of the latest and greatest projects from us here at
            Wishbone+Partners.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }} className="flex justify-between gap-x-[15px] w-full pt-[40px] max-[1024px]:grid max-[1024px]:grid-cols-2 max-[1024px]:gap-[40px] max-[767px]:grid-cols-1">
          {FEATURED_PROJECTS.map((featuredProjectItem) => {
            return (
              <FeaturedProjects key={featuredProjectItem.id} featuredProjects={featuredProjectItem} />
            )
          })}
        </motion.div>

        <a href="/" className={`
            relative mt-[50px] text-[#1B1A1A] outline-[1px] outline-transparent outline-offset-[3px] rounded-[4px] duration-400
            before:content-[""] before:absolute before:bottom-[-3px] before:left-0 before:w-full before:h-[2px] before:bg-[#1B1A1A] before:scale-0 before:duration-400
            hover:before:scale-100
            active:translate-y-[1px]
            focus-visible:outline-[#1B1A1A]
          `}>View all projects</a>
      </Container>
    </section>
  );
};
