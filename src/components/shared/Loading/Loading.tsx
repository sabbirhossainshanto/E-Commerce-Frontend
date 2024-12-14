import img from "@/src/assets/img";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        height={500}
        width={500}
        src={img.loader}
        alt="Loader"
        className="w-[30rem] h-[30rem] object-cover"
      />
    </div>
  );
};

export default Loading;
