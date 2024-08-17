import { BrandType } from "@/db/schema";
import React from "react";

type BrandDetailHeaderProps = {
  brand: BrandType;
};

export default function BrandDetailHeader({ brand }: BrandDetailHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-8 justify-between items-start">
      <img
        src={brand.imageUrl!}
        alt={`${brand.name}'s logo image`}
        className="w-[280px] h-[200px]"
      />
      <div>
        <h3 className="text-2xl md:text-4xl font-bold mb-3">{brand.name}</h3>
        <p className="text-lg md:text-xl text-muted-foreground">
          {brand.description}
        </p>
      </div>
    </div>
  );
}
