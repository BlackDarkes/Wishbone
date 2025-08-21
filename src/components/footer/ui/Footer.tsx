import { Container } from "@shared/ui";
import Image from "next/image";
import IconFacebook from "@assets/Footer/Facebook-Icon-Dark.svg";
import IconInstagram from "@assets/Footer/Instagram-Icon-Dark.svg";
import IconTwitter from "@assets/Footer/Twitter-Icon-Dark.svg";
import IconLogo from "@assets/logo.svg";

export const Footer = () => {
  return (
    <footer>
      <Container size="midle" className="py-[40px] max-[767px]:flex-col gap-y-[50px]">
        <div className="flex flex-col">
          <Image src={IconLogo} alt="logo" className="mb-[20px]" />
          <p>Powered by Webflow</p>
          <p>All rights reserved Wishbone+Partners, Inc. Licensing</p>
        </div>

        <div className="flex items-center gap-x-[20px]">
          <a href="/">
            <Image src={IconTwitter} alt="Twitter" />
          </a>
          <a href="/">
            {" "}
            <Image src={IconInstagram} alt="Instagram" />
          </a>
          <a href="/">
            {" "}
            <Image src={IconFacebook} alt="Facebook" />
          </a>
        </div>
      </Container>
    </footer>
  );
};
