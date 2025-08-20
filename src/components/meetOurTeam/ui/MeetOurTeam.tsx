import { FEEDBACKS_ITEMS } from "@shared/constants";
import { Container, Feedback } from "@shared/ui";

export const MeetOurTeam = () => {
  return (
    <section>
      <Container size="midle" className="gap-x-[40px] max-[1024px]:flex-col py-[clamp(60px,7vw,100px)]">
        <div className="w-[min(100%,370px)] self-start max-[1024px]:self-center">
          <div>
            <h2 className="mb-[14px] text-[clamp(24px,7vw,32px)] text-[#403E3B]">Meet our team</h2>
            <p className="text-[15px] text-[#645C55]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis.
            </p>
          </div>

          <button className="mt-[30px] border-[1px] border-[#1B1A1A] p-[11px_20px] text-[#1B1A1A] outline-[1px] outline-offset-[3px] outline-transparent duration-400 hover:rounded-[8px] hover:bg-[#1B1A1A] hover:text-[#ECE7E4] focus-visible:outline-[#1B1A1A] active:translate-y-[1px]">
            See team
          </button>
        </div>

        <div className="grid grid-cols-2 w-[min(100%,770px)] gap-[40px] max-[767px]:grid-cols-1 max-[767px]:items-center max-[767px]:gap-y-[20px] max-[767px]:w-[min(100%,370px)] max-[767px]:mt-[50px]">
          {FEEDBACKS_ITEMS.map(feedback => {
            return <Feedback key={feedback.name} feedback={feedback} />;
          })}
        </div>
      </Container>
    </section>
  );
};
