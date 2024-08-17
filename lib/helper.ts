import { IoIosPhonePortrait } from "react-icons/io";
import {
  GiConverseShoe,
  GiAmpleDress,
  GiConsoleController,
} from "react-icons/gi";
import { PiTShirt } from "react-icons/pi";
import { ImHeadphones } from "react-icons/im";
import { FaComputer } from "react-icons/fa6";
import { BsSmartwatch, BsTv } from "react-icons/bs";
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
    case "Computer":
      return FaComputer;
    case "Smart Watch":
      return IoWatchSharp;
    case "Watch":
      return BsSmartwatch;
    case "TV":
      return BsTv;
    default:
      return MdOutlineQuestionMark;
  }
};

export const isDateInPrevious7Days = (date: Date) => {
  const givenDate = new Date(date); // Convert input to Date object
  const currentDate = new Date(); // Get the current date
  const sevenDaysAgo = new Date();

  // Set sevenDaysAgo to 7 days before the current date
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  // Compare the given date with the current date and seven days ago
  return givenDate >= sevenDaysAgo && givenDate <= currentDate;
};
