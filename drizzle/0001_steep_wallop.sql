CREATE TABLE IF NOT EXISTS "brands_to_categories_groups" (
	"category_id" text NOT NULL,
	"brand_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "categories" DROP CONSTRAINT "categories_brand_id_brands_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "brands_to_categories_groups" ADD CONSTRAINT "brands_to_categories_groups_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "brands_to_categories_groups" ADD CONSTRAINT "brands_to_categories_groups_brand_id_brands_id_fk" FOREIGN KEY ("brand_id") REFERENCES "public"."brands"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "brands" DROP COLUMN IF EXISTS "image_url";--> statement-breakpoint
ALTER TABLE "categories" DROP COLUMN IF EXISTS "description";--> statement-breakpoint
ALTER TABLE "categories" DROP COLUMN IF EXISTS "brand_id";