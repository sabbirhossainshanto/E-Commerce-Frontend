import ProductCart from "@/src/components/UI/ProductCart/ProductCart";
import nexiosInstance from "@/src/lib/NexiosInstance";
import { IResponse, IShop } from "@/src/types";
import { NexiosResponse } from "nexios-http/types/interfaces";
import Image from "next/image";

const SingleShopPage = async ({ params }: { params: { shopId: string } }) => {
  const { data }: NexiosResponse<IResponse<IShop>> = await nexiosInstance.get(
    `/shops/${params?.shopId}`
  );
  return (
    <div className="container pt-12">
      {data?.data && (
        <div className="col-span-12 lg:col-span-9">
          <div className="md:flex justify-between items-center border rounded p-5">
            {data?.data?.shopLogo && (
              <div className="w-20 h-20">
                <Image
                  height={100}
                  width={100}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  src={data?.data?.shopLogo}
                  alt="product"
                />
              </div>
            )}
            <div className="mt-6 md:mt-0">
              <div className="transition duration-300">
                <h5>Shop Name : {data?.data?.shopName}</h5>
              </div>
              <p className="mb-0">{data?.data?.shopDetails}</p>
            </div>

            <div className="flex justify-between md:gap-12 items-center mt-4 md:mt-0">
              User Name : {data?.data?.user?.name}
            </div>
          </div>
        </div>
      )}
      {data?.data && (
        <div className="pt-14">
          <div className="flex items-start justify-between mb-[30px]">
            <h2 className="text-[22px] sm:text-[32px] font-medium text-secondary">
              Products Of {data?.data?.shopName}
            </h2>
          </div>
          {data?.data?.products && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data?.data?.products?.map((product) => (
                <ProductCart key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleShopPage;
