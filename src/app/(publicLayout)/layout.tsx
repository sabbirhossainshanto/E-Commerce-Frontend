import Footer from "@/src/components/shared/Footer/Footer";
import { Navbar } from "@/src/components/shared/Header/Navbar";
import { IChildren } from "@/src/types/global";
import React from "react";

const layout = ({ children }: IChildren) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
