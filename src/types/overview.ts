export interface IOverview {
  totalUser: number;
  activeUser: number;
  blockedUser: number;
  totalShop: number;
  activeShop: number;
  blockedShop: number;
  totalOrder: number;
  monthlyStats: {
    month: string;
    orderCount: number;
    totalMoney: number;
    totalUsers: number;
    totalVendors: number;
  }[];
}
