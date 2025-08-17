import { Navigation } from "@shared/ui/Navigation/Navigation";

interface IBurgerListProps {
  isOpen: boolean;
  className?: string;
}
  
export const BurgerList = ({ isOpen, className }: IBurgerListProps) => {
  return (
    <>
      <Navigation className={`
          fixed top-0 left-0 flex-col items-start text-[22px] gap-y-[30px] p-[70px_20px]  w-full h-full bg-[var(--main-white)] duration-400
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          min-[1024px]:hidden
          ${className ? className : ""}
        `} />
    </>
  );
}