import { BrandType } from "@/db/schema";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type BrandSectionItemProps = {
  brand: BrandType;
};
export default function BrandSectionItem({ brand }: BrandSectionItemProps) {
  return (
    <Card className="w-[290px]">
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
        <Button>View Detail</Button>
      </CardFooter>
    </Card>
  );
}
