import { CategoryType } from "@/db/schema";
import React from "react";
import SectionHeader from "@/components/section-header";
import CategoriesSectionItem from "@/components/categories-section-item";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CategoriesSectionProps = { data: CategoryType[] };
export default function CategoriesSection({ data }: CategoriesSectionProps) {
  return (
    <section className="section-container">
      <SectionHeader title="Categories" description="Browse By Category" />
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-3">
        {data.map((category) => (
          <CategoriesSectionItem key={category.id} category={category} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <Link
          href={"/categories"}
          className={cn(
            "text-[16px] md:text-lg",
            buttonVariants({
              variant: "primary",
            })
          )}
        >
          View All Categories
        </Link>
      </div>
    </section>
  );
}
