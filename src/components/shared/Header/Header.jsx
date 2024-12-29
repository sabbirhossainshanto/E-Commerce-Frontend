"use client";
import Link from "next/link";
import AccountDropdown from "./AccountDropdown";
import CartDropdown from "./CartDropdown";
import { useUser } from "@/src/context/user.provider";
import { usePathname } from "next/navigation";
import MenuDropdown from "./MenuDropdoen";
import { useGetMyComparison } from "@/src/hooks/compare";
import Comparison from "../../modal/Comparison";
import Wishlist from "./Wishlist";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const { data: comparisons } = useGetMyComparison();
  const [navbarSticky, setNavbarSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 65) {
        setNavbarSticky(true);
      } else {
        setNavbarSticky(false);
      }
    });
  }, [navbarSticky]);
  return (
    <nav
      className={`bg-primary py-1.5  ${navbarSticky ? "z-40 shadow-2xl fixed top-0 left-0 right-0" : ""}`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="lg:hidden w-[120px]">
          <span className="text-primary">Click</span>
          <span className="text-white">Shop</span>
        </Link>
        {/* <!-- All categories --> */}
        {/* <div className="bg-primary rounded-md w-[200px] relative hidden lg:block">
          <div className="py-2.5 px-4 flex items-center justify-center">
            <span className="text-white mr-2.5">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
            <span className="text-white text-base">All categories</span>
          </div>
        </div> */}

        {/* Nav lists */}
        <ul className="lg:flex items-center hidden">
          <li>
            <Link
              href="/"
              className={` leading-[26px] flex items-center text-base font-medium px-2.5 py-[15px] transition duration-300 ${pathname === "/" ? "text-secondary" : "text-white"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={` leading-[26px] flex items-center text-base font-medium px-2.5 py-[15px] transition duration-300 ${pathname === "/products" ? "text-secondary" : "text-white"}`}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/recent-products"
              className={` leading-[26px] flex items-center text-base font-medium px-2.5 py-[15px] transition duration-300 ${pathname === "/recent-products" ? "text-secondary" : "text-white"}`}
            >
              Recent Product
            </Link>
          </li>
          <li>
            <Link
              href="/flash-sale"
              className={` leading-[26px] flex items-center text-base font-medium px-2.5 py-[15px] transition duration-300 ${pathname === "/flash-sale" ? "text-secondary" : "text-white"}`}
            >
              Flash Sale
            </Link>
          </li>
        </ul>
        {user?.email ? (
          <div className="flex items-center">
            <Wishlist />
            <MenuDropdown />
            {comparisons?.data && comparisons?.data?.length > 0 && (
              <Comparison comparisons={comparisons?.data} />
            )}

            <CartDropdown />
            <AccountDropdown />
          </div>
        ) : (
          <div className="mr-4 flex items-center">
            <Link
              href="/login"
              className="text-white text-sm hover:text-secondary font-medium leading-[26px] transition duration-200"
            >
              Login
            </Link>
            <span className="text-white text-sm">/</span>
            <Link
              href="/register"
              className="text-white text-sm hover:text-secondary font-medium leading-[26px] transition duration-200"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
