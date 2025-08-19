import { Container } from "@shared/ui";
import Image1 from "@assets/PriorClients/Combined-Shape.png";
import Image2 from "@assets/PriorClients/Combined-Shape-2.png";
import Image3 from "@assets/PriorClients/Combined-Shape-1.png";
import Image4 from "@assets/PriorClients/Combined-Shape-3.png";

export const PriorClients = () => {
  const images: string[] = [Image1.src, Image2.src, Image3.src, Image4.src];

  return (
    <section className="bg-[#403E3B]">
      <Container
        size="midle"
        className="items-center justify-start gap-x-[130px] py-[clamp(60px,7vw,100px)] max-[767px]:flex-col"
      >
        <div className="w-[min(100%,460px)]">
          <div>
            <span className="text-[14px] text-[#ECE7E4] uppercase">
              prior clients
            </span>
            <p className="text-[clamp(24px,7vw,32px)] text-[#FFFFFF]">
              Happy customers.
            </p>
          </div>

          <p className="mt-[15px] text-[15px] text-[#ECE7E4]">
            Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
            Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
            ultrices, ut faucibus orci tincidunt.
          </p>
        </div>

        <div className="grid h-[290px] grid-cols-2 items-center justify-center gap-[30px+80px] max-[480px]:mt-[70px] max-[480px]:grid-cols-1 max-[480px]:gap-y-[50px]">
          {images.map(image => {
            return (
              <img
                src={image}
                alt="Изоюбржение"
                key={image}
                className="mx-auto"
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};
