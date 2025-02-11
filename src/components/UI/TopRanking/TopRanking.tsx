import { IProduct } from "@/src/types";
import React from "react";
import TopRankingCard from "./TopRankingCard";

const TopRanking = ({ products }: { products: IProduct[] }) => {
  const monitors = products?.filter(
    (product) => product?.category?.name === "Monitor"
  );
  const mobiles = products?.filter(
    (product) => product?.category?.name === "Mobile"
  );
  const cameras = products?.filter(
    (product) => product?.category?.name === "Camera"
  );
  const laptops = products?.filter(
    (product) => product?.category?.name === "Laptop"
  );

  return (
    <section className="mt-20 w-full">
      <div className="container">
        <h2 className="text-[22px] sm:text-[32px] font-medium">Top Ranking</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className="col-span-1 pr-3">
            <h4 className="text-[20px] sm:text-lg font-medium mt-7">Monitor</h4>
            <TopRankingCard products={monitors} />
          </div>

          <div className="col-span-1 px-3">
            <h4 className="text-[20px] sm:text-lg font-medium mt-7">Mobile</h4>
            <TopRankingCard products={mobiles} />
          </div>

          <div className="col-span-1 px-3">
            <h4 className="text-[20px] sm:text-lg font-medium mt-7">Camera</h4>
            <TopRankingCard products={cameras} />
          </div>

          <div className="col-span-1 px-3">
            <h4 className="text-[20px] sm:text-lg font-medium mt-7">Laptop</h4>
            <TopRankingCard products={laptops} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRanking;
