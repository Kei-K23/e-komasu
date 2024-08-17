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
  console.log(brandToCategoryData);

  return <div>brand id : {params.brandId}</div>;
}
