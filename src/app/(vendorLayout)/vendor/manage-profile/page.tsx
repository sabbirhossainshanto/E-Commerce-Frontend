"use client";

import { useUser } from "@/src/context/user.provider";
import { useUpdateProfile } from "@/src/hooks/profile";
import { logOut } from "@/src/services/Auth";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb";
import { toast } from "sonner";

const ManageProfile = () => {
  const { user } = useUser();
  const router = useRouter();
  const { setIsUserLoading } = useUser();
  const { handleSubmit, register, reset } = useForm();
  const [image, setImage] = useState<File | null>(null);
  const { mutate: updateProfile, isPending, isSuccess } = useUpdateProfile();

  const handleUpdateProfile: SubmitHandler<FieldValues> = (value) => {
    const payload = { name: value?.name };
    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));
    if (image) {
      formData.append("file", image);
    }
    updateProfile(formData, {
      onSuccess(data) {
        if (data?.success) {
          toast.success(data?.message);
          logOut();
          setIsUserLoading(true);
          reset();
          setImage(null);
          router.push("/login");
        } else {
          toast.error(data?.message);
        }
      },
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImage(files[0]);
    }
  };

  useEffect(() => {
    if (user) {
      reset({
        name: user?.name,
        email: user?.email,
        role: user?.role,
      });
    }
  }, [user]);

  return (
    <div className="col-span-12 lg:col-span-9">
      <form
        onSubmit={handleSubmit(handleUpdateProfile)}
        className=" box_shadow p-6"
      >
        {/* <UpdateProfile /> */}

        <div className="flex items-center gap-10">
          <div className="mt-4 relative h-[200px] w-[200px]">
            {user?.profilePhoto && !image && (
              <img
                alt="Profile"
                className="mt-5 rounded-full object-cover bg-gray-200 p-3 w-full"
                src={user?.profilePhoto}
              />
            )}
            {image && (
              <Image
                height={200}
                width={200}
                src={URL.createObjectURL(image)}
                alt="Image"
                className="mt-5 rounded-full object-cover bg-gray-200 p-3"
              />
            )}
          </div>

          <label className="cursor-pointer " htmlFor="profilePhoto">
            <div className="default_btn ">Upload New</div>
            <input
              onChange={handleImageChange}
              hidden
              id="profilePhoto"
              type="file"
            />
          </label>
        </div>
        <div className="mt-16 flex items-center gap-5">
          <Input
            variant="bordered"
            {...register("name", { required: true })}
            label="Name"
            placeholder="Enter Name"
          />
          <Input
            variant="bordered"
            {...register("email", { required: true })}
            isRequired
            label="Email"
            placeholder="Enter Email"
            readOnly
            disabled
          />
        </div>

        <button type="submit" className="default_btn mt-5">
          {" "}
          {isPending && !isSuccess ? (
            <span className="flex items-center gap-2 justify-center text-base">
              <span>Please Wait</span>{" "}
              <TbFidgetSpinner className="animate-spin" />
            </span>
          ) : (
            <span> Save Changes</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ManageProfile;
