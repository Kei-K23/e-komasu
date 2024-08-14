import { db } from "@/db/drizzle";
import { categories } from "@/db/schema";

export const getAllCategories = async () => {
  try {
    return await db.select().from(categories);
  } catch (e: any) {
    throw new Error(e);
  }
};
