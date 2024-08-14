import { IoHomeOutline, IoShirtOutline, IoPeopleSharp } from "react-icons/io5";
import { SiBookalope } from "react-icons/si";
import { BiCategory } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  {
    name: "Home",
    link: "/",
    icon: IoHomeOutline,
  },
  {
    name: "Brands",
    link: "/brands",
    icon: SiBookalope,
  },
  {
    name: "Categories",
    link: "/categories",
    icon: BiCategory,
  },
  {
    name: "Products",
    link: "/products",
    icon: IoShirtOutline,
  },
  {
    name: "About",
    link: "/about",
    icon: IoPeopleSharp,
  },
];
