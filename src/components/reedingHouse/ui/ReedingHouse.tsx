import { Container } from "@shared/ui";
import ReedingHouseImage from "@assets/ReedingHouse/ReedingHouse.png";

export const ReedingHouse = () => {
  return (
    <section style={{ backgroundImage: `url(${ReedingHouseImage.src})` }} className="bg-no-repeat bg-center max-[767px]:bg-left">
      <Container size="max"  className="justify-end h-[600px]">
        <div className="w-[285px]">
          <h2 className="text-[#403E3B] text-[14px]">Reeding House</h2>
          <p className="text-[#645C55]">Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.</p>
        </div>
      </Container>
    </section>
  );
};
