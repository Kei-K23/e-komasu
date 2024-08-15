import { CategoryType } from "@/db/schema";
import React from "react";
import SectionHeader from "../section-header";
import CategoriesSectionItem from "./categories-section-item";
import { Button } from "../ui/button";

type CategoriesSectionProps = { data: CategoryType[] };
export default function CategoriesSection({ data }: CategoriesSectionProps) {
  return (
    <section className="section-container">
      <div className="flex items-end justify-between">
        <SectionHeader title="Categories" description="Browse By Category" />
        <Button variant={"primary"}>View All</Button>
      </div>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-3">
        {data.map((category) => (
          <CategoriesSectionItem key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
