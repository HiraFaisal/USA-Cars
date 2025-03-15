import { Search, ShoppingCart, Truck } from "lucide-react";

export const servicesData = [
  {
    id: 1,
    icon: <Search className="w-12 h-12 text-yellow-500" aria-label="Search" />,
    title: "Search",
    description:
      "Find the best products effortlessly with our advanced search system.",
  },
  {
    id: 2,
    icon: <ShoppingCart className="w-12 h-12 text-yellow-500" aria-label="Purchase" />,
    title: "Purchase",
    description:
      "A seamless purchasing experience with secure and easy transactions.",
  },
  {
    id: 3,
    icon: <Truck className="w-12 h-12 text-yellow-500" aria-label="Shipping" />,
    title: "Shipping",
    description:
      "Fast and reliable shipping options to get your products to you quickly.",
  },
];