import { IFeedback } from "@shared/types";

interface IFeedbackProps {
  feedback: IFeedback;
  className?: string;
}
  
export const Feedback = ({ feedback, className }: IFeedbackProps) => {
  return (
    <section className={`flex items-center gap-x-[30px] py-[8px] ${className ? className : ""}`}>
      <div className="max-[767px]:w-[58px]"><img src={feedback.avatar} alt="Аватар" loading="lazy" /></div>

      <div>
        <h3 className="text-[#1B1A1A] text-[17px]">{feedback.name}</h3>
        <p className="text-[#645C55] text-[14px]">{feedback.post}</p>
      </div>
    </section>
  );
}