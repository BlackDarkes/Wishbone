import { Header } from "@componests/header";
import { Hero } from "@componests/hero/Index";
import { OutFirm } from "@componests/ourFirm";
import { ReedingHouse } from "@componests/reedingHouse";
import { OurProcesses } from "@componests/ourProcess"
import { TheMarbleStaircase } from "@componests/theMarbleStaircase";
import { PriorClients } from "@componests/priorClients/ui/PriorClients";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OutFirm />
      <ReedingHouse />
      <OurProcesses />
      <TheMarbleStaircase />
      <PriorClients />
    </>
  );
}
