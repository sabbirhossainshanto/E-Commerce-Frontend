import img from "@/src/assets/img";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="relative mt-16 bg-[#ffebee]">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="#ffebee"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="flex flex-col justify-between w-full">
        <div className="grid grid-cols-1 md:grid-cols-2  px-10 py-10 justify-items-center">
          <div className="space-y-3 flex-1">
            <h1 className="text-4xl">
              <span className="text-primary">Click</span>
              <span>Shop</span>
            </h1>
            <p className="text-xl text-[#2B2D42] ">
              Book the perfect space for your next meeting. At Booking.com, we
              provide a variety of rooms designed to meet your business needs.
            </p>
            <div className="flex flex-col gap-4 pt-4">
              <label
                htmlFor="newsLetter"
                className="text-gray-900 text-xl uppercase"
              >
                Subscribe
              </label>
              <form className="flex">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="py-2.5 px-[15px] text-[13px] w-full sm:w-[230px] md:w-full lg:w-[230px]  bg-transparent rounded-l-[5px] border border-[#c7c7c7] focus:ring-1 focus:outline-rose-500 border-r-0 focus:border-r-0 "
                />
                <button
                  type="button"
                  className="default_btn py-2 px-2.5 min-w-[105px] rounded-r-[5px] rounded-l-none hover:bg-white hover:border-rose-500 hover:text-primary"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-4 pt-4">
              <h1 className="text-gray-900 text-xl uppercase">CONTACT</h1>
              <p className="flex items-center gap-2 text-lg">
                <CiLocationOn size={25} />
                <span>
                  7895 Dr New Albuquerue, NM 19800, United States Of America
                </span>
              </p>
              <p className="flex items-center gap-2 text-lg">
                <IoCallOutline size={20} />
                <span>+566 477 256, +566 254 575</span>
              </p>
              <p className="flex items-center gap-2 text-lg">
                <LuMessageCircle size={20} />
                <span>sabbirshnt@gmail.com</span>
              </p>
              <div className="flex items-center gap-4">
                <Image
                  height={30}
                  width={30}
                  className="h-7 cursor-pointer"
                  src={img.facebook}
                  alt=""
                />
                <Image
                  height={30}
                  width={30}
                  className="h-7 cursor-pointer"
                  src={img.instagram}
                  alt=""
                />
                <Image
                  height={30}
                  width={30}
                  className="h-7 cursor-pointer"
                  src={img.twitter}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between md:justify-center md:gap-32 pt-10">
            <div className="">
              <h3 className="mb-5 font-semibold text-lg">MY ACCOUNT</h3>
              <div className="flex flex-col space-y-4">
                <Link href="/orders">Orders</Link>
                <Link href="/orders">Wishlist</Link>
                <Link href="/orders">Track Order</Link>
                <Link href="/orders">Manage Account</Link>
                <Link href="/orders">Return Order</Link>
              </div>
            </div>
            <div className="">
              <h3 className="mb-5 font-semibold text-lg ">INFORMATION</h3>
              <div className="flex flex-col space-y-4">
                <Link href="/orders">About Us</Link>
                <Link href="/orders">Return Policy</Link>
                <Link href="/orders">Terms and Condition</Link>
                <Link href="/orders">Privacy Policy</Link>
                <Link href="/orders">FAQ</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#2b2d42] ">
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between py-4  px-10">
            <Link href="/">
              <span className="flex items-center gap-2 text-white">
                <span className="text-xl"> &copy; </span>
                Click Shop
                <span className="text-xl">- All Rights Reserved</span>
              </span>
            </Link>
            <Image
              height={40}
              width={400}
              className="h-10"
              src={img.paymentMethod}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
