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

export const QUICK_NAVIGATION_LINKS = [
  {
    name: "Privacy Policy",
    link: "/privacy&policy",
    icon: IoHomeOutline,
  },
  {
    name: "Terms Of Use",
    link: "/terms&use",
  },
  {
    name: "Categories",
    link: "/categories",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
