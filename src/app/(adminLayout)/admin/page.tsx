"use client";

import HomePageCard from "@/src/components/modules/admin/Home/HomePageCard";
import Charts from "@/src/components/modules/admin/Home/Charts";
import { useGetOverview } from "@/src/hooks/overview";

export default function AdminHomePage() {
  const { data } = useGetOverview();
  return (
    <div className="w-full">
      {data?.data && <HomePageCard data={data?.data} />}
      {data?.data && <Charts data={data?.data} />}
    </div>
  );
}
