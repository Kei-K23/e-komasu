import { db } from "@/db/drizzle";
import { brands, brandsToCategoriesGroups, categories } from "@/db/schema";
import { desc, eq, inArray, isNotNull } from "drizzle-orm";

export const getAllBrands = async (limit?: number) => {
  // TODO: Check order by
  try {
    if (limit) {
      return await db
        .select()
        .from(brands)
        .limit(limit)
        .orderBy(desc(brands.createdAt));
    } else {
      return await db.select().from(brands).orderBy(desc(brands.createdAt));
    }
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getBrandBanners = async () => {
  try {
    return await db
      .select({ bannerUrl: brands.bannerUrl })
      .from(brands)
      .where(isNotNull(brands.bannerUrl))
      .limit(5)
      .orderBy(desc(brands.createdAt));
  } catch (e: any) {
    throw new Error(e);
  }
};

// export const getBrandDetailById = async (brandId: string) => {
//   try {
//     const [brand] = await db
//       .select()
//       .from(brands)
//       .where(eq(brands.id, brandId))
//       .orderBy(desc(brands.createdAt));

//     const brandsToCategoriesGroupsData = await db
//       .select()
//       .from(brandsToCategoriesGroups)
//       .where(eq(brandsToCategoriesGroups.brandId, brand.id));

//     // Get categories
//     const categoriesData = await db
//       .select()
//       .from(categories)
//       .where(
//         inArray(
//           categories.id,
//           brandsToCategoriesGroupsData.map((btc) => btc.categoryId)
//         )
//       );
//   } catch (e: any) {
//     throw new Error(e);
//   }
// };
