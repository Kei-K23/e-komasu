import BrandSectionItem from "@/components/brand-section-item";
import SearchProducts from "@/components/search-products";
import SectionHeader from "@/components/section-header";
import { getAllBrands } from "@/queries/brand-query";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Brands",
};

export default async function BrandsPage() {
  const brandsData = await getAllBrands();

  return (
    <div>
      <SearchProducts />
      <section className="section-container">
        <SectionHeader title="Brands" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brandsData.map((brand) => (
            <BrandSectionItem key={brand.id} brand={brand} />
          ))}
        </div>
      </section>
    </div>
  );
}
