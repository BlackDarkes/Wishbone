import { Header } from "@componests/header";
import { Hero } from "@componests/hero/Index";
import { OutFirm } from "@componests/ourFirm";
import { ReedingHouse } from "@componests/reedingHouse";
import { OurProcesses } from "@componests/ourProcess"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OutFirm />
      <ReedingHouse />
      <OurProcesses />
    </>
  );
}
