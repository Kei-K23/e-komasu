import { ProductType } from "@/db/schema";
import React from "react";
import SectionHeader from "@/components/section-header";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductSectionItem from "@/components/product-section-item";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
        <Link
          href={"/products"}
          className={cn(
            "text-[16px] md:text-lg",
            buttonVariants({
              variant: "primary",
            })
          )}
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
