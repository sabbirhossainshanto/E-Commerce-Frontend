import { ICategories } from "./category";
import { IShop } from "./shop";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  inventory: number;
  categoryId: string;
  discount: number | null;
  shopId: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  category: ICategories;
  shop: IShop;
}
