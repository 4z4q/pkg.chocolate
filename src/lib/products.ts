// PKG Chocolate — flavours catalogue
// Developer: replace with all 50–60 real flavours and real image paths.
// Each entry only needs { id, name, image }.

export type Product = {
  id: number;
  name: string;
  image: string;
};

export const products: Product[] = [
  { id: 1, name: "شوكولاتة بالهيل", image: "/products/kunafa-bar.jpg" },
  { id: 2, name: "شوكولاتة بالتوت", image: "/products/cardamom-pralines.jpg" },
  { id: 3, name: "شوكولاتة بالقهوة", image: "/products/truffles.jpg" },
  { id: 4, name: "شوكولاتة بالفستق", image: "/products/seasonal.jpg" },
  { id: 5, name: "شوكولاتة بالورد", image: "/products/seasonal.jpg" },
  { id: 6, name: "شوكولاتة بالتمر", image: "/products/rose-pistachio.jpg" },
];
