import { Container } from "@shared/ui";
import HeroImage from "@assets/Hero/IMAGE.png";

export const Hero = () => {
  return (
    <section className="mt-[clamp(68px,7vw,94px)]">
      <Container size="extra" className="gap-x-[30px] bg-[#ECE7E4] max-[1024px]:flex-col max-[1024px]:pt-[40px]">
        <div className="flex flex-col items-start justify-center px-[clamp(50px,7vw,100px)_clamp(60px,7vw,110px)] w-[100%] max-[1024px]:pb-[40px]">
          <div className="flex flex-col gap-y-[20px]">
            <p className="text-[14px] text-[#645C55]">Wishbone+Partners</p>
            <h2 className="text-[clamp(2rem,0.727rem+3.64vw,4rem)] leading-[clamp(40px,7vw,70.4px)] text-[#1B1A1A]">The home of beautiful architecture.</h2>
            <p className="text-[#403E3B]">
              We are an architecture firm with a focus on beautiful but
              functional design. At its heart, we believe design is about
              usability and accessibility — these are the guiding principles for
              our work. Read more about our previous projects, our process and
              our team below.
            </p>
          </div>

          <button className="mt-[30px] p-[11px_20px] border-[1px] border-[#1B1A1A] text-[#1B1A1A] duration-400 hover:bg-[#1B1A1A] hover:text-[#ECE7E4] hover:rounded-[8px]">Read more</button>
        </div>

        <div className="bg-no-repeat bg-cover w-[100%] h-[720px]" style={{ backgroundImage: `url(${HeroImage.src})` }} />
      </Container>
    </section>
  );
};
