import { IOutProcess } from "@shared/types";

interface IOurProcessProps {
  outProcess: IOutProcess
}
  
export const OurProcess = ({ outProcess }: IOurProcessProps) => {
  return (
    <section className="flex flex-col items-center gap-y-[15px] w-[min(100%,378px)] max-[767px]:m-auto">
      <img src={outProcess.icon} loading="lazy" alt="Иконка" className="w-[117px] h-[102px]" />

      <div className="flex flex-col items-center">
        <h3 className="text-[#403E3B] text-[18px]">{outProcess.title}</h3>
        <p className="mt-[10px] 39px text-[#645C55] text-[15px] w-[min(100%,292px)] text-center">{outProcess.text}</p>
      </div>
    </section>
  );
}