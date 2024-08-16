import { db } from "@/db/drizzle";
import { products } from "@/db/schema";

export const getAllProducts = async (limit?: number) => {
  try {
    if (limit) {
      return await db.select().from(products).limit(limit);
    } else {
      return await db.select().from(products);
    }
  } catch (e: any) {
    throw new Error(e);
  }
};
