import { CategoryType } from "@/db/schema";
import React from "react";
import SectionHeader from "../section-header";

type CategoriesSectionProps = { data: CategoryType[] };
export default function CategoriesSection({ data }: CategoriesSectionProps) {
  return (
    <div>
      <div>
        <SectionHeader title="Categories" description="Browse By Category" />
      </div>
      <div>
        {data.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    </div>
  );
}
