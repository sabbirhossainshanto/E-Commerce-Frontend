"use client";

import { useUser } from "@/src/context/user.provider";
import { logOut } from "@/src/services/Auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const { user, setIsUserLoading } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    logOut();
    setIsUserLoading(true);
    router.push("/");
  };

  return (
    <div className="col-span-12 lg:col-span-3 relative">
      <div>
        <div className="box_shadow px-4 py-2 flex gap-5 items-center">
          <div className="w-12 border border-[#E9E4E4] rounded-full p-1">
            <Link href="my-account.html">
              {user?.profilePhoto && (
                <Image
                  height={100}
                  width={100}
                  loading="lazy"
                  src={user?.profilePhoto}
                  alt="user"
                />
              )}
            </Link>
          </div>

          <div className="acprof_cont">
            <p>Hello,</p>
            <h4>{user?.name}</h4>
          </div>

          <button className="flex ml-auto border border-primary -mt-2 rounded  p-1 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="w-[300px] lg:w-full lg:mt-6 box_shadow px-4 py-6  absolute lg:static lg:visible lg:opacity-100 z-10 transition-all duration-300 opacity-0 invisible top-0">
          <div className="border-b">
            <Link
              href="my-account.html"
              className="flex gap-2 items-center text-lg lg:text-base xl:text-lg font-medium group"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M12 5c-1.645 0-3 1.355-3 3c0 .353.073.684.188 1H4v6h1v13h22V15h1V9h-5.188c.115-.316.188-.647.188-1c0-1.645-1.355-3-3-3c-1.75 0-2.94 1.33-3.72 2.438c-.103.148-.188.292-.28.437c-.092-.145-.177-.29-.28-.438C14.94 6.33 13.75 5 12 5zm0 2c.626 0 1.436.67 2.063 1.563c.152.217.13.23.25.437H12c-.565 0-1-.435-1-1s.435-1 1-1zm8 0c.565 0 1 .435 1 1s-.435 1-1 1h-2.313c.12-.206.098-.22.25-.438C18.564 7.672 19.375 7 20 7zM6 11h20v2h-9v-1h-2v1H6v-2zm1 4h18v11h-8V16h-2v10H7V15z"
                  ></path>
                </svg>
              </span>
              Manage Shop
            </Link>
            <Link
              href="/vendor/manage-shop"
              className="pl-7 pt-1 block hover:text-primary"
            >
              Manage Shop
            </Link>
          </div>
          <div className="border-b mt-3">
            <Link
              href="my-account.html"
              className="flex gap-2 items-center text-lg lg:text-base xl:text-lg font-medium  group"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 3H2c-1.09.04-1.96.91-2 2v14c.04 1.09.91 1.96 2 2h20c1.09-.04 1.96-.91 2-2V5a2.074 2.074 0 0 0-2-2m0 16H2V5h20v14m-8-2v-1.25c0-1.66-3.34-2.5-5-2.5c-1.66 0-5 .84-5 2.5V17h10M9 7a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 9 12a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 9 7m5 0v1h6V7h-6m0 2v1h6V9h-6m0 2v1h4v-1h-4"
                  ></path>
                </svg>
              </span>
              Product Management
            </Link>
            <Link
              href="/vendor/manage-product"
              className="pl-7 pt-1 block hover:text-primary"
            >
              Manage Product
            </Link>
          </div>

          <div className="mt-4">
            <button
              onClick={handleLogout}
              className="flex gap-2 items-center text-[18px] font-medium hover:text-primary group"
            >
              <span className="group-hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M10.5 2.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6ZM13.743 4a.5.5 0 1 0-.499.867a6.5 6.5 0 1 1-6.494.004a.5.5 0 1 0-.5-.866A7.5 7.5 0 1 0 13.743 4Z"
                  ></path>
                </svg>
              </span>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
