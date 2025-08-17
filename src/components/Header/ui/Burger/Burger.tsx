"use client"

import { useState } from "react";
import { BurgerButton } from "./BurgerButton";
import { BurgerList } from "./BurgerList";

export const Burger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <BurgerButton isOpen={isOpen} handleOpen={handleOpen} />
      <BurgerList isOpen={isOpen} />
    </>
  );
}