import { Container } from "@shared/ui";
import { Navigation } from "@shared/ui/Navigation/Navigation";
import Image from "next/image";
import Logo from "@assets/logo.svg";

export const Header = () => {
  return (
    <header>
      <Container className="flex justify-between items-center py-[24px]">
        <Image src={Logo} alt="Логотип" />
        
        <nav>
          <Navigation />
        </nav>
      </Container>
    </header>
  );
};
