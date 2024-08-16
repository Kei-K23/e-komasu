import { BrandType } from "@/db/schema";
import React from "react";
import SectionHeader from "../section-header";
import { Button } from "../ui/button";
import BrandSectionItem from "./brand-section-item";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

type BrandsSectionProps = { data: BrandType[] };
export default function BrandsSection({ data }: BrandsSectionProps) {
  return (
    <section className="section-container">
      <div className="flex items-end justify-between">
        <SectionHeader title="Brands" description="Browse By Brands" />
        <Button variant={"primary"}>View All</Button>
      </div>

      <ScrollArea className="w-full mt-10">
        <div className="flex space-x-4 pb-2">
          {data.map((brand) => (
            <BrandSectionItem key={brand.id} brand={brand} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
