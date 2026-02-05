const products = {
  id: "prod_001",
  title: "Premium Cotton T-Shirt",
  description: "Soft, breathable cotton tee perfect for everyday wear.",

  // Different images for each color
  images: {
    black: [
      "https://plus.unsplash.com/premium_photo-1690820318506-56b73fa69f5d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
    ],
    white: [
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdoaXRlJTIwdC1zaGlydHxlbnwwfHwwfHx8MA%3D%3D?w=600",
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdoaXRlJTIwdC1zaGlydHxlbnwwfHwwfHx8MA%3D%3D?w=600",
    ],
    navy: [
      "https://images.unsplash.com/photo-1758267928064-f159a683385d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsdWUlMjB0LXNoaXJ0fGVufDB8fDB8fHww?w=600",
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZSUyMHQtc2hpcnR8ZW58MHx8MHx8fDA%3D?w=600",
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
      price: 39.99,
      stock: 10,
      sku: "TSH-BLK-M",
    },
    {
      id: "var_003",
      color: "black",
      size: "L",
      price: 49.99,
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
      price: 19.99,
      stock: 3,
      sku: "TSH-WHT-S",
    },
    {
      id: "var_006",
      color: "white",
      size: "M",
      price: 69.99,
      stock: 12,
      sku: "TSH-WHT-M",
    },
    {
      id: "var_007",
      color: "white",
      size: "L",
      price: 99.99,
      stock: 0,
      sku: "TSH-WHT-L",
    },
    {
      id: "var_008",
      color: "white",
      size: "XL",
      price: 31.99,
      stock: 6,
      sku: "TSH-WHT-XL",
    },

    // Navy variants
    {
      id: "var_009",
      color: "navy",
      size: "S",
      price: 9.99,
      stock: 0,
      sku: "TSH-NVY-S",
    },
    {
      id: "var_010",
      color: "navy",
      size: "M",
      price: 129.99,
      stock: 15,
      sku: "TSH-NVY-M",
    },
    {
      id: "var_011",
      color: "navy",
      size: "L",
      price: 139.99,
      stock: 7,
      sku: "TSH-NVY-L",
    },
    {
      id: "var_012",
      color: "navy",
      size: "XL",
      price: 132.99,
      stock: 4,
      sku: "TSH-NVY-XL",
    },
  ],
};

export default products;
