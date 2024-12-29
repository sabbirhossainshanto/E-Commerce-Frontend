import img from "@/src/assets/img";
import Image from "next/image";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
const Advertisement = () => {
  return (
    <div className="container mt-20">
      <div className="grid gap-10 grid-cols-2 sm:grid-cols-4  place-content-around">
        <div className="flex flex-col items-center gap-4 border border-gray-300 rounded- p-3">
          <RiSecurePaymentLine size={50} />
          <p>100% Payment Secured</p>
        </div>
        <div className="flex flex-col items-center gap-4 border border-gray-300 rounded- p-3">
          <Image src={img.support} height={50} width={50} alt="support" />
          <p>24hours/7days Support</p>
        </div>
        <div className="flex flex-col items-center gap-4 border border-gray-300 rounded- p-3">
          <SiAdguard size={50} />
          <p>Best Price Guaranteed</p>
        </div>
        <div className="flex flex-col items-center gap-4 border border-gray-300 rounded- p-3">
          <TbTruckDelivery size={50} />
          <p>Free Delivery service</p>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
