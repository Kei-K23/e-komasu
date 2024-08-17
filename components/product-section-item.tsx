import { ProductType } from "@/db/schema";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import { isDateInPrevious7Days } from "@/lib/helper";

type ProductSectionItemProps = {
  product: ProductType;
};
export default function ProductSectionItem({
  product,
}: ProductSectionItemProps) {
  const isNewProduct = isDateInPrevious7Days(product.createdAt!);

  return (
    <Card className="w-[290px] mx-auto">
      <CardHeader className="p-0 relative">
        {isNewProduct && (
          <Badge variant={"primary"} className="absolute rounded-l-none">
            New
          </Badge>
        )}
        <div className="absolute top-2 right-2.5 z-10 flex items-center flex-col gap-y-2">
          <Button size={"xsm"}>
            <Heart className="size-[16px]" />
          </Button>
          <Button size={"xsm"}>
            <Eye className="size-[16px]" />
          </Button>
        </div>
        <img
          src={product.imageUrl!}
          alt={`${product.name}'s image`}
          className="w-full h-[180px] p-0"
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
