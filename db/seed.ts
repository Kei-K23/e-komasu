import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { categories, brands, brandsToCategoriesGroups } from "@/db/schema";
import { createId } from "@paralleldrive/cuid2";

config({ path: ".env.local" });

const sql = neon(process.env.DB_CONNECTION_URL!);
const db = drizzle(sql);

const brandId_1 = createId(); // Samsung
const brandId_2 = createId(); // Apple
const brandId_3 = createId(); // Adidas
const brandId_4 = createId(); // Nike
const categoryId_1 = createId(); // Phone
const categoryId_2 = createId(); // Shoes
const categoryId_3 = createId(); // Shirt
const categoryId_4 = createId(); // Dress
const categoryId_5 = createId(); // Headphones
const categoryId_6 = createId();
const categoryId_7 = createId();
const categoryId_8 = createId();
const categoryId_9 = createId();

const BRANDS = [
  {
    id: brandId_1,
    name: "Samsung",
    description:
      "Samsung is a technology powerhouse offering a diverse range of products, from smartphones and smart home appliances to cutting-edge TVs and semiconductor solutions. Known for its innovative designs and global reach, Samsung combines advanced technology with accessibility, creating devices that enhance everyday life and push the boundaries of innovation.",
    imageUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723558017/e-komasu-bucket/products/xxzqg3fizuqhhhnyqgzx.png",
  },
  {
    id: brandId_2,
    name: "Apple",
    description:
      "Apple is a global leader in consumer electronics and technology innovation, known for its premium-quality products that blend sleek design with cutting-edge functionality. Renowned for the iPhone, Mac, iPad, and Apple Watch, Apple emphasizes seamless user experiences across its ecosystem of devices and services, driven by a commitment to privacy, security, and sustainability.",
    imageUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723559367/e-komasu-bucket/products/a75r1imrih347zsuk7ze.png",
  },
  {
    id: brandId_3,
    name: "Adidas",
    description:
      "Adidas is a leading sportswear brand celebrated for its performance-driven products and streetwear appeal. Rooted in sports, the brand combines innovation, comfort, and style to create footwear, apparel, and accessories that inspire athletes and fashion enthusiasts alike. Adidas is committed to sustainability and improving lives through sport.",
    imageUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723559407/e-komasu-bucket/products/i7t7gvqdvltoqf3tbal1.jpg",
  },
  {
    id: brandId_4,
    name: "Nike",
    description:
      "Nike is a global icon in athletic footwear, apparel, and equipment, recognized for its powerful brand identity and dedication to performance, innovation, and style. With its famous 'Just Do It' slogan, Nike motivates athletes of all levels, blending cutting-edge technology with timeless design while championing sustainability and social responsibility.",
    imageUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723559440/e-komasu-bucket/products/waywjginflhq1ueahewi.png",
  },
];
const CATEGORIES = [
  {
    id: categoryId_1,
    name: "Phone",
  },
  {
    id: categoryId_2,
    name: "Shoe",
  },
  {
    id: categoryId_3,
    name: "Shirt",
  },
  {
    id: categoryId_4,
    name: "Dress",
  },
  {
    id: categoryId_5,
    name: "HeadPhones",
  },
  {
    id: categoryId_6,
    name: "Gaming",
  },
  {
    id: categoryId_7,
    name: "Computer",
  },
  {
    id: categoryId_8,
    name: "Smart Watch",
  },
  {
    id: categoryId_9,
    name: "Watch",
  },
];

const BRANDS_TO_CATEGORIES_GROUPS = [
  {
    categoryId: categoryId_1,
    brandId: brandId_1,
  },
  {
    categoryId: categoryId_1,
    brandId: brandId_2,
  },
  {
    categoryId: categoryId_2,
    brandId: brandId_3,
  },
  {
    categoryId: categoryId_2,
    brandId: brandId_4,
  },
];

const main = async () => {
  try {
    // Reset database
    await db.delete(brandsToCategoriesGroups).execute();
    await db.delete(categories).execute();
    await db.delete(brands).execute();
    // Seed
    await db.insert(categories).values(CATEGORIES).execute();
    await db.insert(brands).values(BRANDS).execute();
    await db
      .insert(brandsToCategoriesGroups)
      .values(BRANDS_TO_CATEGORIES_GROUPS)
      .execute();

    console.log("Successfully seeded the database");
  } catch (error) {
    console.error("Error during seed:", error);
    process.exit(1);
  }
};

main();
