import { NAVIGATION_LINKS, QUICK_NAVIGATION_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";
import { FcShop } from "react-icons/fc";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="section-container flex flex-col lg:flex-row gap-y-8 items-start justify-between">
        <div>
          <Link href={"/"} className="flex items-center gap-2 mb-2">
            <FcShop className="size-10" />
            <span className="text-xl font-bold">Komasu</span>
          </Link>
          <p>Find all you wants in one place</p>
          <div className="mt-3">
            <p className="flex items-center gap-2 text-wrap">
              <MdLocationPin className="min-w-5 min-h-5" /> No. 116, Myintawtar
              Street, Thaeketa, Yangon
            </p>
            <p className="flex items-center gap-2">
              <MdEmail className="size-5" /> info@ekomasu.com
            </p>
            <p className="flex items-center gap-2">
              <MdPhone className="size-5" /> +95-9786300540
            </p>
          </div>
        </div>
        <nav className="flex flex-col">
          <span className="text-lg mb-3">Account</span>
          <ul className="flex flex-col gap-y-2">
            {NAVIGATION_LINKS.map((n) => (
              <Link
                key={n.name}
                href={n.link}
                className="hover:text-white/80 transition"
              >
                {n.name}
              </Link>
            ))}
          </ul>
        </nav>
        <nav className="flex flex-col">
          <span className="text-lg mb-3">Quick link</span>
          <ul className="flex flex-col gap-y-2">
            {QUICK_NAVIGATION_LINKS.map((n) => (
              <Link
                key={n.name}
                href={n.link}
                className="hover:text-white/80 transition"
              >
                {n.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <p></p>
    </footer>
  );
}
