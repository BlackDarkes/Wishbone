import { FEEDBACKS_ITEMS, OUT_FIRM_INFO } from "@shared/constants";
import { Container, Feedback } from "@shared/ui";

export const OutFirm = () => {
  const firstFeedback = FEEDBACKS_ITEMS[0];

  return (
    <section className="py-[clamp(60px,7vw,100px)]">
      <Container size="smole" className="gap-x-[130px] gap-y-[40px] max-[767px]:flex-col ">
        <h2 className="text-[clamp(24px,7vw,32px)] self-start max-[767px]:self-center">Our firm</h2>

        <div className="flex flex-col gap-y-[10px]  w-[min(100%,493px)]">
          {OUT_FIRM_INFO.map((outFirmItem, index) => {
            return (
              <p key={index} className="text-[#403E3B] leading-[24px]">
                {outFirmItem}
              </p>
            )
          })}

          <Feedback feedback={firstFeedback} />
        </div>
      </Container>
    </section>
  );
};
