import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import {
  categories,
  brands,
  brandsToCategoriesGroups,
  products,
  availableProductsColor,
  availableProductsSize,
} from "@/db/schema";
import { createId } from "@paralleldrive/cuid2";

config({ path: ".env.local" });

const sql = neon(process.env.DB_CONNECTION_URL!);
const db = drizzle(sql);

const brandId_1 = createId(); // Samsung
const brandId_2 = createId(); // Apple
const brandId_3 = createId(); // Adidas
const brandId_4 = createId(); // Nike
const brandId_5 = createId();
const brandId_6 = createId();
const categoryId_1 = createId(); // Phone
const categoryId_2 = createId(); // Shoes
const categoryId_3 = createId(); // Shirt
const categoryId_4 = createId(); // Dress
const categoryId_5 = createId(); // Headphones
const categoryId_6 = createId();
const categoryId_7 = createId();
const categoryId_8 = createId();
const categoryId_9 = createId();
const brandsToCategoriesId_1 = createId();
const brandsToCategoriesId_2 = createId();
const brandsToCategoriesId_3 = createId();
const brandsToCategoriesId_4 = createId();
const brandsToCategoriesId_5 = createId();
const brandsToCategoriesId_6 = createId();
const productId_1 = createId();
const productId_2 = createId();

const BRANDS = [
  {
    id: brandId_1,
    name: "Samsung",
    description:
      "Samsung is a technology powerhouse offering a diverse range of products, from smartphones and smart home appliances to cutting-edge TVs and semiconductor solutions. Known for its innovative designs and global reach, Samsung combines advanced technology with accessibility, creating devices that enhance everyday life and push the boundaries of innovation.",
    imageUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723702596/e-komasu-bucket/brands/gomrdwq88fbl6luau8kh.png",
  },
  {
    id: brandId_2,
    name: "Apple",
    description:
      "Apple is a global leader in consumer electronics and technology innovation, known for its premium-quality products that blend sleek design with cutting-edge functionality. Renowned for the iPhone, Mac, iPad, and Apple Watch, Apple emphasizes seamless user experiences across its ecosystem of devices and services, driven by a commitment to privacy, security, and sustainability.",
    imageUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723702541/e-komasu-bucket/brands/jssgznf5a0e8jxel6ona.png",
    bannerUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723785126/e-komasu-bucket/brands/xhq0aidfdtfh5j3yvmxm.png",
  },
  {
    id: brandId_3,
    name: "Adidas",
    description:
      "Adidas is a leading sportswear brand celebrated for its performance-driven products and streetwear appeal. Rooted in sports, the brand combines innovation, comfort, and style to create footwear, apparel, and accessories that inspire athletes and fashion enthusiasts alike. Adidas is committed to sustainability and improving lives through sport.",
    imageUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723702541/e-komasu-bucket/brands/bfw3zb0ueyawtjuvyq7u.jpg",
    bannerUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723785388/e-komasu-bucket/brands/kermmqmzbfoejoqxwxee.png",
  },
  {
    id: brandId_4,
    name: "Nike",
    description:
      "Nike is a global icon in athletic footwear, apparel, and equipment, recognized for its powerful brand identity and dedication to performance, innovation, and style. With its famous 'Just Do It' slogan, Nike motivates athletes of all levels, blending cutting-edge technology with timeless design while championing sustainability and social responsibility.",
    imageUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723702595/e-komasu-bucket/brands/c2oszozgajnygiunhyom.png",
    bannerUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723785483/e-komasu-bucket/brands/afwe2ev2ovioghiy8m3y.jpg",
  },
  {
    id: brandId_5,
    name: "Sony",
    description:
      "Sony is a global leader in entertainment and technology, known for its innovation in electronics, gaming, music, and film. With products ranging from cutting-edge televisions, cameras, and audio equipment to the world-renowned PlayStation gaming console, Sony blends creativity with advanced technology to deliver immersive experiences that inspire and connect people around the world.",
    imageUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723704309/e-komasu-bucket/brands/rtttoxz1i7rzuttrerpk.png",
  },
  {
    id: brandId_6,
    name: "Louis Vuitton (LV)",
    description:
      "Louis Vuitton is a luxury fashion house synonymous with elegance, craftsmanship, and timeless style. Known for its iconic monogrammed leather goods, the brand offers a wide range of high-end products, including handbags, ready-to-wear, shoes, accessories, and more. Louis Vuitton embodies sophistication and exclusivity, making it a symbol of prestige and unparalleled quality in the world of fashion.",
    imageUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723704000/e-komasu-bucket/brands/egos1ut24dmog2ny8chp.png",
    bannerUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723785386/e-komasu-bucket/brands/znj4xx80e091zxeysyll.jpg",
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
    id: brandsToCategoriesId_1,
    categoryId: categoryId_1,
    brandId: brandId_1,
  },
  {
    id: brandsToCategoriesId_2,
    categoryId: categoryId_1,
    brandId: brandId_2,
  },
  {
    id: brandsToCategoriesId_3,
    categoryId: categoryId_2,
    brandId: brandId_3,
  },
  {
    id: brandsToCategoriesId_4,
    categoryId: categoryId_2,
    brandId: brandId_4,
  },
  {
    id: brandsToCategoriesId_5,
    categoryId: categoryId_1,
    brandId: brandId_5,
  },
  {
    id: brandsToCategoriesId_6,
    categoryId: categoryId_3,
    brandId: brandId_6,
  },
];

const PRODUCTS = [
  {
    id: productId_1,
    name: "IPhone-15",
    description: `The iPhone 15 is the latest innovation from Apple, combining sleek design with powerful performance. Featuring a stunning 6.1-inch Super Retina XDR display, the iPhone 15 offers vibrant colors and deep contrasts for an immersive visual experience. Powered by the A16 Bionic chip, it delivers lightning-fast performance and advanced machine learning capabilities for seamless multitasking, gaming, and more.

With a refined camera system, the iPhone 15 captures stunning photos and videos in any lighting condition. The enhanced Night Mode, ProRAW, and Cinematic Mode ensure every shot is professional-grade. The iPhone 15 also introduces even faster 5G connectivity and improved battery life, keeping you connected and productive all day long.

Designed with sustainability in mind, the iPhone 15 is made from recycled materials, contributing to Apple’s ongoing environmental efforts. Available in a range of vibrant colors, the iPhone 15 offers the perfect blend of style, technology, and eco-consciousness.
`,
    price: 1311,
    quantity: 20,
    brandsToCategoriesId: brandsToCategoriesId_2,
    imageUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723707919/e-komasu-bucket/products/xtcdlljpoo6jfbnrb6el.png",
  },
  {
    id: productId_2,
    name: "Nike Dunk High",
    description: `The Nike Dunk High shoes are a timeless classic that combine retro style with modern performance. Inspired by the iconic basketball silhouette from the '80s, these high-top sneakers offer bold style and all-day comfort. Crafted with premium leather and textile uppers, the Nike Dunk High delivers a durable fit and a sleek finish that stands out on and off the court.

Designed for both streetwear and sports, the Nike Dunk High features a padded collar and cushioned midsole for superior support and comfort. The rubber outsole with a classic pivot circle provides excellent traction, whether you're making moves on the court or stepping out in style.

Available in a variety of eye-catching colorways, the Nike Dunk High shoes let you express your personality while enjoying the perfect blend of heritage design and contemporary fashion. Elevate your sneaker game with the Nike Dunk High, the ultimate fusion of athletic performance and iconic style.
`,
    price: 199,
    quantity: 20,
    imageUrl:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723707903/e-komasu-bucket/products/sndnpgyffdbsuohlndnf.png",
    imageUrl1:
      "https://res.cloudinary.com/dfozzq8m5/image/upload/v1723707902/e-komasu-bucket/products/chcilxfspl5s5hr5d2md.png",
    brandsToCategoriesId: brandsToCategoriesId_4,
  },
];

const AVAILABLE_PRODUCTS_SIZES = [
  {
    id: createId(),
    size: '6.1"',
    productId: productId_1,
  },
  {
    id: createId(),
    size: '6.7"',
    productId: productId_1,
  },
  {
    id: createId(),
    size: "US 7",
    productId: productId_2,
  },
  {
    id: createId(),
    size: "US 7.5",
    productId: productId_2,
  },
  {
    id: createId(),
    size: "US 8",
    productId: productId_2,
  },
  {
    id: createId(),
    size: "US 8.5",
    productId: productId_2,
  },
  {
    id: createId(),
    size: "US 9",
    productId: productId_2,
  },
  {
    id: createId(),
    size: "US 9.5",
    productId: productId_2,
  },
  {
    id: createId(),
    size: "US 10",
    productId: productId_2,
  },
  {
    id: createId(),
    size: "US 10.5",
    productId: productId_2,
  },
  {
    id: createId(),
    size: "US 11",
    productId: productId_2,
  },
  {
    id: createId(),
    size: "US 11.5",
    productId: productId_2,
  },
  {
    id: createId(),
    size: "US 12",
    productId: productId_2,
  },
  {
    id: createId(),
    size: "US 12.5",
    productId: productId_2,
  },
  {
    id: createId(),
    size: "US 13",
    productId: productId_2,
  },
  {
    id: createId(),
    size: "US 13.5",
    productId: productId_2,
  },
];

const AVAILABLE_PRODUCTS_COLORS = [
  {
    id: createId(),
    color: "#EED4D7",
    productId: productId_1,
  },
  {
    id: createId(),
    color: "#EBE6C7",
    productId: productId_1,
  },
  {
    id: createId(),
    color: "#C6D3C4",
    productId: productId_1,
  },
  {
    id: createId(),
    color: "#D1D9DD",
    productId: productId_1,
  },
  {
    id: createId(),
    color: "#494A4B",
    productId: productId_1,
  },
  {
    id: createId(),
    color: "#151518",
    productId: productId_2,
  },
  {
    id: createId(),
    color: "#1E5B42",
    productId: productId_2,
  },
];

const main = async () => {
  try {
    // Reset database
    await db.delete(availableProductsColor).execute();
    await db.delete(availableProductsSize).execute();
    await db.delete(products).execute();
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
    await db.insert(products).values(PRODUCTS).execute();
    await db
      .insert(availableProductsColor)
      .values(AVAILABLE_PRODUCTS_COLORS)
      .execute();
    await db
      .insert(availableProductsSize)
      .values(AVAILABLE_PRODUCTS_SIZES)
      .execute();

    console.log("Successfully seeded the database");
  } catch (error) {
    console.error("Error during seed:", error);
    process.exit(1);
  }
};

main();
