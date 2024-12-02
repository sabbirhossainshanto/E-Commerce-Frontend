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
        {/*   <!-- logo end --> */}

        {/*     <!-- right-content --> */}
        <div className="flex items-center">
          {/*   <!-- login/register --> */}
          <div className="mr-4 flex items-center">
            <Link
              href="/login"
              className="text-secondary text-sm hover:text-primary font-medium leading-[26px] transition duration-200"
            >
              Login
            </Link>
            <span className="text-secondary text-sm">/</span>
            <Link
              href="/register"
              className="text-secondary text-sm hover:text-primary font-medium leading-[26px] transition duration-200"
            >
              Register
            </Link>
          </div>
          <ThemeSwitch />
        </div>
        {/*   <!-- right-content end--> */}
      </div>
    </header>
  );
};

export default TopHeader;
