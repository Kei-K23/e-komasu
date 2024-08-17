import CategoriesSectionItem from "@/components/categories-section-item";
import SearchProducts from "@/components/search-products";
import SectionHeader from "@/components/section-header";
import { getAllCategories } from "@/queries/category-query";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Categories",
};

export default async function CategoriesPage() {
  const categoriesData = await getAllCategories();

  return (
    <div>
      <SearchProducts />
      <section className="section-container">
        <SectionHeader title="Categories" />
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-3">
          {categoriesData.map((category) => (
            <CategoriesSectionItem key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
