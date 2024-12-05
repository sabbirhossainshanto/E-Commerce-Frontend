import { IUser } from "./global";
import { IProduct } from "./product";

export interface IShop {
  id: string;
  shopName: string;
  shopLogo?: string;
  shopDetails?: string;
  userId: string;
  user: IUser;
  status: "ACTIVE" | "BLOCKED";
  createdAt: string;
  updatedAt: string;
  products: IProduct[];
}

export interface IUpdateShopStatus {
  status: "ACTIVE" | "BLOCKED";
  shopId: string;
}
