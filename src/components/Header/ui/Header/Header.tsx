import { Container } from "@shared/ui";
import { Navigation } from "@componests/header/ui/Navigation/Navigation";
import Image from "next/image";
import Logo from "@assets/logo.svg";
import { Burger } from "../Burger/Burger";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-400">
      <Container size="midle" className="py-[24px]">
        <Image src={Logo} alt="Логотип" className="max-[767px]:w-[160px]" />

        <nav className="max-[1024px]:hidden">
          <Navigation />
        </nav>

        <Burger />
      </Container>
    </header>
  );
};
