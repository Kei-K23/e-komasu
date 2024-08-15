import CategoriesSection from "@/components/main/categories-section";
import HeroBannerSwiper from "@/components/swipers/hero-banner-swiper";
import { getAllBrands } from "@/queries/brand-query";
import { getAllCategories } from "@/queries/category-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const categoriesData = await getAllCategories();
  const brandsData = await getAllBrands();

  return (
    <div className="mt-16">
      <HeroBannerSwiper />
      <CategoriesSection data={categoriesData} />
    </div>
  );
}
