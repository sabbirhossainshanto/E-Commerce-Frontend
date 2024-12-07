"use client";
import { useUser } from "@/src/context/user.provider";
import Image from "next/image";
import React from "react";

const UserHomePage = () => {
  const { user } = useUser();
  return (
    <div className="col-span-12 lg:col-span-9">
      <div className="account_cont_wrap">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 box_shadow p-6 min-h-[225px]">
            <div className="flex justify-between items-center">
              <h4 className="text-lg">Personal Profile</h4>
              <p className="text-primary">Edit</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold">{user?.name}</p>
              <p>{user?.email}</p>
              {user?.profilePhoto && (
                <Image
                  height={100}
                  width={100}
                  alt="Profile"
                  className="mt-5"
                  src={user?.profilePhoto}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
