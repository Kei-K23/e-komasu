import { IoIosPhonePortrait } from "react-icons/io";
import {
  GiConverseShoe,
  GiAmpleDress,
  GiConsoleController,
} from "react-icons/gi";
import { PiTShirt } from "react-icons/pi";
import { ImHeadphones } from "react-icons/im";
import { FaComputer } from "react-icons/fa6";
import { BsSmartwatch } from "react-icons/bs";
import { IoWatchSharp } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";

export const getCategoryIcon = (name: string) => {
  switch (name) {
    case "Phone":
      return IoIosPhonePortrait;
    case "Shoe":
      return GiConverseShoe;
    case "Shirt":
      return PiTShirt;
    case "Dress":
      return GiAmpleDress;
    case "HeadPhones":
      return ImHeadphones;
    case "Gaming":
      return GiConsoleController;
    case "Gaming":
      return FaComputer;
    case "Smart Watch":
      return IoWatchSharp;
    case "Watch":
      return BsSmartwatch;
    default:
      return MdOutlineQuestionMark;
  }
};
