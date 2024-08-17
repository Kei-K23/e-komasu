import ProductSectionItem from "@/components/product-section-item";
import SearchProducts from "@/components/search-products";
import SectionHeader from "@/components/section-header";
import { getAllProducts } from "@/queries/product-query";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Products",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const productName = searchParams?.product_name?.toString();
  const productsData = await getAllProducts({ productName });

  return (
    <div>
      <SearchProducts />
      {productName && (
        <p className="text-center mt-3 text-muted-foreground text-[14px]">
          Search result : {productsData.length}
        </p>
      )}
      <section className="section-container">
        <SectionHeader title="Products" />
        {productsData.length ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsData.map((product) => (
              <ProductSectionItem key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-lg md:text-xl">
            No product found with the name &quot;
            <span className="font-bold">{productName}</span>
            &quot;
          </p>
        )}
      </section>
    </div>
  );
}
