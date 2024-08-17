import { db } from "@/db/drizzle";
import {
  brands,
  brandsToCategoriesGroups,
  categories,
  products,
} from "@/db/schema";
import { and, eq } from "drizzle-orm";

export const getBrandToCategoryByCategoryId = async (brandId: string) => {
  try {
    const unNormalizeData = await db
      .select()
      .from(brandsToCategoriesGroups)
      .leftJoin(brands, eq(brands.id, brandId))
      .leftJoin(
        categories,
        eq(categories.id, brandsToCategoriesGroups.categoryId)
      )
      .leftJoin(
        products,
        eq(products.brandsToCategoriesId, brandsToCategoriesGroups.id)
      )
      .where(and(eq(brandsToCategoriesGroups.brandId, brandId)));

    // TODO: Add sorting for createdAt
    const categoriesData = [
      ...new Set(unNormalizeData.flatMap((d) => d.categories)),
    ];
    const productsData = [
      ...new Set(unNormalizeData.flatMap((d) => d.products)),
    ];

    return {
      brand: unNormalizeData[0].brands,
      categories: categoriesData,
      products: productsData,
    };
  } catch (e: any) {
    throw new Error(e);
  }
};
