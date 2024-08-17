import BrandsSection from "@/components/brands-section";
import CategoriesSection from "@/components/categories-section";
import NewArrivalSection from "@/components/main/new-arrival-section";
import ProductsSection from "@/components/products-section";
import BrandBannerSwiper from "@/components/swipers/brand-banner-swiper";
import HeroBannerSwiper from "@/components/swipers/hero-banner-swiper";
import { Separator } from "@/components/ui/separator";
import { getAllBrands, getBrandBanners } from "@/queries/brand-query";
import { getAllCategories } from "@/queries/category-query";
import { getAllProducts, getNewArrivalProducts } from "@/queries/product-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const categoriesData = await getAllCategories(6);
  const brandsData = await getAllBrands(6);
  const productsData = await getAllProducts({ limit: 6 });
  const brandBannersData = await getBrandBanners();
  const newArrivalProducts = await getNewArrivalProducts();

  return (
    <div className="mt-16">
      <HeroBannerSwiper />
      <CategoriesSection data={categoriesData} />
      <Separator className="mx-auto max-w-7xl px-8" />
      <BrandsSection data={brandsData} />
      <Separator className="mx-auto max-w-7xl px-8" />
      <BrandBannerSwiper brandBannersData={brandBannersData} />
      <Separator className="mx-auto max-w-7xl px-8" />
      <ProductsSection data={productsData} />
      <Separator className="mx-auto max-w-7xl px-8" />
      <NewArrivalSection data={newArrivalProducts} />
    </div>
  );
}
