import CategoriesSection from "@/components/main/categories-section";
import SectionHeader from "@/components/section-header";
import HeroBannerSwiper from "@/components/swipers/hero-banner-swiper";
import { getAllCategories } from "@/queries/category-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const categoriesData = await getAllCategories();

  return (
    <div>
      <HeroBannerSwiper />
      <CategoriesSection data={categoriesData} />
    </div>
  );
}
