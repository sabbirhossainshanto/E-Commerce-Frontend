"use client";

import { useGetMyCartProducts } from "@/src/hooks/cart";

import CartProduct from "../../UI/CartProduct/CartProduct";

const CartDropdown = () => {
  const { data: cartProducts } = useGetMyCartProducts();

  return (
    <div className="relative group hidden lg:block">
      <div className="text-white ml-5 relative block text-center cursor-pointer">
        <span className="text-white flex justify-center">
          <svg width="28" height="28" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="M94 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm90-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14Zm43.5-128.4L201.1 166a22.2 22.2 0 0 1-21.2 16H84.1a22.2 22.2 0 0 1-21.2-16L36.5 73.8v-.3l-9.8-34a1.9 1.9 0 0 0-1.9-1.5H8a6 6 0 0 1 0-12h16.8a14.1 14.1 0 0 1 13.5 10.2L46.8 66h174.9a6 6 0 0 1 4.8 2.4a6 6 0 0 1 1 5.2ZM213.8 78H50.2l24.3 84.7a10 10 0 0 0 9.6 7.3h95.8a10 10 0 0 0 9.6-7.3Z"
            ></path>
          </svg>
        </span>
        <span className="text-white text-[11px] leading-[10px]">Cart</span>
        {cartProducts?.data && cartProducts?.data?.length > 0 && (
          <span className="absolute bg-primary -top-1 -right-2 text-white text-[11px] w-[18px] h-[18px] leading-[18px] text-center rounded-full overflow-hidden">
            {cartProducts?.data?.length}
          </span>
        )}
      </div>

      <CartProduct cartProducts={cartProducts?.data} />
    </div>
  );
};

export default CartDropdown;
