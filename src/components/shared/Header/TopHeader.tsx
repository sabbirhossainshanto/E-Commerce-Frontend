import Link from "next/link";
import { ThemeSwitch } from "../../theme-switch";
import Search from "./Search";

const TopHeader = () => {
  return (
    <header className="py-3 hidden lg:block">
      <div className="container mx-auto flex justify-between items-center">
        {/*  <!-- logo --> */}
        <Link href="/" className="w-[125px] text-3xl font-medium">
          <span className="text-secondary">Click</span>
          <span>Shop</span>
        </Link>
        <Search />
        <div className="flex items-center">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
