"use client";

import { Navbar } from "@/src/components/shared/Header/Navbar";
import BreadCrumbs from "@/src/components/shared/user/BreadCrumbs/BreadCrumbs";
import UserSidebar from "@/src/components/shared/user/Sidebar/Sidebar";
import { IChildren } from "@/src/types/global";
import React from "react";

const AccountPayout = ({ children }: IChildren) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <BreadCrumbs />
      <main className="flex-grow px-2 lg:px-0 pt-[110px] h-full">
        <div className="container grid grid-cols-12 gap-6 pb-14">
          <UserSidebar />
          {children}
        </div>
      </main>
    </div>
  );
};

export default AccountPayout;
