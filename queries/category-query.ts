import { db } from "@/db/drizzle";
import { categories } from "@/db/schema";
import { desc } from "drizzle-orm";

export const getAllCategories = async (limit?: number) => {
  try {
    if (limit) {
      return await db
        .select()
        .from(categories)
        .limit(limit)
        .orderBy(desc(categories.createdAt));
    } else {
      return await db
        .select()
        .from(categories)
        .orderBy(desc(categories.createdAt));
    }
  } catch (e: any) {
    throw new Error(e);
  }
};
