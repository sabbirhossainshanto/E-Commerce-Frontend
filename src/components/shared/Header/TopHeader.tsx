import Link from "next/link";
import { ThemeSwitch } from "../../theme-switch";

const TopHeader = () => {
  return (
    <header className="py-3 hidden lg:block">
      <div className="container mx-auto flex justify-between items-center">
        {/*  <!-- logo --> */}
        <Link href="/" className="w-[125px] text-2xl">
          <span className="text-primary">Click</span>
          <span>Shop</span>
        </Link>

        <div className="flex items-center">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
