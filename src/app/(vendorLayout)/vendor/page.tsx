"use client";

import HomePageCard from "@/src/components/modules/admin/Home/HomePageCard";
import Charts from "@/src/components/modules/admin/Home/Charts";

export default function VendorHomePage() {
  return (
    <div className="w-full">
      <HomePageCard />
      <Charts />
    </div>
  );
}
