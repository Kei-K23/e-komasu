import { ProductType } from "@/db/schema";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

type ProductSectionItemProps = {
  product: ProductType;
};
export default function ProductSectionItem({
  product,
}: ProductSectionItemProps) {
  return (
    <Card className="w-[290px]">
      <CardHeader className="p-0">
        <img
          src={product.imageUrl!}
          alt={`${product.name}'s image`}
          className="w-full h-[180px]"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-3">{product.name}</h2>
        <div className="my-2">
          <span className="text-rose-500 font-bold">$ {product.price}</span>
        </div>
        <p className="text-muted-foreground line-clamp-3">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="flex items-center gap-2">
          <span>Add to cart</span>
          <ShoppingCart className="size-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
