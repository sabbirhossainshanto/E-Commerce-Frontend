"use client";

import {
  Button,
  Input,
  Select,
  SelectItem,
  DateValue,
  DatePicker,
} from "@nextui-org/react";
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import { useCreateProduct } from "@/src/hooks/product";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";
import { TbFidgetSpinner } from "react-icons/tb";
import { useGetAllCategory } from "@/src/hooks/category";
import { useQueryClient } from "@tanstack/react-query";
import { Plus, TrashIcon } from "lucide-react";

export default function CreateFlashSale() {
  const queryClient = useQueryClient();
  const { handleSubmit, register, control, reset } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "features",
  });
  const handleFieldAppend = () => {
    append({ name: "features" });
  };

  const [sale_start_time, setSaleStartTime] = useState<DateValue | undefined>(
    undefined
  );
  const [sale_end_time, setSaleEndTime] = useState<DateValue | undefined>(
    undefined
  );
  const [images, setImages] = useState<File[]>([]);
  const { mutate: createProduct, isPending, isSuccess } = useCreateProduct();
  const { data: categories } = useGetAllCategory([]);

  const handleUpdateProduct: SubmitHandler<FieldValues> = (values) => {
    if (sale_end_time && sale_start_time) {
      const payload = Object.fromEntries(
        Object.entries({
          isFlashSale: true,
          features: values?.features?.map(
            (feature: { name: string }) => feature?.name
          ),
          categoryId: values?.categoryId,
          name: values?.name,
          description: values?.description,
          inventory: Number(values?.inventory),
          price: Number(values?.price),
          discount_percentage: Number(values?.discount_percentage),
          sale_end_time: new Date(
            sale_end_time.year,
            sale_end_time.month - 1,
            sale_end_time.day
          ).toISOString(),
          sale_start_time: new Date(
            sale_start_time.year,
            sale_start_time.month - 1,
            sale_start_time.day
          ).toISOString(),
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
            toast.success(data?.message);
            queryClient.invalidateQueries({ queryKey: ["my-products"] });
          } else {
            toast.error(data?.message);
          }
        },
      });
    } else {
      toast.error("Date is required");
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages((prev) => [...prev, files[0]]);
    }
  };

  return (
    <div className="col-span-12 lg:col-span-9 my-5 bg-white shadow-md p-5 rounded-sm">
      <form className="space-y-5" onSubmit={handleSubmit(handleUpdateProduct)}>
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
            {...register("price", { required: true })}
            label="Price"
            placeholder="Price"
            variant="bordered"
          />
        </div>
        <div className="flex items-center gap-5">
          <Input
            radius="sm"
            labelPlacement="outside"
            {...register("inventory", { required: true })}
            label="Inventory"
            placeholder="Inventory"
            variant="bordered"
          />
          <Input
            radius="sm"
            {...register("description", { required: true })}
            labelPlacement="outside"
            label="Description"
            placeholder="Description"
            variant="bordered"
          />
        </div>

        <div className="flex items-center gap-5">
          {categories?.data && (
            <Select
              radius="sm"
              label="Product Category"
              labelPlacement="outside"
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
          <Input
            radius="sm"
            labelPlacement="outside"
            {...register("discount_percentage", { required: true })}
            type="number"
            label="Discount Percentage"
            placeholder="Discount Percentage"
            variant="bordered"
          />
        </div>
        <div className="flex items-center gap-5">
          <DatePicker
            radius="sm"
            onChange={(value) => setSaleStartTime(value)}
            labelPlacement="outside"
            variant="bordered"
            label="Sale Start Time"
          />
          <DatePicker
            radius="sm"
            onChange={(value) => setSaleEndTime(value)}
            labelPlacement="outside"
            variant="bordered"
            label="Sale End Time"
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-xl">Add Features</h1>
            <Button isIconOnly onClick={() => handleFieldAppend()}>
              <Plus />
            </Button>
          </div>

          <div className="space-y-5">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center">
                <Input
                  radius="sm"
                  labelPlacement="outside"
                  label="Features"
                  placeholder="Features"
                  variant="bordered"
                  name={`features.${index}.value`}
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

        <Button
          radius="sm"
          onClick={() => reset()}
          color="danger"
          variant="flat"
        >
          Reset
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
}
