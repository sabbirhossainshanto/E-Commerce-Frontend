"use client";

import { useUser } from "@/src/context/user.provider";
import { useUserLogin } from "@/src/hooks/auth";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaGreaterThan } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import { TbFidgetSpinner } from "react-icons/tb";
import { toast } from "sonner";

const Login = () => {
  const [inputType, setInputType] = useState<"password" | "text">("password");
  const { mutate: handleLogin, isPending, isSuccess } = useUserLogin();
  const { setIsUserLoading } = useUser();
  const router = useRouter();
  const { handleSubmit, register, reset } = useForm();

  const handleSignIn: SubmitHandler<FieldValues> = async (data) => {
    handleLogin(data, {
      onSuccess(data) {
        if (data?.success) {
          setIsUserLoading(true);
          toast.success(data?.message);
          router.push("/");
        } else {
          toast.error(data?.message);
        }
      },
      onError(error) {
        toast.error(error?.message);
      },
    });
  };

  return (
    <div className="py-10 ">
      <div className="flex items-center gap-2 container">
        <MdOutlineHome
          onClick={() => router.push("/")}
          size={20}
          className="text-primary cursor-pointer"
        />
        <FaGreaterThan className="" />
        <span className="text-lg">Login</span>
      </div>

      <div className="w-full max-w-[500px] mx-auto bg-white shadow-md rounded px-[30px] py-[24px] mb-14">
        <h4 className="text-[28px] uppercase font-semibold mb-4">Login</h4>
        <h4 className="text-lg uppercase font-semibold mb-4">
          Demo Credential:
        </h4>
        <div className="flex items-center gap-3 mb-4">
          <Button
            radius="sm"
            color="primary"
            onClick={() =>
              reset({
                email: "jiinat@gmail.com",
                password: "jiinat",
              })
            }
          >
            User Credential
          </Button>
          <Button
            radius="sm"
            color="primary"
            onClick={() =>
              reset({
                email: "sabbirhossainshanto3@gmail.com",
                password: "sabbir2001",
              })
            }
          >
            Vendor Credential
          </Button>
          <Button
            radius="sm"
            color="primary"
            onClick={() =>
              reset({
                email: "sabbirshnt@gmail.com",
                password: "sabbir2001",
              })
            }
          >
            Admin Credential
          </Button>
        </div>

        <form onSubmit={handleSubmit(handleSignIn)}>
          <div>
            <div>
              <label htmlFor="email" className="block">
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                {...register("email", { required: true })}
                className="w-full border border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-1 py-3 px-2"
                type="email"
                placeholder="example@mail.com"
              />
            </div>
            <div className="mt-4 relative">
              <label htmlFor="password" className="block">
                Password <span className="text-primary">*</span>
              </label>
              <input
                {...register("password", { required: true })}
                className="w-full border border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-1 py-3 px-2"
                type={inputType}
                placeholder="type password"
              />
              {inputType === "password" ? (
                <IoMdEyeOff
                  onClick={() => setInputType("text")}
                  className="absolute top-12 right-5 cursor-pointer"
                  size={20}
                />
              ) : (
                <IoMdEye
                  onClick={() => setInputType("password")}
                  className="absolute top-12 right-5 cursor-pointer"
                  size={20}
                />
              )}
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-3 items-center">
                <input
                  defaultChecked
                  type="checkbox"
                  className="focus:ring-0 text-primary border border-primary focus:bg-primary focus:outline-none"
                />
                <label htmlFor="save-default" className="text-sm sm:text-base">
                  Remember Me
                </label>
              </div>
              <div>
                <Link
                  href="/forgot-password"
                  className="text-primary text-sm sm:text-base"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="default_btn rounded w-full hover:bg-white hover:border-primary hover:text-primary"
            >
              {isPending && !isSuccess ? (
                <span className="flex items-center gap-2 justify-center text-base">
                  <span>Please Wait</span>{" "}
                  <TbFidgetSpinner className="animate-spin" />
                </span>
              ) : (
                <span> Login</span>
              )}
            </button>
          </div>
        </form>

        {/* <div className="flex justify-center mt-4 relative after:absolute after:w-full after:h-[1px] after:bg-gray-300 after:top-3">
          <p className="px-2 bg-white z-10">Or login in with</p>
        </div>

        <div className="flex gap-5 mt-4">
          <button className="default_btn w-full rounded bg-facebook hover:bg-white hover:border-[#3B5999] hover:text-[#3B5999]">
            <i className="fab fa-facebook-f me-2"></i> Facebook
          </button>
          <button className="default_btn w-full bg-google hover:bg-white hover:border-[#D85040] hover:text-[#D85040]">
            <i className="fab fa-google me-2"></i> Google
          </button>
        </div> */}

        <p className="text-center mt-3 mb-0">
          {"Don't"} have an account.?{" "}
          <Link href="/register" className="text-primary">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
