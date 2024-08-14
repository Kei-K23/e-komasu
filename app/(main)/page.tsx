import HeroBannerSwiper from "@/components/swipers/hero-banner-swiper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <div>
      <HeroBannerSwiper />
    </div>
  );
}
