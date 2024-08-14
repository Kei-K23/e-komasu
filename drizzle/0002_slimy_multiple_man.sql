ALTER TABLE "brands" ADD COLUMN "image_url" text;--> statement-breakpoint
ALTER TABLE "categories" DROP COLUMN IF EXISTS "image_url";