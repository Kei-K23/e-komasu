import BrandsSection from "@/components/main/brands-section";
import CategoriesSection from "@/components/main/categories-section";
import BrandBannerSwiper from "@/components/swipers/brand-banner-swiper";
import HeroBannerSwiper from "@/components/swipers/hero-banner-swiper";
import { Separator } from "@/components/ui/separator";
import { getAllBrands } from "@/queries/brand-query";
import { getAllCategories } from "@/queries/category-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const categoriesData = await getAllCategories(6);
  const brandsData = await getAllBrands(6);

  return (
    <div className="mt-16">
      <HeroBannerSwiper />
      <CategoriesSection data={categoriesData} />
      <Separator className="mx-auto max-w-7xl px-8" />
      <BrandsSection data={brandsData} />
      <Separator className="mx-auto max-w-7xl px-8" />
      <BrandBannerSwiper />
    </div>
  );
}
