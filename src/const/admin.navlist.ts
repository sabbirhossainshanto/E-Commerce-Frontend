import { AiFillProduct } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { CiShop } from "react-icons/ci";
import { FaBorderAll, FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";

export const adminNavlist = [
  {
    key: "Dashboard",
    icon: MdDashboard,
    children: [
      {
        path: "/admin",
        text: "Dashboard",
      },
      {
        path: "/admin/manage-profile",
        text: "Manage Profile",
      },
    ],
  },
  {
    key: "User",
    icon: FaUser,
    children: [
      {
        path: "/admin/manage-user",
        text: "Manage User",
      },
    ],
  },
  {
    key: "Product",
    icon: AiFillProduct,
    children: [
      {
        path: "/admin/manage-product",
        text: "Manage Product",
      },
    ],
  },
  {
    key: "Category",
    icon: BiSolidCategory,
    children: [
      {
        path: "/admin/manage-product-category",
        text: "Manage Product Category",
      },
    ],
  },
  {
    key: "Shop",
    icon: CiShop,
    children: [
      {
        path: "/admin/manage-shop",
        text: "Manage Shop",
      },
    ],
  },
  {
    key: "Order",
    icon: FaBorderAll,
    children: [
      {
        path: "/admin/manage-order",
        text: "Manage Order",
      },
    ],
  },
  {
    key: "Coupon",
    icon: RiCoupon2Fill,
    children: [
      {
        path: "/admin/manage-coupon",
        text: "Manage Coupon",
      },
    ],
  },
];
