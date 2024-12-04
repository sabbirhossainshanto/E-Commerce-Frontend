"use client";
import Link from "next/link";
import AccountDropdown from "./AccountDropdown";
import CartDropdown from "./CartDropdown";
import { useUser } from "@/src/context/user.provider";

const Header = () => {
  const { user } = useUser();
  return (
    <nav className="bg-secondary py-1.5">
      <div className="container flex items-center justify-between">
        <Link href="/" className="lg:hidden w-[120px]">
          <span className="text-white">Click</span> <span>Shop</span>
        </Link>
        {/* <!-- All categories --> */}
        <div className="bg-primary rounded-md w-[200px] relative hidden lg:block">
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
        </div>

        {/* Nav lists */}
        <ul className="flex items-center">
          <li>
            <Link
              href="/"
              className="text-white leading-[26px] flex items-center text-base font-medium px-2.5 py-[15px] transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-white leading-[26px] flex items-center text-base font-medium px-2.5 py-[15px] transition duration-300"
            >
              Product
            </Link>
          </li>
        </ul>
        {user?.email ? (
          <div className="flex items-center">
            {/* TODO */}
            {/* <WishlistDropdown /> */}
            <CartDropdown />
            <AccountDropdown />
          </div>
        ) : (
          <div className="mr-4 flex items-center">
            <Link
              href="/login"
              className="text-white text-sm hover:text-primary font-medium leading-[26px] transition duration-200"
            >
              Login
            </Link>
            <span className="text-white text-sm">/</span>
            <Link
              href="/register"
              className="text-white text-sm hover:text-primary font-medium leading-[26px] transition duration-200"
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
