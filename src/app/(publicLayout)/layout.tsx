import { Navbar } from "@/src/components/navbar";
import { IChildren } from "@/src/types/global";
import React from "react";

const layout = ({ children }: IChildren) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default layout;
