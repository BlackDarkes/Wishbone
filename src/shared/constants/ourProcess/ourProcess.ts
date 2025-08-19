import { IOutProcess } from "@shared/types";
import Icon1 from "@assets/OutProcess/IMAGE.png";
import Icon2 from "@assets/OutProcess/Finalizing-Icon.png";
import Icon3 from "@assets/OutProcess/Building-Icon.png";

export const OUR_PROCESS_ITEMS: IOutProcess[] = [
  {
    id: 1,
    icon: Icon1.src,
    title: "Sketching",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae tempor leo iaculis."
  },
  {
    id: 2,
    icon: Icon2.src,
    title: "Finalizing",
    text: "Adipiscing elit. Nulla ut tristique libero. Nulla vitae tempor leo iaculis luctus sapien ac arcu tempor, vitae."
  },
  {
    id: 3,
    icon: Icon3.src,
    title: "Building",
    text: "Nulla ut tristique libero. Lorem ipsum ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae lorem ipsum dolor leo iaculis."
  },
]