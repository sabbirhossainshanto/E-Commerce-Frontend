import img from "@/src/assets/img";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Sponsors = () => {
  return (
    <div className="my-20 container w-full  cursor-pointer rounded-xl">
      <h2 className="text-[22px] sm:text-[32px] font-medium ">Sponsored By</h2>

      <Marquee>
        <div className="flex justify-between w-full gap-20 mt-5">
          <Image height={100} width={100} src={img.dell} alt="" />
          <Image height={100} width={100} src={img.sony} alt="" />
          <Image height={100} width={100} src={img.tpLink} alt="" />
          <Image height={100} width={100} src={img.microsoft} alt="" />
          <Image height={100} width={100} src={img.nike} alt="" />
          <Image height={100} width={100} src={img.daraz} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Sponsors;
