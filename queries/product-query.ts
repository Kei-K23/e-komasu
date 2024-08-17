import { db } from "@/db/drizzle";
import { products } from "@/db/schema";
import { desc, ilike } from "drizzle-orm";

export const getAllProducts = async ({
  limit,
  productName,
}: {
  limit?: number;
  productName?: string | undefined;
}) => {
  try {
    if (limit) {
      return await db
        .select()
        .from(products)
        .limit(limit)
        .orderBy(desc(products.createdAt));
    } else if (productName) {
      return await db
        .select()
        .from(products)
        .where(ilike(products.name, `%${productName}%`))
        .orderBy(desc(products.createdAt));
    } else {
      return await db.select().from(products).orderBy(desc(products.createdAt));
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
      .orderBy(desc(products.createdAt));
  } catch (e: any) {
    throw new Error(e);
  }
};
