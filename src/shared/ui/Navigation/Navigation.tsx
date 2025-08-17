import { NAVIGATION_POINTS } from "@shared/constants/navigation";
import Link from "next/link";

interface INavigationProps {
  className?: string;
}

export const Navigation = ({ className }: INavigationProps) => {
  return (
    <ul className={`flex items-center gap-x-[32px] ${className ? className : ""}`}>
      {NAVIGATION_POINTS.map(point => {
        return (
          <li key={point}>
            {/* `/${point.toLowerCase()}` */}
            {/* prettier-ignore */}
            <Link
              href={"/"}
              className={`
                relative inline-block outline-1 outline-offset-[3px] outline-transparent rounded-[4px] duration-400 
                before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-0 before:bg-[#1B1A1A] before:duration-400 before:content-['']
                hover:text-[var(--main-black)] hover:before:scale-100 
                focus-visible:outline-[var(--main-black)] 
                w-max
              `}
            >
              {point}
            </Link>
          </li>
        );
      })}
      {/* prettier-ignore */}
      <button
        type="button"
        className={`
            rounded-[14px] bg-[#1B1A1A] p-[11px_20px] outline-1 outline-offset-[3px] outline-transparent text-white duration-400
            hover:bg-[var(--main-white)] hover:text-[var(--main-black)]
            active:translate-y-[1px]
            focus-visible:outline-[var(--main-black)]
          `}
      >
        Get template
      </button>
    </ul>
  );
};
