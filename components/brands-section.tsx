import { BrandType } from "@/db/schema";
import React from "react";
import SectionHeader from "./section-header";
import { Button } from "@/components/ui/button";
import BrandSectionItem from "./brand-section-item";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

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
        <Button variant={"primary"} className="text-[16px] md:text-lg">
          View All Brands
        </Button>
      </div>
    </section>
  );
}
