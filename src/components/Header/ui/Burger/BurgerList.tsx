import { Navigation } from "@componests/header/ui/Navigation/Navigation";

interface IBurgerListProps {
  isOpen: boolean;
  className?: string;
}

export const BurgerList = ({ isOpen, className }: IBurgerListProps) => {
  return (
    <>
      <Navigation
        className={`fixed top-0 left-0 h-full w-full flex-col items-start gap-y-[30px] bg-[var(--main-white)] p-[70px_20px] text-[22px] duration-400 ${isOpen ? "translate-x-0" : "-translate-x-full"} min-[1024px]:hidden ${className ? className : ""} `}
      />
    </>
  );
};
