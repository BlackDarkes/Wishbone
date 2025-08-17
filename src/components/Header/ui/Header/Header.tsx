import { Container } from "@shared/ui";
import { Navigation } from "@shared/ui/Navigation/Navigation";
import Image from "next/image";
import Logo from "@assets/logo.svg";
import { Burger } from "../Burger/Burger";

export const Header = () => {
  return (
    <header>
      <Container className="flex justify-between items-center py-[24px]">
        <Image src={Logo} alt="Логотип" className="max-[767px]:w-[160px]" />
        
        <nav className="max-[1024px]:hidden">
          <Navigation />
        </nav>

        <Burger />
      </Container>
    </header>
  );
};
