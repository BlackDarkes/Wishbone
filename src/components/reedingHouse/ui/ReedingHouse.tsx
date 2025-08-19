import { Container, ContainerImage } from "@shared/ui";
import ReedingHouseImage from "@assets/ReedingHouse/ReedingHouse.png";

export const ReedingHouse = () => {
  return (
    <ContainerImage image={ReedingHouseImage.src} position="right" title="Reeding House" text="Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet." />
  );
};
