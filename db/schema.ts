import { InferSelectModel, relations, sql } from "drizzle-orm";
import {
  boolean,
  decimal,
  integer,
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

export const brands = pgTable("brands", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  bannerUrl: text("banner_url"),
  createdAt: timestamp("created_at").default(sql`now()`),
  updatedAt: timestamp("updated_at").default(sql`now()`),
});

export const brandsToCategoriesGroups = pgTable("brands_to_categories_groups", {
  id: text("id").primaryKey(),
  categoryId: text("category_id")
    .notNull()
    .references(() => categories.id),
  brandId: text("brand_id")
    .notNull()
    .references(() => brands.id),
});

export const brandsToCategoriesGroupsRelations = relations(
  brandsToCategoriesGroups,
  ({ many }) => ({
    products: many(products),
  })
);

export const products = pgTable("products", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  quantity: integer("quantity").notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  imageUrl1: text("image_url_1"),
  imageUrl2: text("image_url_2"),
  imageUrl3: text("image_url_3"),
  brandsToCategoriesId: text("brands_to_categories_id").references(
    () => brandsToCategoriesGroups.id
  ),
  createdAt: timestamp("created_at").default(sql`now()`),
  updatedAt: timestamp("updated_at").default(sql`now()`),
});

export const productsRelations = relations(products, ({ many, one }) => ({
  availableProductSizes: many(availableProductsSize),
  availableProductColors: many(availableProductsColor),
  brandsToCategoriesGroups: one(brandsToCategoriesGroups, {
    fields: [products.brandsToCategoriesId],
    references: [brandsToCategoriesGroups.id],
  }),
}));

export const availableProductsSize = pgTable("available_product_sizes", {
  id: text("id").primaryKey(),
  size: text("size").notNull(),
  isAvailable: boolean("is_available").default(true),
  productId: text("product_id").references(() => products.id),
});

export const availableProductsSizeRelations = relations(
  availableProductsSize,
  ({ one }) => ({
    product: one(products, {
      fields: [availableProductsSize.id],
      references: [products.id],
    }),
  })
);

export const availableProductsColor = pgTable("available_product_colors", {
  id: text("id").primaryKey(),
  color: text("color").notNull(),
  isAvailable: boolean("is_available").default(true),
  productId: text("product_id").references(() => products.id),
});

export const availableProductsColorRelations = relations(
  availableProductsColor,
  ({ one }) => ({
    product: one(products, {
      fields: [availableProductsColor.id],
      references: [products.id],
    }),
  })
);

export type CategoryType = InferSelectModel<typeof categories>;
export type BrandType = InferSelectModel<typeof brands>;
export type ProductType = InferSelectModel<typeof products>;
export type AvailableProductSizesType = InferSelectModel<
  typeof availableProductsSize
>;
export type AvailableProductColorsType = InferSelectModel<
  typeof availableProductsColor
>;
export const insertAccountSchema = createInsertSchema(accounts);
export const insertCategorySchema = createInsertSchema(categories);
export const insertBrandsToCategoriesGroupsSchema = createInsertSchema(
  brandsToCategoriesGroups
);
