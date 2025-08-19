import { IFeedback } from "@shared/types/Feedback/feedback.interface";
import ImageAvatar1 from "@assets/Avatars/avatar1.png";
import ImageAvatar2 from "@assets/Avatars/avatar2.png";
import ImageAvatar3 from "@assets/Avatars/avatar3.png";
import ImageAvatar4 from "@assets/Avatars/avatar4.png";
import ImageAvatar5 from "@assets/Avatars/avatar5.png";

export const FEEDBACKS_ITEMS: IFeedback[] = [
  {
    avatar: ImageAvatar1.src,
    name: "Stephen Collier",
    post: "Senior Partner"
  },
  {
    avatar: ImageAvatar2.src,
    name: "Nolan Peters",
    post: "Associate"
  },
  {
    avatar: ImageAvatar3.src,
    name: "Ferris Wonder",
    post: "Associate Partner"
  },
  {
    avatar: ImageAvatar4.src,
    name: "Aria Stone",
    post: "Senior Partner"
  },
  {
    avatar: ImageAvatar5.src,
    name: "Niko Ferry",
    post: "Partner"
  },
]