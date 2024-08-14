"use client";

import { NAVIGATION_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FcShop } from "react-icons/fc";
import { Button } from "./ui/button";
import { BiHeart } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="backdrop-blur border-b-[1.5px]">
      <div className="mx-auto max-w-[1600px] flex items-center justify-between py-4 px-8">
        <Link href={"/"} className="flex items-center gap-2">
          <FcShop className="size-12" />
          <span className="text-xl font-bold">Komasu</span>
        </Link>
        <nav className="flex items-center gap-x-6">
          {NAVIGATION_LINKS.map((nav) => (
            <Link
              key={nav.name}
              href={nav.link}
              className={cn(
                "text-lg hover:text-neutral-500 transition",
                pathname === nav.link &&
                  "underline underline-offset-4 text-neutral-500"
              )}
            >
              {nav.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <form className="relative flex items-center gap-3 w-[280px] border bg-neutral-200 rounded-lg">
            <IoIosSearch className="absolute text-neutral-500 size-6 top-1/2 -translate-y-1/2 left-2" />
            <input
              placeholder="What are you looking for?"
              className="border-none outline-none flex-1 w-full h-full pl-10 py-3 bg-neutral-200 rounded-lg focus:outline-1 focus-visible:outline-2 focus-visible:outline-neutral-500"
            />
          </form>
          <Button variant={"ghost"} size={"sm"}>
            <BiHeart className="size-7" />
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            <RiShoppingCartLine className="size-7" />
          </Button>
        </div>
      </div>
    </header>
  );
}
