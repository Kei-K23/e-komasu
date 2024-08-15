import { db } from "@/db/drizzle";
import { brands } from "@/db/schema";

export const getAllBrands = async () => {
  try {
    return await db.select().from(brands);
  } catch (e: any) {
    throw new Error(e);
  }
};
