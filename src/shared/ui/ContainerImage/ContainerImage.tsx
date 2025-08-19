import { Container } from "../Container/Container";

interface IContainerImageProps {
  image: string;
  title: string;
  text: string;
  position: "left" | "right";
}
  
export const ContainerImage = ({ image, title, text, position }: IContainerImageProps) => {
  return (
    <section style={{ backgroundImage: `url(${image})` }} className="bg-no-repeat bg-center max-[767px]:bg-left">
      <Container size="max"  className={`h-[600px] ${position === "right" ? "justify-end" : ""} ${position === "left" ? "justify-start" : ""}`}>
        <div className="w-[285px]">
          <h2 className="text-[#403E3B] text-[14px]">{title}</h2>
          <p className="text-[#645C55]">{text}</p>
        </div>
      </Container>
    </section>
  );
}