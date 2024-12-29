"use client";

import img from "@/src/assets/img";
import { useCreateSubscriber } from "@/src/hooks/subscriber";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { toast } from "sonner";
import { z } from "zod";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { mutate } = useCreateSubscriber();

  const handleSubscribe = () => {
    const isValidEmail = z.string().email();
    const parseEmail = isValidEmail.safeParse(email);
    if (parseEmail.success) {
      mutate(
        { email },
        {
          onSuccess(data) {
            if (data?.success) {
              toast?.success(data?.message);
            } else {
              toast?.error(data?.message);
            }
          },
        }
      );
    } else {
      toast?.error("Please provide a valid email");
    }
  };

  return (
    <div className="relative mt-16 bg-[#ffebee]">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-primary py-7">
        <h1 className="lg:text-3xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 text-white">
          <span className="text-[#56d879]">Subscribe</span> us for get news{" "}
          <br />
          events and offers
        </h1>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="bg-secondary text-white  duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full"
          >
            Submit
          </button>
        </div>
      </div>
      {/* <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="#ffebee"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg> */}
      <div className="flex flex-col justify-between w-full">
        <div className="grid grid-cols-1 md:grid-cols-2  px-10 py-10 justify-items-center">
          <div className="space-y-3 flex-1">
            <h1 className="text-4xl">
              <span className="text-secondary">Click</span>
              <span>Shop</span>
            </h1>
            <p className="text-xl text-[#2B2D42] ">
              Book the perfect space for your next meeting. At Booking.com, we
              provide a variety of rooms designed to meet your business needs.
            </p>

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
                  className=" cursor-pointer"
                  src={img.facebook}
                  alt="facebook"
                />
                <Image
                  height={30}
                  width={30}
                  className=" cursor-pointer"
                  src={img.instagram}
                  alt="instagram"
                />
                <Image
                  height={30}
                  width={30}
                  className=" cursor-pointer"
                  src={img.twitter}
                  alt="twitter"
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
              // height={40}
              // width={400}
              style={{
                height: "auto",
                width: "400px",
              }}
              className="object-contain"
              src={img.paymentMethod}
              alt="paymentMethod"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
