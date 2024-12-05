import { IProduct } from "./product";
import { IShop } from "./shop";

export interface IOrderPayload {
  productId: string;
  quantity: number;
}

export interface IOrder {
  id: string;
  transactionId: string;
  quantity: number;
  isPaid: boolean;
  status: "PENDING" | "COMPLETED" | "CANCELLED";
  userId: string;
  shopId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
  shop: IShop;
  product: IProduct;
}
