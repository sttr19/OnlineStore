export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: Array<string>;
};
export type Products = Array<Product>;

export const products: Products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
    ],
  },
  {
    id: 3,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    images: [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
    ],
  },
  {
    id: 4,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    images: [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg",
    ],
  },
  {
    id: 5,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    rating: 4.57,
    stock: 83,
    brand: "Apple",
    category: "laptops",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
    ],
  },
  {
    id: 6,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "laptops",
    images: [
      "https://i.dummyjson.com/data/products/7/1.jpg",
      "https://i.dummyjson.com/data/products/7/2.jpg",
      "https://i.dummyjson.com/data/products/7/3.jpg",
    ],
  },
  {
    id: 7,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    images: [
      "https://i.dummyjson.com/data/products/8/1.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg",
    ],
  },
  {
    id: 8,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    images: [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.png",
      "https://i.dummyjson.com/data/products/9/3.png",
    ],
  },
  {
    id: 9,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    images: [
      "https://i.dummyjson.com/data/products/10/1.jpg",
      "https://i.dummyjson.com/data/products/10/2.jpg",
      "https://i.dummyjson.com/data/products/10/3.jpg",
    ],
  },
  {
    id: 10,
    title: "perfume Oil",
    description:
      "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    price: 13,
    rating: 4.26,
    stock: 65,
    brand: "Impression of Acqua Di Gio",
    category: "fragrances",
    images: [
      "https://i.dummyjson.com/data/products/11/1.jpg",
      "https://i.dummyjson.com/data/products/11/2.jpg",
      "https://i.dummyjson.com/data/products/11/3.jpg",
    ],
  },
  {
    id: 11,
    title: "Brown Perfume",
    description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    price: 40,
    rating: 4,
    stock: 52,
    brand: "Royal_Mirage",
    category: "fragrances",
    images: [
      "https://i.dummyjson.com/data/products/12/1.jpg",
      "https://i.dummyjson.com/data/products/12/2.jpg",
      "https://i.dummyjson.com/data/products/12/3.png",
    ],
  },
  {
    id: 12,
    title: "Fog Scent Xpressio Perfume",
    description:
      "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    price: 13,
    rating: 4.59,
    stock: 61,
    brand: "Fog Scent Xpressio",
    category: "fragrances",
    images: [
      "https://i.dummyjson.com/data/products/13/1.jpg",
      "https://i.dummyjson.com/data/products/13/2.png",
      "https://i.dummyjson.com/data/products/13/3.jpg",
    ],
  },
  {
    id: 13,
    title: "Non-Alcoholic Concentrated Perfume Oil",
    description:
      "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    price: 120,
    rating: 4.21,
    stock: 114,
    brand: "Al Munakh",
    category: "fragrances",
    images: [
      "https://i.dummyjson.com/data/products/14/1.jpg",
      "https://i.dummyjson.com/data/products/14/2.jpg",
      "https://i.dummyjson.com/data/products/14/3.jpg",
    ],
  },
  {
    id: 14,
    title: "Eau De Perfume Spray",
    description:
      "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    price: 30,
    rating: 4.7,
    stock: 105,
    brand: "Lord - Al-Rehab",
    category: "fragrances",
    images: [
      "https://i.dummyjson.com/data/products/15/1.jpg",
      "https://i.dummyjson.com/data/products/15/2.jpg",
      "https://i.dummyjson.com/data/products/15/3.jpg",
    ],
  },
  {
    id: 15,
    title: "Hyaluronic Acid Serum",
    description:
      "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: 19,
    rating: 4.83,
    stock: 110,
    brand: "L'Oreal Paris",
    category: "skincare",
    images: [
      "https://i.dummyjson.com/data/products/16/1.png",
      "https://i.dummyjson.com/data/products/16/2.webp",
      "https://i.dummyjson.com/data/products/16/3.jpg",
    ],
  },
  {
    id: 16,
    title: "Tree Oil 30ml",
    description:
      "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    price: 12,
    rating: 4.52,
    stock: 78,
    brand: "Hemani Tea",
    category: "skincare",
    images: [
      "https://i.dummyjson.com/data/products/17/1.jpg",
      "https://i.dummyjson.com/data/products/17/2.jpg",
      "https://i.dummyjson.com/data/products/17/3.jpg",
    ],
  },
  {
    id: 17,
    title: "Oil Free Moisturizer 100ml",
    description:
      "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    price: 40,
    rating: 4.56,
    stock: 88,
    brand: "Dermive",
    category: "skincare",
    images: [
      "https://i.dummyjson.com/data/products/18/1.jpg",
      "https://i.dummyjson.com/data/products/18/2.jpg",
      "https://i.dummyjson.com/data/products/18/3.jpg",
    ],
  },
  {
    id: 18,
    title: "Skin Beauty Serum.",
    description:
      "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    price: 46,
    rating: 4.42,
    stock: 54,
    brand: "ROREC White Rice",
    category: "skincare",
    images: [
      "https://i.dummyjson.com/data/products/19/1.jpg",
      "https://i.dummyjson.com/data/products/19/2.jpg",
      "https://i.dummyjson.com/data/products/19/3.png",
    ],
  },
  {
    id: 19,
    title: "Freckle Treatment Cream- 15gm",
    description:
      "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    price: 70,
    rating: 4.06,
    stock: 140,
    brand: "Fair & Clear",
    category: "skincare",
    images: [
      "https://i.dummyjson.com/data/products/20/1.jpg",
      "https://i.dummyjson.com/data/products/20/2.jpg",
      "https://i.dummyjson.com/data/products/20/3.jpg",
    ],
  },
  {
    id: 20,
    title: "- Daal Masoor 500 grams",
    description: "Fine quality Branded Product Keep in a cool and dry place",
    price: 20,
    rating: 4.44,
    stock: 133,
    brand: "Saaf & Khaas",
    category: "groceries",
    images: [
      "https://i.dummyjson.com/data/products/21/1.png",
      "https://i.dummyjson.com/data/products/21/2.jpg",
      "https://i.dummyjson.com/data/products/21/3.jpg",
    ],
  },
  {
    id: 21,
    title: "Elbow Macaroni - 400 gm",
    description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    price: 14,
    rating: 4.57,
    stock: 146,
    brand: "Bake Parlor Big",
    category: "groceries",
    images: [
      "https://i.dummyjson.com/data/products/22/1.jpg",
      "https://i.dummyjson.com/data/products/22/2.jpg",
      "https://i.dummyjson.com/data/products/22/3.jpg",
    ],
  },
  {
    id: 22,
    title: "Orange Essence Food Flavou",
    description:
      "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    price: 14,
    rating: 4.85,
    stock: 26,
    brand: "Baking Food Items",
    category: "groceries",
    images: [
      "https://i.dummyjson.com/data/products/23/1.jpg",
      "https://i.dummyjson.com/data/products/23/2.jpg",
      "https://i.dummyjson.com/data/products/23/3.jpg",
    ],
  },
  {
    id: 23,
    title: "cereals muesli fruit nuts",
    description:
      "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    price: 46,
    rating: 4.94,
    stock: 113,
    brand: "fauji",
    category: "groceries",
    images: [
      "https://i.dummyjson.com/data/products/24/1.jpg",
      "https://i.dummyjson.com/data/products/24/2.jpg",
      "https://i.dummyjson.com/data/products/24/3.jpg",
    ],
  },
  {
    id: 24,
    title: "Gulab Powder 50 Gram",
    description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    price: 70,
    rating: 4.87,
    stock: 47,
    brand: "Dry Rose",
    category: "groceries",
    images: [
      "https://i.dummyjson.com/data/products/25/1.png",
      "https://i.dummyjson.com/data/products/25/2.jpg",
      "https://i.dummyjson.com/data/products/25/3.png",
    ],
  },
  {
    id: 25,
    title: "Plant Hanger For Home",
    description:
      "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    price: 41,
    rating: 4.08,
    stock: 131,
    brand: "Boho Decor",
    category: "home-decoration",
    images: [
      "https://i.dummyjson.com/data/products/26/1.jpg",
      "https://i.dummyjson.com/data/products/26/2.jpg",
      "https://i.dummyjson.com/data/products/26/3.jpg",
    ],
  },
];