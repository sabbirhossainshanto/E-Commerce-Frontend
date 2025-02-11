"use client";

import HomePageCard from "@/src/components/modules/admin/Home/HomePageCard";
import Charts from "@/src/components/modules/admin/Home/Charts";
import { useGetOverview } from "@/src/hooks/overview";
import RecentOrder from "@/src/components/modules/admin/Home/RecentOrder";

export default function AdminHomePage() {
  const { data } = useGetOverview();
  return (
    <div className="w-full">
      {data?.data && <HomePageCard data={data?.data} />}
      {data?.data && <Charts data={data?.data} />}
      <div className="my-20">
        <h1 className="text-[20px] mb-2">Recent Orders</h1>
        <RecentOrder />
      </div>
    </div>
  );
}
