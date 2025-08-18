import { CSSProperties, ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  size: "extra" | "max" | "midle" | "smole";
  style?: CSSProperties;
  className?: string;
}

export const Container = ({
  className,
  style,
  children,
  size,
}: IContainerProps) => {
  return (
    <div
      style={style}
      className={`mx-auto flex items-center justify-between ${
        size === "extra" ? "w-[min(100%-20px,1440px)]" :
        size === "max" ? "w-[min(100%-20px,1320px)]" : 
        size === "midle" ? "w-[min(100%-20px,1200px)]" : 
        size === "smole" ? "w-[min(100%-20px,768px)]" : ""
      } ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};
