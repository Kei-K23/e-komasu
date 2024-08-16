CREATE TABLE IF NOT EXISTS "available_product_colors" (
	"id" text PRIMARY KEY NOT NULL,
	"color" text NOT NULL,
	"is_available" boolean DEFAULT true,
	"product_id" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "available_product_sizes" (
	"id" text PRIMARY KEY NOT NULL,
	"size" text NOT NULL,
	"is_available" boolean DEFAULT true,
	"product_id" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"price" integer NOT NULL,
	"quantity" integer NOT NULL,
	"description" text,
	"image_url" text,
	"image_url_1" text,
	"image_url_2" text,
	"image_url_3" text,
	"brands_to_categories_id" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "brands_to_categories_groups" ADD COLUMN "id" text PRIMARY KEY NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "available_product_colors" ADD CONSTRAINT "available_product_colors_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "available_product_sizes" ADD CONSTRAINT "available_product_sizes_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_brands_to_categories_id_brands_to_categories_groups_id_fk" FOREIGN KEY ("brands_to_categories_id") REFERENCES "public"."brands_to_categories_groups"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
