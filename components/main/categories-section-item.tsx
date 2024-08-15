import { CategoryType } from "@/db/schema";
import { getCategoryIcon } from "@/lib/helper";
import React from "react";

type CategoriesSectionItemProps = {
  category: CategoryType;
};
export default function CategoriesSectionItem({
  category,
}: CategoriesSectionItemProps) {
  const Icon = getCategoryIcon(category.name);
  return (
    <div className="border flex items-center justify-center flex-col rounded-lg p-4 hover:bg-rose-600 hover:text-white transition">
      <Icon className="size-12" />
      <span className="text-lg mt-2">{category.name}</span>
    </div>
  );
}
