"use client";

import { useProduct } from "@/src/context/product.provider";
import { useGetAllCategory } from "@/src/hooks/category";
import { ICategories } from "@/src/types";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  const { data } = useGetAllCategory([]);

  const { setQuery, setSelectedCategory } = useProduct();
  const handleFilterByCategory = (category: ICategories) => {
    setQuery((prev) => {
      const prevQuery = prev.filter((p) => p.name !== "category");
      return [...prevQuery, { name: "category", value: category?.name }];
    });
    setSelectedCategory(category?.name);
  };

  return (
    <div className="absolute top-20 bg-white h-[60vh] overflow-y-scroll shadow-md rounded-md invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:z-50">
      {data?.data?.map((category) => {
        return (
          <Link
            onClick={() => handleFilterByCategory(category)}
            href="/products"
            className="flex items-center gap-3 p-3 cursor-pointer "
            key={category?.id}
          >
            <Image src={category?.image} alt="" height={20} width={20} />
            <h2 className="hover:underline hover:text-secondary">
              {category?.name}
            </h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Category;
