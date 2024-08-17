import { ProductType } from "@/db/schema";
import React from "react";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductSectionItem from "@/components/product-section-item";

type ProductsSectionProps = { data: ProductType[] };
export default function ProductsSection({ data }: ProductsSectionProps) {
  return (
    <section className="section-container">
      <div className="flex items-end justify-between">
        <SectionHeader
          title="Our Products"
          description="Explore Our Products"
        />
        <Button variant={"primary"}>View All</Button>
      </div>

      <ScrollArea className="w-full mt-10">
        <div className="flex space-x-4 pb-2">
          {data.map((product) => (
            <ProductSectionItem key={product.id} product={product} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex justify-center items-center mt-8">
        <Button variant={"primary"} className="text-[16px] md:text-lg">
          View All Products
        </Button>
      </div>
    </section>
  );
}
