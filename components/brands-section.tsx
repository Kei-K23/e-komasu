import { BrandType } from "@/db/schema";
import React from "react";
import SectionHeader from "./section-header";
import { Button, buttonVariants } from "@/components/ui/button";
import BrandSectionItem from "./brand-section-item";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandsSectionProps = { data: BrandType[] };
export default function BrandsSection({ data }: BrandsSectionProps) {
  return (
    <section className="section-container">
      <SectionHeader title="Brands" description="Browse By Brands" />

      <ScrollArea className="w-full mt-10">
        <div className="flex space-x-4 pb-2">
          {data.map((brand) => (
            <BrandSectionItem key={brand.id} brand={brand} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex justify-center items-center mt-8">
        <Link
          href={"/brands"}
          className={cn(
            "text-[16px] md:text-lg",
            buttonVariants({
              variant: "primary",
            })
          )}
        >
          View All Brands
        </Link>
      </div>
    </section>
  );
}
