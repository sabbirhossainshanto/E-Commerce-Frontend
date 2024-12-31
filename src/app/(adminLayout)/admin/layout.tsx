"use client";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import DesktopSidebar from "@/src/components/shared/Sidebar/DesktopSidebar";
import { IChildren } from "@/src/types/global";
import { useState } from "react";
import { useUser } from "@/src/context/user.provider";
import Image from "next/image";
import MobileSidebar from "@/src/components/shared/Sidebar/MobileSidebar";
import { adminNavlist } from "@/src/const/admin.navlist";

const AdminLayout = ({ children }: IChildren) => {
  const { user } = useUser();
  const [collapseSidebar, setCollapseSidebar] = useState<boolean>(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col h-screen">
      <main className="flex">
        <DesktopSidebar
          navLists={adminNavlist}
          collapseSidebar={collapseSidebar}
        />
        <MobileSidebar
          navLists={adminNavlist}
          showMobileSidebar={showMobileSidebar}
          setShowMobileSidebar={setShowMobileSidebar}
        />
        <div
          className={`transition-all duration-300 w-full ${collapseSidebar ? "lg:ml-[100px]" : "lg:ml-[300px]"}`}
        >
          <header
            className={`fixed top-0 right-0 z-[9999]  w-full bg-white shadow-xl h-[70px]  flex items-center justify-between transition-all duration-300  px-10 ${!collapseSidebar ? "lg:w-[calc(100%-300px)] lg:left-[300px]" : "lg:w-[calc(100%-100px)] lg:left-[100px]"}`}
          >
            <div>
              <HiOutlineMenuAlt2
                cursor="pointer"
                size={30}
                onClick={() => {
                  setCollapseSidebar((prev) => !prev);
                  setShowMobileSidebar(true);
                }}
              />
            </div>
            <div className="h-full">
              {user?.profilePhoto && (
                <div className="bg-[#f3f3f9] h-full flex flex-col items-center justify-center px-5 ">
                  <Image
                    className="rounded-full"
                    src={user?.profilePhoto}
                    height={50}
                    width={50}
                    alt="profile"
                  />
                </div>
              )}
            </div>
          </header>
          <div className="pt-[75px] px-10 w-full">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
