interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}
  
export const Container = ({ className, children }: IContainerProps) => {
  return (
    <div className={`mx-auto px-[20px] w-[min(100%,1200px)] ${ className ? className : "" }`}>
      { children }
    </div>
  );
}