import { IProduct } from "@/src/types";
import Link from "next/link";

const TopRankingCard = ({ products }: { products: IProduct[] }) => {
  return (
    <>
      {products?.slice(0, 3)?.map((product, i) => {
        return (
          <div
            key={product?.id}
            className="sm:flex items-center mt-5 p-3 bg-white"
          >
            <div className="w-full sm:w-[105px]  rounded-md p-2.5 relative">
              <Link href={`/products/${product?.id}`}>
                <img
                  loading="lazy"
                  src={product?.images[0]}
                  className="w-full h-[75px] object-contain flex-shrink-0"
                  alt="product"
                />
              </Link>
              <span className="absolute top-0 right-0 w-6 h-[18px] bg-primary text-center leading-5 text-white font-bold text-xs rounded-tr-md rounded-bl-md">
                {i + 1}
              </span>
            </div>
            <div className="sm:pl-4 mt-3 sm:mt-0">
              <Link
                href={`/products/${product?.id}`}
                className="hover:text-secondary transition-colors"
              >
                <h4 className="text-base font-medium  mb-1.5">
                  {product?.name?.substring(0, 40)}
                </h4>
              </Link>
              <div className="font-medium">
                <span className="text-primary mr-1">${product?.price}</span>

                {/* <span className="text-[#687188] text-sm font-medium line-through">
                  $300.45
                </span> */}
              </div>
              {/* <div>
                <div className="flex items-center justify-start">
                  <div className="flex items-center">
                    {Array(product?.reviews?.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar className="text-yellow-500" key={i} />
                      ))}
                  </div>
                  <p className="text-xs ml-2 text-[#687188]">(150)</p>
                </div>
              </div> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TopRankingCard;
