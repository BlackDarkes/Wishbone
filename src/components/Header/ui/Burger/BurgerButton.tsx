interface IBurgerButtonProps {
  isOpen: boolean;
  handleOpen: () => void;
}
  
export const BurgerButton = ({ isOpen, handleOpen }: IBurgerButtonProps) => {
  return (
    <>
      <button type="button" onClick={handleOpen} className={`
          relative w-[35px] h-[20px] duration-400 z-300
          after:bottom-0 after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-[var(--main-black)] after:duration-400
          before:top-0 before:content-[''] before:absolute before:left-0 before:w-full before:h-[2px] before:bg-[var(--main-black)] before:duration-400
          ${isOpen ? "after:rotate-45 after:bottom-1/2 after:translate-y-[50%]" : ""}
          ${isOpen ? "before:rotate-135 before:top-1/2 before:translate-y-[-50%]" : ""}
          min-[1024px]:hidden
        `}>
        <span className={`
            absolute block w-full h-[2px] top-1/2 translate-y-[-1px] left-0 bg-[var(--main-black)] 
            ${isOpen ? "hidden" : ""}
          `} />
      </button>
    </>
  );
}