import { AiFillProduct } from "react-icons/ai";
import { FaFirstOrder, FaShoppingBag } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";

export const vendorNavlist = [
  {
    key: "Dashboard",
    icon: MdDashboard,
    children: [
      {
        path: "/vendor",
        text: "Dashboard",
      },
      {
        path: "/vendor/manage-profile",
        text: "Manage Profile",
      },
    ],
  },
  {
    key: "Shop",
    icon: FaShoppingBag,
    children: [
      {
        path: "/vendor/manage-shop",
        text: "Manage Shop",
      },
    ],
  },
  {
    key: "Product",
    icon: AiFillProduct,
    children: [
      {
        path: "/vendor/manage-product",
        text: "Manage Product",
      },
      {
        path: "/vendor/manage-flash-sale",
        text: "Manage Flash Sale",
      },
    ],
  },
  {
    key: "Order",
    icon: FaFirstOrder,
    children: [
      {
        path: "/vendor/order-history",
        text: "Order History",
      },
    ],
  },
  {
    key: "Follower",
    icon: SlUserFollowing,
    children: [
      {
        path: "/vendor/followers",
        text: "View Followers",
      },
    ],
  },
];
