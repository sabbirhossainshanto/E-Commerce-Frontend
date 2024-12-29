"use client";

import Loading from "@/src/components/shared/Loading/Loading";
import ProductCart from "@/src/components/UI/ProductCart/ProductCart";
import { useGetAllProducts } from "@/src/hooks/product";
import React from "react";

const RecentProducts = () => {
  const { data: products, isLoading } = useGetAllProducts([
    { name: "searchTerm", value: "recentViewedProduct" },
  ]);

  if (isLoading) {
    return <Loading />;
  }
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
    </div>
  );
};

export default RecentProducts;
