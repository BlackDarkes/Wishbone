import { IFeaturedProjects } from "@shared/types";

interface IFeaturedProjectsProps {
  featuredProjects: IFeaturedProjects;
  className?: string;
}

export const FeaturedProjects = ({ featuredProjects, className }: IFeaturedProjectsProps) => {
  return (
    <section 
      tabIndex={0}
      style={{ backgroundImage: `url(${featuredProjects.image})` }} 
      className="flex flex-col justify-between mx-auto p-[40px] w-[min(100%,375px)] h-[456px] outline-0 cursor-pointer relative bg-cover bg-center group"
    >
      <div className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 z-100 max-[1440px]:opacity-100">
        <p className="text-[#645C55] text-[14px]">{featuredProjects.title}</p>
        <p className="text-[#403E3B] text-[24px]">{featuredProjects.text}</p>
      </div>

      <button 
        type="button" 
        className={`
            p-[11px_20px] bg-[#1B1A1A] text-white outline-[1px] outline-transparent outline-offset-[3px] rounded-[14px] self-start opacity-0 duration-300 z-100 group-hover:opacity-100 
            hover:opacity-80 hover:rounded-[16px]
            active:translate-y-[1px]
            focus-visible:outline-[#1B1A1A] focus-visible:opacity-100 group-focus-visible:opacity-100
            max-[1440px]:opacity-100
          `}
      >
        Read more
      </button>
    </section>
  );
};