"use client";
import React from "react";

import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { NAVIGATION_LINKS } from "@/constants";

export default function ResponsiveNavigationSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          size={"sm"}
          className="block lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="px-2">
        <nav className="flex flex-col gap-y-2 pt-6">
          {NAVIGATION_LINKS.map(({ link, name, icon: Icon }) => (
            <Button
              onClick={() => onClick(link)}
              key={name}
              variant={link === pathname ? "secondary" : "ghost"}
              className="w-full justify-start flex items-center gap-2"
            >
              <Icon className="size-5" />
              <span>{name}</span>
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
