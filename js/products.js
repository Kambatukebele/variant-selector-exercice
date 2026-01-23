export const products = {
  id: "prod_001",
  title: "Premium Cotton T-Shirt",
  description: "Soft, breathable cotton tee perfect for everyday wear.",

  // Different images for each color
  images: {
    black: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
    ],
    white: [
      "https://images.unsplash.com/photo-1622445275463-afa2ab738733?w=600",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600",
    ],
    navy: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600",
      "https://images.unsplash.com/photo-1503341338950-82e2e6e3c5b4?w=600",
    ],
  },

  // All possible variants (color + size combinations)
  variants: [
    // Black variants
    {
      id: "var_001",
      color: "black",
      size: "S",
      price: 29.99,
      stock: 5,
      sku: "TSH-BLK-S",
    },
    {
      id: "var_002",
      color: "black",
      size: "M",
      price: 29.99,
      stock: 10,
      sku: "TSH-BLK-M",
    },
    {
      id: "var_003",
      color: "black",
      size: "L",
      price: 29.99,
      stock: 8,
      sku: "TSH-BLK-L",
    },
    {
      id: "var_004",
      color: "black",
      size: "XL",
      price: 32.99,
      stock: 0,
      sku: "TSH-BLK-XL",
    },

    // White variants
    {
      id: "var_005",
      color: "white",
      size: "S",
      price: 29.99,
      stock: 3,
      sku: "TSH-WHT-S",
    },
    {
      id: "var_006",
      color: "white",
      size: "M",
      price: 29.99,
      stock: 12,
      sku: "TSH-WHT-M",
    },
    {
      id: "var_007",
      color: "white",
      size: "L",
      price: 29.99,
      stock: 0,
      sku: "TSH-WHT-L",
    },
    {
      id: "var_008",
      color: "white",
      size: "XL",
      price: 32.99,
      stock: 6,
      sku: "TSH-WHT-XL",
    },

    // Navy variants
    {
      id: "var_009",
      color: "navy",
      size: "S",
      price: 29.99,
      stock: 0,
      sku: "TSH-NVY-S",
    },
    {
      id: "var_010",
      color: "navy",
      size: "M",
      price: 29.99,
      stock: 15,
      sku: "TSH-NVY-M",
    },
    {
      id: "var_011",
      color: "navy",
      size: "L",
      price: 29.99,
      stock: 7,
      sku: "TSH-NVY-L",
    },
    {
      id: "var_012",
      color: "navy",
      size: "XL",
      price: 32.99,
      stock: 4,
      sku: "TSH-NVY-XL",
    },
  ],
};
