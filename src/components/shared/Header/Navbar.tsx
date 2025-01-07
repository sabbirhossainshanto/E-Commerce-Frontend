"use client";
import Link from "next/link";
import Image from "next/image";
import img from "@/src/assets/img";
import { Menu } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import SearchProduct from "./SearchProduct";
import { usePathname } from "next/navigation";
import { useGetMyComparison } from "@/src/hooks/compare";
import { useUser } from "@/src/context/user.provider";
import Wishlist from "./Wishlist";
import MenuDropdown from "./MenuDropdoen";
import Comparison from "../../modal/Comparison";
import CartDropdown from "./CartDropdown";
import AccountDropdown from "./AccountDropdown";

export const Navbar = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const { data: comparisons } = useGetMyComparison();

  return (
    <header
      className={`w-full bg-[#101725] dark:bg-dark  z-40 shadow-2xl fixed top-0 left-0 right-0`}
    >
      <div className="relative">
        <div className="w-full  lg:py-4">
          <div className="container px-4 lg:px-0 mx-auto">
            <div className="relative flex items-center justify-between">
              <div className="w-48 max-w-full sm:w-60 lg:w-48">
                <Link className="block w-full py-3" href="/">
                  <Image src={img.logo} alt="" />
                </Link>
              </div>
              <div className="items-center justify-end w-full sm:flex lg:justify-between ml-20">
                <SearchProduct />
                {user?.email ? (
                  <div className="flex items-center justify-end">
                    <Wishlist />

                    {comparisons?.data && comparisons?.data?.length > 0 && (
                      <Comparison comparisons={comparisons?.data} />
                    )}

                    <CartDropdown />
                    <AccountDropdown />
                  </div>
                ) : (
                  <div className="flex items-center justify-end w-full space-x-4 text-white">
                    <button>Login</button>
                    <button>Register</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container px-4 lg:px-0 mx-auto">
            <div className="relative flex items-center justify-between">
              <div className="lg:w-60">
                <div className="relative py-4">
                  <div className="inline-flex cursor-pointer items-center justify-between whitespace-nowrap rounded-[5px] bg-secondary  pl-4 pr-[18px] py-[9px] text-base font-medium text-white hover:bg-opacity-90">
                    <span className="pr-[10px] text-white">
                      <Menu />
                    </span>
                    All categories
                    <span className="pl-3 text-white">
                      <FaCaretDown />
                    </span>
                  </div>
                </div>
              </div>
              <MenuDropdown />
              <div className="hidden md:flex items-center justify-between">
                <div className="w-full text-right">
                  <ul className="items-center block lg:flex">
                    <li
                      className={`max-lg:border-b max-lg:py-3 relative lg:after:absolute hover:text-secondary lg:after:bg-secondary ${pathname === "/" ? "lg:after:w-full !text-secondary" : " lg:after:w-0 text-white"}  lg:hover:after:w-full font-medium lg:after:h-[2px] lg:after:block lg:after:-bottom-1 lg:after:transition-all lg:after:duration-300 lg:mx-4 lg:inline-flex`}
                    >
                      <Link href="/">Home</Link>
                    </li>
                    <li
                      className={`max-lg:border-b max-lg:py-3 relative lg:after:absolute hover:text-secondary lg:after:bg-secondary ${pathname === "/products" ? "lg:after:w-full !text-secondary" : " lg:after:w-0 text-white"}  lg:hover:after:w-full font-medium lg:after:h-[2px] lg:after:block lg:after:-bottom-1 lg:after:transition-all lg:after:duration-300 lg:mx-4 lg:inline-flex`}
                    >
                      <Link href="/products">Products</Link>
                    </li>
                    <li
                      className={`max-lg:border-b max-lg:py-3 relative lg:after:absolute hover:text-secondary lg:after:bg-secondary ${pathname === "/recent-products" ? "lg:after:w-full !text-secondary" : " lg:after:w-0 text-white"}  lg:hover:after:w-full font-medium lg:after:h-[2px] lg:after:block lg:after:-bottom-1 lg:after:transition-all lg:after:duration-300 lg:mx-4 lg:inline-flex`}
                    >
                      <Link href="/recent-products">Recent Products</Link>
                    </li>
                    <li
                      className={`max-lg:border-b max-lg:py-3 relative lg:after:absolute hover:text-secondary lg:after:bg-secondary ${pathname === "/flash-sale" ? "lg:after:w-full !text-secondary" : " lg:after:w-0 text-white"}  lg:hover:after:w-full font-medium lg:after:h-[2px] lg:after:block lg:after:-bottom-1 lg:after:transition-all lg:after:duration-300 lg:mx-4 lg:inline-flex`}
                    >
                      <Link href="/flash-sale">Flash Sale</Link>
                    </li>

                    <li
                      className={`max-lg:border-b max-lg:py-3 relative lg:after:absolute hover:text-secondary lg:after:bg-secondary ${pathname === "/shop" ? "lg:after:w-full !text-secondary" : " lg:after:w-0 text-white"}  lg:hover:after:w-full font-medium lg:after:h-[2px] lg:after:block lg:after:-bottom-1 lg:after:transition-all lg:after:duration-300 lg:mx-4 lg:inline-flex`}
                    >
                      <Link href="/shops">Shop</Link>
                    </li>
                    <li
                      className={`max-lg:border-b max-lg:py-3 relative lg:after:absolute hover:text-secondary lg:after:bg-secondary ${pathname === "/compare" ? "lg:after:w-full !text-secondary" : " lg:after:w-0 text-white"}  lg:hover:after:w-full font-medium lg:after:h-[2px] lg:after:block lg:after:-bottom-1 lg:after:transition-all lg:after:duration-300 lg:mx-4 lg:inline-flex`}
                    >
                      <Link href="/compare">Compare</Link>
                    </li>

                    <li className="hidden sm:block">
                      <Link
                        className="inline-flex items-center justify-center rounded-md h-10 px-4 py-2  text-white bg-primary "
                        href="/auth/vendor-signup"
                      >
                        Join as Vendor
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
