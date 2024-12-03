import img from "@/src/assets/img";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitch } from "../../theme-switch";

const TopHeader = () => {
  return (
    <header className="py-3 hidden lg:block">
      <div className="container mx-auto flex justify-between items-center">
        {/*  <!-- logo --> */}
        <Link href="/" className="w-[125px]">
          <Image
            height={50}
            width={50}
            src={img.logo}
            className="w-full object-cover"
            alt="logo"
          />
        </Link>

        <div className="flex items-center">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
