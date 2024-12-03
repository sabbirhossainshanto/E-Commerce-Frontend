"use client";

import Link from "next/link";
import React from "react";

const AdminHomePage = () => {
  return (
    <div className="col-span-12 lg:col-span-9">
      <div className="account_cont_wrap">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 box_shadow p-6 min-h-[225px]">
            <div className="flex justify-between items-center">
              <h4 className="text-lg">Personal Profile</h4>
              <Link href="profile-information.html" className="text-primary">
                Edit
              </Link>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Russell Ahmed</p>
              <p>example@mail.com</p>
              <p>(123) 456-789</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 box_shadow p-6 min-h-[225px]">
            <div className="flex justify-between items-center">
              <h4 className="text-lg">Shipping Address</h4>
              <Link href="profile-information.html" className="text-primary">
                Edit
              </Link>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Ralph Bohner</p>
              <p>3891 Ranchview Dr.</p>
              <p>Richardson, Califora</p>
              <p>(123) 456-789</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 box_shadow p-6 min-h-[225px]">
            <div className="flex justify-between items-center">
              <h4 className="text-lg">Billing Address</h4>
              <Link href="profile-information.html" className="text-primary">
                Edit
              </Link>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Ralph Bohner</p>
              <p>3891 Ranchview Dr.</p>
              <p>Richardson, Califora</p>
              <p>(123) 456-789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
