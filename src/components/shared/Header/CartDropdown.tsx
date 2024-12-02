import img from "@/src/assets/img";
import Image from "next/image";
import Link from "next/link";

const CartDropdown = () => {
  return (
    <div className="relative group hidden lg:block">
      <Link href="/" className="text-white ml-5 relative block text-center">
        <span className="text-white flex justify-center">
          <svg width="28" height="28" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="M94 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm90-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14Zm43.5-128.4L201.1 166a22.2 22.2 0 0 1-21.2 16H84.1a22.2 22.2 0 0 1-21.2-16L36.5 73.8v-.3l-9.8-34a1.9 1.9 0 0 0-1.9-1.5H8a6 6 0 0 1 0-12h16.8a14.1 14.1 0 0 1 13.5 10.2L46.8 66h174.9a6 6 0 0 1 4.8 2.4a6 6 0 0 1 1 5.2ZM213.8 78H50.2l24.3 84.7a10 10 0 0 0 9.6 7.3h95.8a10 10 0 0 0 9.6-7.3Z"
            ></path>
          </svg>
        </span>
        <span className="text-white text-[11px] leading-[10px]">Cart</span>
        <span className="absolute bg-secondary -top-1 -right-2 text-white text-[11px] w-[18px] h-[18px] leading-[18px] text-center rounded-full overflow-hidden">
          6
        </span>
      </Link>

      <div className="absolute top-full right-0 bg-white z-20 p-4 w-[300px] rounded-b-[3px] mt-3.5 group-hover:mt-[5px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="mb-3 border-b border-[#d8d8d8]">
          <h4 className="text-base text-secondary mb-2">2 Items</h4>
        </div>
        <div>
          <Link href="/" className="flex items-start pr-5 mb-4 relative">
            <span className="absolute right-0 hover:text-primary transition duration-300">
              <svg width="18" height="18" viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
                ></path>
              </svg>
            </span>
            <div className="flex-shrink-0">
              <Image
                height={100}
                width={100}
                src={img.logo}
                className="w-[75px] h-[60px] object-contain"
                alt="product"
              />
            </div>

            <div className="flex-grow pl-4">
              <h5 className="text-base text-secondary hover:text-primary transition duration-300">
                Men casual shoes
              </h5>
              <p className="text-[#464545] text-sm">
                x1 <span className="ms-2">$450</span>
              </p>
            </div>
          </Link>
          <Link href="/" className="flex items-start pr-5 mb-4 relative">
            <span className="absolute right-0 hover:text-primary transition duration-300">
              <svg width="18" height="18" viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
                ></path>
              </svg>
            </span>
            <div className="flex-shrink-0">
              <Image
                height={100}
                width={100}
                src={img.logo}
                className="w-[75px] h-[60px] object-contain"
                alt="product"
              />
            </div>

            <div className="flex-grow pl-4">
              <h5 className="text-base text-secondary hover:text-primary transition duration-300">
                Men casual shoes
              </h5>
              <p className="text-[#464545] text-sm">
                x1 <span className="ms-2">$450</span>
              </p>
            </div>
          </Link>
        </div>
        <div className="mt-4 pt-4 border-t border-[#d8d8d8] flex justify-between">
          <h4 className="text-base text-secondary">SUB TOTAL:</h4>
          <h4 className="text-base ml-2">$980.00</h4>
        </div>
        <div className="flex mt-4 gap-4">
          <Link
            href="/"
            className="w-1/2 rounded-[3px] py-2 px-2.5 border border-primary bg-primary text-white inline-block text-center text-sm hover:bg-transparent hover:text-primary transition duration-300"
          >
            VIEW CART
          </Link>
          <Link
            href="/"
            className="w-1/2 rounded-[3px] py-2 px-2.5 border border-primary hover:bg-primary bg-white hover:text-white inline-block text-center text-sm text-primary transition duration-300"
          >
            CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
