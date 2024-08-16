import { db } from "@/db/drizzle";
import { brands } from "@/db/schema";
import { asc, isNotNull } from "drizzle-orm";

export const getAllBrands = async (limit?: number) => {
  // TODO: Check order by
  try {
    if (limit) {
      return await db
        .select()
        .from(brands)
        .limit(limit)
        .orderBy(asc(brands.createdAt));
    } else {
      return await db.select().from(brands).orderBy(asc(brands.createdAt));
    }
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getBrandBanners = async () => {
  // TODO: Check order by
  try {
    return await db
      .select({ bannerUrl: brands.bannerUrl })
      .from(brands)
      .where(isNotNull(brands.bannerUrl))
      .limit(5)
      .orderBy(asc(brands.createdAt));
  } catch (e: any) {
    throw new Error(e);
  }
};
