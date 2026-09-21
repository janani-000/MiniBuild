import colabImage from "@/assets/workspaces/colab.jpg";
import focusHubImage from "@/assets/workspaces/focushub.jpg";
import hiveImage from "@/assets/workspaces/hive.jpg";
import urbanDeskImage from "@/assets/workspaces/urban-desk.jpg";
import workNestImage from "@/assets/workspaces/worknest.jpg";

export type Workspace = {
  id: string;
  name: string;
  location: string;
  price: string;
  cadence: string;
  image: string;
  alt: string;
};

// Hardcoded, frontend-only records. No backend, no API, no database.
export const workspaces: Workspace[] = [
  {
    id: "the-hive-workspace",
    name: "The Hive Workspace",
    location: "Anna Nagar, Chennai",
    price: "₹6,500",
    cadence: "/ month",
    image: hiveImage,
    alt: "Sunlit coworking floor at The Hive Workspace with a long wooden communal table and potted plants",
  },
  {
    id: "urban-desk",
    name: "Urban Desk",
    location: "T. Nagar, Chennai",
    price: "₹8,000",
    cadence: "/ month",
    image: urbanDeskImage,
    alt: "Row of desks with monitors along tall windows at Urban Desk, overlooking the city",
  },
  {
    id: "worknest-studio",
    name: "WorkNest Studio",
    location: "Velachery, Chennai",
    price: "₹5,500",
    cadence: "/ month",
    image: workNestImage,
    alt: "Small private studio office at WorkNest Studio with a walnut desk and a window with sheer curtains",
  },
  {
    id: "colab-spaces",
    name: "CoLab Spaces",
    location: "Adyar, Chennai",
    price: "₹7,200",
    cadence: "/ month",
    image: colabImage,
    alt: "Collaborative lounge at CoLab Spaces with a sofa, armchairs, coffee table and a whiteboard",
  },
  {
    id: "focus-hub",
    name: "Focus Hub",
    location: "OMR, Chennai",
    price: "₹4,999",
    cadence: "/ month",
    image: focusHubImage,
    alt: "Quiet felt-lined focus booth with a single desk and task lamp at Focus Hub",
  },
];
