"use client";
import { useGetAllCategory } from "@/src/hooks/category";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  const { data } = useGetAllCategory([]);

  const filterCategory = data?.data?.filter(
    (category) => category?.products?.length > 0
  );

  return (
    <div className="absolute top-20 bg-white h-fit overflow-y-scroll shadow-md rounded-md invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:z-50 w-[180px]">
      {filterCategory?.map((category) => {
        return (
          <Link
            href={`products?category=${category?.name}`}
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
