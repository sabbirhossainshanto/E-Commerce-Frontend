"use client";

import img from "@/src/assets/img";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center">
        {/* Slider main container */}
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
            <Image
              className="w-full h-[60vh] object-cover"
              src={img.banner2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full h-[60vh] object-cover"
              src={img.banner}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full h-[60vh] object-cover"
              src={img.banner3}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full h-[60vh] object-cover"
              src={img.banner4}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full h-[60vh] object-cover"
              src={img.banner5}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full h-[60vh] object-cover"
              src={img.banner6}
              alt=""
            />
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="bg-[#7cc8f8ba] ">
              <div className="container">
                <div className="sm:flex items-center justify-center">
                  <div className="w-full sm:w-1/2 pr-3">
                    <div className="max-w-full py-24 lg:py-28">
                      <p className="text-base mb-2 ">
                        Get up to 50% off Today only
                      </p>
                      <h1 className="text-[36px] sm:text-[29px] md:text-[36px] xl:text-[40px] leading-10  font-medium mb-4">
                        Apple iPhone XR
                      </h1>
                      <div className="mb-1 leading-[22px] font-medium">
                        <span className=" mr-1 text-primary">$450.00</span>
                        <span className="text-sm line-through text-secondary">
                          $550.45
                        </span>
                      </div>
                      <div className="mt-[30px]">
                        <Link
                          className="bg-primary px-4 py-3 text-white"
                          href="/products"
                        >
                          SHOP NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="pl-3 w-1/2 hidden sm:block">
                    <div className="w-full flex items-center justify-end ">
                      <Image
                        height={280}
                        width={280}
                        src={img.iPhoneXR}
                        className="max-h-[280px] object-right"
                        alt="phone"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-[#FFDADF] ">
              <div className="container">
                <div className="sm:flex items-center justify-center">
                  <div className="w-full sm:w-1/2 px-3">
                    <div className="max-w-full py-24 lg:py-28  text-center sm:text-left">
                      <p className="text-base mb-2 ">
                        Get up to 50% off Today only
                      </p>
                      <h1 className="text-[36px] sm:text-[29px] md:text-[36px] xl:text-[40px] leading-10  font-medium mb-4">
                        Apple Watch{" "}
                      </h1>
                      <div className="mb-1 leading-[22px] font-medium">
                        <span className="text-primary mr-1">$450.00</span>
                        <span className="text-sm line-through text-secondary">
                          $550.45
                        </span>
                      </div>
                      <div className="mt-[30px]">
                        <Link
                          className="bg-primary px-4 py-3 text-white"
                          href="/products"
                        >
                          SHOP NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="px-l sm:w-1/2 hidden sm:block">
                    <div className="w-full flex items-center justify-end ">
                      <Image
                        height={280}
                        width={280}
                        src={img.watch}
                        className="max-h-[280px] object-right"
                        alt="phone"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#CCCCCC]">
              <div className="container">
                <div className="sm:flex items-center justify-center">
                  <div className="w-full sm:w-1/2 px-3">
                    <div className="max-w-full py-24 lg:py-28">
                      <p className="text-base mb-2 ">
                        Get up to 50% off Today only
                      </p>
                      <h1 className="text-[36px] sm:text-[29px] md:text-[36px] xl:text-[40px] leading-10  font-medium mb-4">
                        Beats Headphones{" "}
                      </h1>
                      <div className="mb-1 leading-[22px] font-medium">
                        <span className=" mr-1 text-primary">$450.00</span>
                        <span className="text-sm line-through text-secondary">
                          $550.45
                        </span>
                      </div>
                      <div className="mt-[30px]">
                        <Link
                          className="bg-primary px-4 py-3 text-white"
                          href="/products"
                        >
                          SHOP NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="pl-3 sm:w-1/2 hidden sm:block">
                    <div className="w-full flex items-center justify-end ">
                      <Image
                        height={280}
                        width={280}
                        src={img.headPhone}
                        className="max-h-[280px] object-right"
                        alt="phone"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#7cc8f8ba] ">
              <div className="container">
                <div className="sm:flex items-center justify-center">
                  <div className="w-full sm:w-1/2 pr-3">
                    <div className="max-w-full py-24 lg:py-28">
                      <p className="text-base mb-2 ">
                        Get up to 50% off Today only
                      </p>
                      <h1 className="text-[36px] sm:text-[29px] md:text-[36px] xl:text-[40px] leading-10  font-medium mb-4">
                        Apple iPhone XR
                      </h1>
                      <div className="mb-1 leading-[22px] font-medium">
                        <span className=" mr-1 text-primary">$450.00</span>
                        <span className="text-sm line-through text-secondary">
                          $550.45
                        </span>
                      </div>
                      <div className="mt-[30px]">
                        <Link
                          className="bg-primary px-4 py-3 text-white"
                          href="/products"
                        >
                          SHOP NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="pl-3 w-1/2 hidden sm:block">
                    <div className="w-full flex items-center justify-end ">
                      <Image
                        height={280}
                        width={280}
                        src={img.iPhone12}
                        className="max-h-[280px] object-right"
                        alt="phone"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-[#FFDADF]">
              <div className="container">
                <div className="sm:flex items-center justify-center">
                  <div className="w-full sm:w-1/2 px-3">
                    <div className="max-w-full py-24 lg:py-28 ">
                      <p className="text-base mb-2 ">
                        Get up to 50% off Today only
                      </p>
                      <h1 className="text-[36px] sm:text-[29px] md:text-[36px] xl:text-[40px] leading-10  font-medium mb-4">
                        iPhone 11 Pro Max{" "}
                      </h1>
                      <div className="mb-1 leading-[22px] font-medium">
                        <span className=" mr-1 text-primary">$450.00</span>
                        <span className="text-sm line-through text-secondary">
                          $550.45
                        </span>
                      </div>
                      <div className="mt-[30px]">
                        <Link
                          className="bg-primary px-4 py-3 text-white"
                          href="/products"
                        >
                          SHOP NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="pl-3 sm:w-1/2 hidden sm:block">
                    <div className="w-full flex items-center justify-end ">
                      <Image
                        height={280}
                        width={280}
                        src={img.iPhoneXR}
                        className="max-h-[280px] object-right"
                        alt="phone"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
