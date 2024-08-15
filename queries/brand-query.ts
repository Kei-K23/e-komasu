import { db } from "@/db/drizzle";
import { brands } from "@/db/schema";
import { asc } from "drizzle-orm";

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
