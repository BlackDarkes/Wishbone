import { NAVIGATION_POINTS } from "@shared/constants/navigation";
import Link from "next/link";

interface INavigationProps {
  className?: string;
}

export const Navigation = ({ className }: INavigationProps) => {
  return (
    <ul className="flex items-center gap-x-[32px]">
      {NAVIGATION_POINTS.map((point) => {
        return (
          <li key={point}>
            <Link href={"/"} className="inline-block relative duration-400 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#1B1A1A] before:scale-0 before:origin-left before:duration-400 hover:before:scale-100 ">{point}</Link>
          </li>
        );
      })}
      <button type="button" className="px-[20px] py-[11px] bg-[#1B1A1A] rounded-[14px] text-white">
        Get template
      </button>
    </ul>
  );
};
