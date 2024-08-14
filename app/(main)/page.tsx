import SectionHeader from "@/components/section-header";
import HeroBannerSwiper from "@/components/swipers/hero-banner-swiper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <div>
      <HeroBannerSwiper />
      <SectionHeader title="Categories" description="Browse By Category" />
    </div>
  );
}
