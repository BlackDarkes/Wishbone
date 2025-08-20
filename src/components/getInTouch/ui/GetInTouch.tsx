import { Container } from "@shared/ui";

export const GetInTouch = () => {
  return (
    <section className="bg-[#CEC4BC]">
      <Container size="midle" className="py-[clamp(60px,7vw,100px)] max-[767px]:flex-col">
        <div className="w-[min(100%,570px)]">
          <p className="text-[#645C55] text-[14px]">Get in touch</p>
          <h2 className="text-[clamp(28px,7vw,40px)] text-[#1B1A1A] leading-[42px]">Think we would be a good fit for your next project?</h2>
        </div>

        <a href="/" className={`
            relative mt-[50px] text-[#1B1A1A] outline-[1px] outline-transparent outline-offset-[3px] rounded-[4px] duration-400
            before:content-[""] before:absolute before:bottom-[-3px] before:left-0 before:w-full before:h-[2px] before:bg-[#1B1A1A] before:scale-0 before:duration-400
            hover:before:scale-100
            active:translate-y-[1px]
            focus-visible:outline-[#1B1A1A]
          `}>Get in touch</a>
      </Container>
    </section>
  );
}