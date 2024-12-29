"use client";
import Advertisement from "@/src/components/modules/public/Home/Advertisement";
import Hero from "@/src/components/modules/public/Home/Hero";
import Sponsors from "@/src/components/modules/public/Home/Sponsors";
import CategoryCard from "@/src/components/UI/CategoryCard/CategoryCard";
import ProductCart from "@/src/components/UI/ProductCart/ProductCart";
import { useGetAllCategory } from "@/src/hooks/category";
import { useGetAllFlashSale } from "@/src/hooks/flashSale";
import { useGetAllProducts } from "@/src/hooks/product";

import Link from "next/link";

export default function Home() {
  const { data: products } = useGetAllProducts([]);
  const { data: categories } = useGetAllCategory([]);
  const { data } = useGetAllFlashSale();

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Hero />
      {/* Advertisement */}
      <Advertisement />
      {/* Recommended for you section */}
      <div className="container mt-20">
        <div className="flex items-start justify-between mb-[30px]">
          <h2 className="text-[22px] sm:text-[32px] font-medium text-primary">
            Recommended For You
          </h2>
          <div className="pt-2">
            <Link
              href="/products"
              className="text-[15px] font-medium text-primary flex items-center gap-1"
            >
              See More
              <svg width="15" height="15" viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  d="M12.969 4.281L11.53 5.72L21.812 16l-10.28 10.281l1.437 1.438l11-11l.687-.719l-.687-.719z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.data?.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* Shop By category section */}

      <div className="container mt-20">
        <h2 className="text-[28px] text-primary mb-6">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {categories?.data?.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
      {/* Flash same  section */}
      <div className="container mt-20">
        <div className="flex items-start justify-between mb-[30px]">
          <h2 className="text-[22px] sm:text-[32px] font-medium text-primary">
            Flash Sale
          </h2>
          <div className="pt-2">
            <Link
              href="/products"
              className="text-[15px] font-medium text-primary flex items-center gap-1"
            >
              See More
              <svg width="15" height="15" viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  d="M12.969 4.281L11.53 5.72L21.812 16l-10.28 10.281l1.437 1.438l11-11l.687-.719l-.687-.719z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.data?.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Sponsors />
    </section>
  );
}
