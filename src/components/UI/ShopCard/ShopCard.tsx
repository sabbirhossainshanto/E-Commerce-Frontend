"use client";

import config from "@/src/config";
import { useUser } from "@/src/context/user.provider";
import { useFollowShop, useGetSingleFollowShop } from "@/src/hooks/followShop";
import { IShop } from "@/src/types";
import { Button } from "@nextui-org/button";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ShopCard = ({ shop }: { shop: IShop }) => {
  const [shopData, setShopData] = useState<IShop>(shop);
  const [fetchData, setFetchData] = useState(false);
  const { user } = useUser();
  const { data: followedShop, refetch: refetchFollowedShop } =
    useGetSingleFollowShop(shop?.id);
  const { mutate: followShop } = useFollowShop();

  const handleFollowShop = (id: string) => {
    followShop(
      { shopId: id },
      {
        onSuccess(data) {
          if (data?.success) {
            refetchFollowedShop();
            setFetchData(true);
            toast.success(data?.message);
          } else {
            toast.error(data?.message);
          }
        },
      }
    );
  };

  useEffect(() => {
    if (fetchData) {
      const fetchSingleShop = async () => {
        const res = await axios.get(
          `${config.base_url}/shops/single-shop/${shop?.id}`
        );
        if (res?.data) {
          setShopData(res.data?.data);
          setFetchData(false);
        }
      };
      fetchSingleShop();
    }
  }, [fetchData]);
  return (
    <div className="col-span-12 lg:col-span-9">
      <div className="md:flex justify-between items-center border rounded p-5">
        {shopData?.shopLogo && (
          <div className="w-20 h-20">
            <Image
              height={100}
              width={100}
              loading="lazy"
              className="w-full h-full object-cover"
              src={shopData?.shopLogo}
              alt="product"
            />
          </div>
        )}
        <div className="mt-6 md:mt-0">
          <div className="transition duration-300">
            <h5>Shop Name : {shopData?.shopName}</h5>
          </div>
          <p className="mb-0">{shop?.shopDetails}</p>
        </div>
        <div className="mt-6 md:mt-0">
          <div className="transition duration-300">
            <h5>Vendor Email : {shopData?.user?.email}</h5>
          </div>
          <p className="mb-0"> Followers : {shopData?.follower?.length}</p>
        </div>
        {user?.id && (
          <div className="flex justify-between md:gap-12 items-center mt-4 md:mt-0">
            <Button onClick={() => handleFollowShop(shopData?.id)}>
              {followedShop?.data &&
              followedShop?.data?.shopId === shopData?.id ? (
                <span>Following</span>
              ) : (
                <span>Follow</span>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCard;
