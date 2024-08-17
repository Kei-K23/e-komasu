import { BrandType } from "@/db/schema";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandSectionItemProps = {
  brand: BrandType;
};
export default function BrandSectionItem({ brand }: BrandSectionItemProps) {
  return (
    <Card className="w-[290px] mx-auto">
      <CardHeader className="p-0">
        <img
          src={brand.imageUrl!}
          alt={`${brand.name}'s image`}
          className="w-full h-[180px]"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-3">{brand.name}</h2>
        <p className="text-muted-foreground line-clamp-3">
          {brand.description}
        </p>
      </CardContent>
      <CardFooter className="p-4">
        <Link
          href={`/brands/${brand.id}`}
          className={cn(
            buttonVariants({
              variant: "default",
            })
          )}
        >
          View Detail
        </Link>
      </CardFooter>
    </Card>
  );
}
