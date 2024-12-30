"use client";

import ProductCart from "@/src/components/UI/ProductCart/ProductCart";
import ProductSkeleton from "@/src/components/UI/ProductSkeleton/ProductSkeleton";
import { useGetAllProducts } from "@/src/hooks/product";
import React from "react";

const RecentProducts = () => {
  const { data: products, isLoading } = useGetAllProducts([
    { name: "searchTerm", value: "recentViewedProduct" },
  ]);

  return (
    <div className="container pt-14">
      <div className="flex items-start justify-between mb-[30px]">
        <h2 className="text-[22px] sm:text-[32px] font-medium text-primary">
          Recent Products
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.data?.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
      {isLoading && <ProductSkeleton mdGridCols="4" />}
    </div>
  );
};

export default RecentProducts;
