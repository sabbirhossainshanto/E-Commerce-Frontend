"use client";
import img from "@/src/assets/img";
import Hero from "@/src/components/modules/public/Home/Hero";
import CategoryCard from "@/src/components/UI/CategoryCard/CategoryCard";
import ProductCart from "@/src/components/UI/ProductCart/ProductCart";
import { useGetAllCategory } from "@/src/hooks/category";
import { useGetAllProducts } from "@/src/hooks/product";

import Link from "next/link";

export default function Home() {
  const { data: products } = useGetAllProducts([]);
  const { data: categories } = useGetAllCategory();

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Hero />

      {/* Recommended for you section */}
      <div className="container pb-14">
        <div className="flex items-start justify-between mb-[30px]">
          <h2 className="text-[22px] sm:text-[32px] font-medium text-secondary">
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

      <div className="container pb-14">
        <h2 className="text-[28px] text-secondary mb-6">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {categories?.data?.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
