import { db } from "@/db/drizzle";
import { products } from "@/db/schema";
import { asc } from "drizzle-orm";

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

export const getNewArrivalProducts = async () => {
  try {
    return await db
      .select()
      .from(products)
      .limit(4)
      .orderBy(asc(products.createdAt));
  } catch (e: any) {
    throw new Error(e);
  }
};
