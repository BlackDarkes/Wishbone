"use client"

import { Container } from "../Container/Container";
import { motion } from "framer-motion";

interface IContainerImageProps {
  image: string;
  title: string;
  text: string;
  position: "left" | "right";
}
  
export const ContainerImage = ({ image, title, text, position }: IContainerImageProps) => {
  return (
    <section style={{ backgroundImage: `url(${image})` }} className="bg-no-repeat bg-center max-[767px]:bg-left">
      <Container size="max"  className={`h-[600px] ${position === "right" ? "justify-end" : ""} ${position === "left" ? "justify-start" : ""}`}>
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="w-[285px]">
          <h2 className="text-[#403E3B] text-[14px] uppercase">{title}</h2>
          <p className="text-[#645C55]">{text}</p>
        </motion.div>
      </Container>
    </section>
  );
}