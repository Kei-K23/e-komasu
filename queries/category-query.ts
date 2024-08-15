import { db } from "@/db/drizzle";
import { categories } from "@/db/schema";

export const getAllCategories = async (limit?: number) => {
  try {
    if (limit) {
      return await db.select().from(categories).limit(limit);
    } else {
      return await db.select().from(categories);
    }
  } catch (e: any) {
    throw new Error(e);
  }
};
