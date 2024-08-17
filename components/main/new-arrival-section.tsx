import { ProductType } from "@/db/schema";
import React from "react";
import SectionHeader from "../section-header";
import { Button } from "../ui/button";
import Link from "next/link";

type NewArrivalSectionProps = { data: ProductType[] };
export default function NewArrivalSection({ data }: NewArrivalSectionProps) {
  return (
    <section className="section-container">
      <div className="flex items-end justify-between">
        <SectionHeader title="Features" description="New Arrival" />
        <Button variant={"primary"}>View All</Button>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-10">
        {/* Large Image */}
        <div className="col-span-12 md:col-span-6 row-span-1 lg:row-span-2 object-cover w-full h-[330px] lg:h-[616px] border rounded-md overflow-hidden relative">
          <img
            src={data[0].imageUrl!}
            alt="PlayStation 5"
            className="w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-black/40" />
          <div className="absolute bottom-3 text-white pb-2 px-4">
            <span className="text-2xl font-bold">{data[0].name}</span>
            <p className="line-clamp-3 my-2">{data[0].description}</p>
            <Link href={"/"} className="underline">
              Shop now
            </Link>
          </div>
        </div>

        {/* Top Right Image */}
        <div className="col-span-12 md:col-span-6 object-cover w-full h-[330px] lg:h-[300px] border rounded-md overflow-hidden relative">
          <img
            src={data[1].imageUrl!}
            alt="Women's Collections"
            className="w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-black/40" />
          <div className="absolute bottom-3 text-white pb-2 px-4">
            <span className="text-2xl font-bold">{data[1].name}</span>
            <p className="line-clamp-3 my-2">{data[1].description}</p>
            <Link href={"/"} className="underline">
              Shop now
            </Link>
          </div>
        </div>

        {/* Bottom Right - First Image */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3 object-cover w-full h-[330px] lg:h-[300px] border rounded-md overflow-hidden relative">
          <img
            src={data[2].imageUrl!}
            alt="Speakers"
            className="w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-black/40" />
          <div className="absolute bottom-3 text-white pb-2 px-4">
            <span className="text-2xl font-bold">{data[2].name}</span>
            <p className="line-clamp-3 my-2">{data[2].description}</p>
            <Link href={"/"} className="underline">
              Shop now
            </Link>
          </div>
        </div>

        {/* Bottom Right - Second Image */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3 object-cover w-full h-[330px] lg:h-[300px] border rounded-md overflow-hidden relative">
          <img
            src={data[3].imageUrl!}
            alt="Perfume"
            className="w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-black/40" />
          <div className="absolute bottom-3 text-white pb-2 px-4">
            <span className="text-2xl font-bold">{data[3].name}</span>
            <p className="line-clamp-3 my-2">{data[3].description}</p>
            <Link href={"/"} className="underline">
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
