"use client";
import img from "@/src/assets/img";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import AccountDropdown from "./AccountDropdown";
import CartDropdown from "./CartDropdown";
import WishlistDropdown from "./WishlistDropdown";

const Header = () => {
  return (
    <nav className="bg-[#FD3D57] py-1.5">
      <div className="container flex items-center justify-between">
        <Link href="/" className="lg:hidden w-[120px]">
          <Image
            height={100}
            width={100}
            src={img.logo}
            className="w-full"
            alt="Logo"
          />
        </Link>
        {/* <!-- All categories --> */}
        <div className="bg-secondary rounded-md w-[200px] relative hidden lg:block">
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

        <Search />

        <div className="flex items-center">
          <WishlistDropdown />
          <CartDropdown />
          <AccountDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Header;