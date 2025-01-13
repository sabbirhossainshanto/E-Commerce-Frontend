"use client";

import { useGetAllCategory } from "@/src/hooks/category";
import { useCreateProduct } from "@/src/hooks/product";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useQueryClient } from "@tanstack/react-query";
import { Plus, TrashIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TbFidgetSpinner } from "react-icons/tb";
import { toast } from "sonner";

const CreateProduct = () => {
  const [images, setImages] = useState<File[]>([]);
  const { mutate: createProduct, isPending, isSuccess } = useCreateProduct();
  const queryClient = useQueryClient();
  const { data: categories } = useGetAllCategory([]);
  const { handleSubmit, register, reset, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "features",
  });
  const handleFieldAppend = () => {
    append({ name: "features" });
  };

  const handleUpdateProduct: SubmitHandler<FieldValues> = (values) => {
    const payload = Object.fromEntries(
      Object.entries({
        features: values?.features?.map(
          (feature: { value: string }) => feature?.value
        ),
        categoryId: values?.categoryId,
        name: values?.name,
        description: values?.description,
        inventory: Number(values?.inventory),
        price: Number(values?.price),
      }).filter(([_, value]) => value != null)
    );

    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));
    for (let image of images) {
      formData.append("files", image);
    }
    createProduct(formData, {
      onSuccess(data) {
        if (data?.success) {
          reset();
          setImages([]);
          toast.success(data?.message);
          queryClient.invalidateQueries({ queryKey: ["my-products"] });
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
      setImages((prev) => [...prev, files[0]]);
    }
  };

  return (
    <div className="col-span-12 lg:col-span-9 mt-4 bg-white p-5 shadow-md rounded-sm">
      <form onSubmit={handleSubmit(handleUpdateProduct)} className="space-y-5">
        <div className="flex items-center gap-5">
          <Input
            radius="sm"
            labelPlacement="outside"
            {...register("name", { required: true })}
            label="Name"
            placeholder="Name"
            variant="bordered"
          />
          <Input
            radius="sm"
            labelPlacement="outside"
            type="number"
            {...register("price", { required: true })}
            label="Price"
            placeholder="Price"
            variant="bordered"
          />
        </div>
        <div className="flex items-center gap-5">
          <Input
            radius="sm"
            type="number"
            labelPlacement="outside"
            {...register("inventory", { required: true })}
            label="Inventory"
            placeholder="Inventory"
            variant="bordered"
          />
          {categories?.data && (
            <Select
              radius="sm"
              labelPlacement="outside"
              label="Product Category"
              {...register("categoryId", { required: true })}
              variant="bordered"
              placeholder="Product Category"
              className="max-w-full"
              aria-label="Role"
            >
              {categories?.data?.map((category) => (
                <SelectItem key={category.id}>{category?.name}</SelectItem>
              ))}
            </Select>
          )}
        </div>
        <div className="flex items-center gap-5">
          <div className="w-full">
            <div className="flex justify-between items-center w-full">
              <h1 className="text-xl">Add Features</h1>
              <Button
                radius="sm"
                isIconOnly
                onClick={() => handleFieldAppend()}
              >
                <Plus />
              </Button>
            </div>

            <div className="space-y-5">
              {fields.map((field, index) => (
                <div key={field.id} className="flex gap-2 items-center">
                  <Input
                    {...register(`features.${index}.value`, { required: true })}
                    radius="sm"
                    labelPlacement="outside"
                    label="Features"
                    placeholder="Features"
                    variant="bordered"
                  />
                  <Button
                    isIconOnly
                    className="size-5 mt-auto"
                    onClick={() => remove(index)}
                  >
                    <TrashIcon />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <Input
            radius="sm"
            {...register("description", { required: true })}
            labelPlacement="outside"
            label="Description"
            placeholder="Description"
            variant="bordered"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="Image" className="text-xs">
            Product Images
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            name="imageUrl"
            id="upload"
            className="hidden"
            multiple
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle
                size={30}
                className="mt-3 cursor-pointer"
                color="#555"
              />
            </label>
            {images &&
              images?.map((img, i) => (
                <Image
                  key={i}
                  height={120}
                  width={120}
                  src={URL.createObjectURL(img)}
                  alt="Image"
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))}
          </div>
        </div>

        <Button radius="sm" color="danger" variant="flat">
          Cancel
        </Button>
        <Button radius="sm" className="ml-5" type="submit" color="primary">
          {isPending && !isSuccess ? (
            <span className="flex items-center gap-2 justify-center text-base">
              <span>Please Wait</span>{" "}
              <TbFidgetSpinner className="animate-spin" />
            </span>
          ) : (
            <span> Create Product</span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default CreateProduct;
