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
import { Loader2, Search, User } from "lucide-react";
import ResponsiveNavigationSheet from "./responsive-navigation-sheet";
import { useAuth, UserButton } from "@clerk/nextjs";

export default function Header() {
  const pathname = usePathname();
  const { isLoaded, isSignedIn } = useAuth();
  return (
    <header className="flex items-center backdrop-blur border-b-[1.5px] h-16">
      <div className="flex-1 mx-auto max-w-[1600px] flex items-center justify-between px-8 gap-x-3">
        <Link href={"/"} className="flex items-center gap-2">
          <FcShop className="size-10" />
          <span className="hidden md:block text-xl font-bold">Komasu</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-x-6">
          {NAVIGATION_LINKS.map((nav) => (
            <Link
              key={nav.name}
              href={nav.link}
              className={cn(
                "text-[16px] hover:text-neutral-500 transition",
                pathname === nav.link &&
                  "underline underline-offset-4 text-neutral-500"
              )}
            >
              {nav.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <form className="hidden relative lg:flex items-center gap-3 w-[250px] border bg-neutral-200 rounded-lg">
            <IoIosSearch className="absolute text-neutral-500 size-5 top-1/2 -translate-y-1/2 left-2" />
            <input
              placeholder="What are you looking for?"
              className="border-none outline-none flex-1 w-full h-full pl-10 py-[7px] bg-neutral-200 rounded-lg focus:outline-1 focus-visible:outline-2 focus-visible:outline-neutral-500 text-[15px]"
            />
          </form>
          <Button variant={"ghost"} size={"sm"} className="block lg:hidden">
            <Search className="size-5" />
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            <BiHeart className="size-5" />
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            <RiShoppingCartLine className="size-5" />
          </Button>
          {isLoaded ? (
            isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <User className="size-5 cursor-pointer transition hover:text-red-500" />
            )
          ) : (
            <Loader2 className="size-5 animate-spin text-muted-foreground" />
          )}
          <ResponsiveNavigationSheet />
        </div>
      </div>
    </header>
  );
}
