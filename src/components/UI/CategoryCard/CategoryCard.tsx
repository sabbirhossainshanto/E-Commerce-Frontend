"use client";

import { useProduct } from "@/src/context/product.provider";
import { ICategories } from "@/src/types";
import Link from "next/link";

const CategoryCard = ({ category }: { category: ICategories }) => {
  const { setQuery, setSelectedCategory } = useProduct();
  const handleFilterByCategory = (category: ICategories) => {
    setQuery((prev) => {
      const prevQuery = prev.filter((p) => p.name !== "category");
      return [...prevQuery, { name: "category", value: category?.name }];
    });
    setSelectedCategory(category?.name);
  };
  return (
    <div>
      <Link
        onClick={() => handleFilterByCategory(category)}
        href="/products"
        className="group h-[120px] rounded-md  flex flex-col items-center justify-center relative bg-white gap-5 shadow-md"
      >
        <img className="size-16" src={category?.image} alt="" />
        <h4 className="leading-6 text-gray-700 text-sm lg:text-base  font-medium group-hover:text-secondary transition-colors text-center">
          {category.name}
        </h4>
      </Link>
    </div>
  );
};

export default CategoryCard;
