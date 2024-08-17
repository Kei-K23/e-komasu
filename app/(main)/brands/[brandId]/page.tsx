import BrandDetailHeader from "@/components/brand/brand-detail-header";
import CategoriesSectionItem from "@/components/categories-section-item";
import ProductSectionItem from "@/components/product-section-item";
import SectionHeader from "@/components/section-header";
import { Separator } from "@/components/ui/separator";
import { getBrandToCategoryByCategoryId } from "@/queries/brand-to-category-query";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Brands",
};

export default async function BrandIdPage({
  params,
}: {
  params: {
    brandId: string;
  };
}) {
  const brandToCategoryData = await getBrandToCategoryByCategoryId(
    params.brandId
  );
  return (
    <div className="section-container">
      <BrandDetailHeader brand={brandToCategoryData.brand!} />
      <section className="py-20 md:py-24">
        <SectionHeader
          title="Our Categories"
          description={`${brandToCategoryData.brand?.name} product's categories`}
        />
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-3">
          {brandToCategoryData?.categories?.map((category) => (
            <CategoriesSectionItem key={category?.id} category={category!} />
          ))}
        </div>
      </section>
      <Separator className="mx-auto max-w-7xl px-8" />
      <section className="py-20 md:py-24">
        <SectionHeader
          title="Our Products"
          description={`${brandToCategoryData?.brand?.name}'s products`}
        />
        {/* {brandToCategoryData?.products?.length ? ( */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brandToCategoryData?.products?.map((product) => (
            <ProductSectionItem key={product?.id} product={product!} />
          ))}
        </div>
        {/* ) : (
          <p className="mt-10 text-lg md:text-xl">
            No product found with the name &quot;
            <span className="font-bold">{productName}</span>
            &quot;
          </p>
        )} */}
      </section>
    </div>
  );
}
