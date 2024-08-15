import { InferSelectModel, sql } from "drizzle-orm";
import {
  integer,
  numeric,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").default(sql`now()`),
  updatedAt: timestamp("updated_at").default(sql`now()`),
});

export const categories = pgTable("categories", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").default(sql`now()`),
  updatedAt: timestamp("updated_at").default(sql`now()`),
});

// export const categoriesRelations = relations(categories, ({ many }) => ({
//   brands: many(brands),
// }));

export const brands = pgTable("brands", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").default(sql`now()`),
  updatedAt: timestamp("updated_at").default(sql`now()`),
});

export const brandsToCategoriesGroups = pgTable("brands_to_categories_groups", {
  categoryId: text("category_id")
    .notNull()
    .references(() => categories.id),
  brandId: text("brand_id")
    .notNull()
    .references(() => brands.id),
});

export const products = pgTable("products", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  price: numeric("price").notNull(),
  quantity: integer("quantity").notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  imageUrl1: text("image_url_1"),
  imageUrl2: text("image_url_2"),
  imageUrl3: text("image_url_3"),
  createdAt: timestamp("created_at").default(sql`now()`),
  updatedAt: timestamp("updated_at").default(sql`now()`),
});

export const availableProducts = pgTable("available_products", {
  id: text("id").primaryKey(),
  size: text("size").notNull(),
  color: text("color").notNull(),
  productId: text("product_id").references(() => products.id),
  createdAt: timestamp("created_at").default(sql`now()`),
  updatedAt: timestamp("updated_at").default(sql`now()`),
});

// export const brandsRelations = relations(brands, ({ one }) => ({
//   category: one(brands, {
//     fields: [brands.id],
//     references: [categories.id],
//   }),
// }));
export type CategoryType = InferSelectModel<typeof categories>;
export type BrandType = InferSelectModel<typeof brands>;
export const insertAccountSchema = createInsertSchema(accounts);
export const insertCategorySchema = createInsertSchema(categories);
export const insertBrandsToCategoriesGroupsSchema = createInsertSchema(
  brandsToCategoriesGroups
);
