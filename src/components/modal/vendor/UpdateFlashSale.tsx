"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  DatePicker,
  DateValue,
  SelectItem,
  Select,
} from "@nextui-org/react";
import { EditIcon } from "../../icons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useGetSingleProduct, useUpdateProduct } from "@/src/hooks/product";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";
import { useUser } from "@/src/context/user.provider";
import { useQueryClient } from "@tanstack/react-query";
import { TbFidgetSpinner } from "react-icons/tb";
import { useGetAllCategory } from "@/src/hooks/category";

export default function UpdateFlashSale({ id }: { id: string }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const queryClient = useQueryClient();
  const { user } = useUser();
  const [sale_start_time, setSaleStartTime] = useState<DateValue | undefined>(
    undefined
  );

  const [sale_end_time, setSaleEndTime] = useState<DateValue | undefined>(
    undefined
  );

  const { data: categories } = useGetAllCategory([]);
  const [images, setImages] = useState<File[]>([]);
  const { data: product } = useGetSingleProduct(id);
  const { mutate: updateProduct, isPending, isSuccess } = useUpdateProduct();
  const { handleSubmit, register, reset } = useForm();

  const handleUpdateProduct: SubmitHandler<FieldValues> = (values) => {
    if (product?.data?.id) {
      const payload = Object.fromEntries(
        Object.entries({
          discount_percentage: values?.discount_percentage,
          sale_end_time: sale_end_time
            ? new Date(
                sale_end_time.year,
                sale_end_time.month - 1,
                sale_end_time.day
              ).toISOString()
            : undefined,
          sale_start_time: sale_start_time
            ? new Date(
                sale_start_time.year,
                sale_start_time.month - 1,
                sale_start_time.day
              ).toISOString()
            : undefined,
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
      updateProduct(
        { formData, id: product?.data?.id },
        {
          onSuccess(data) {
            if (data?.success) {
              toast.success(data?.message);
              if (user?.role === "VENDOR") {
                queryClient.invalidateQueries({ queryKey: ["my-products"] });
              } else {
                queryClient.invalidateQueries({ queryKey: ["all-products"] });
              }

              onClose();
            } else {
              toast.error(data?.message);
            }
          },
        }
      );
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages((prev) => [...prev, files[0]]);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setImages([]);
    }
    if (product?.data) {
      reset({
        categoryId: product?.data?.categoryId,
        discount_percentage: product?.data?.discount_percentage,
        sale_start_time: product?.data?.sale_start_time,
        sale_end_time: product?.data?.sale_end_time,
        name: product?.data?.name,
        description: product?.data?.description,
        inventory: product?.data?.inventory,
        price: product?.data?.price,
      });
    }
  }, [isOpen, product]);
  return (
    <>
      <button
        onClick={onOpen}
        className="text-lg text-default-400 cursor-pointer active:opacity-50"
      >
        <EditIcon />
      </button>
      <Modal
        size="4xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(handleUpdateProduct)}>
              <ModalHeader className="flex flex-col gap-1">
                Edit Flash Sale
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center gap-5">
                  <Input
                    labelPlacement="outside"
                    {...register("name", { required: true })}
                    label="Name"
                    placeholder="Name"
                    variant="bordered"
                  />
                  <Input
                    labelPlacement="outside"
                    {...register("price", { required: true })}
                    label="Price"
                    placeholder="Price"
                    variant="bordered"
                  />
                  <Input
                    labelPlacement="outside"
                    {...register("inventory", { required: true })}
                    label="Inventory"
                    placeholder="Inventory"
                    variant="bordered"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <Input
                    {...register("description", { required: true })}
                    labelPlacement="outside"
                    label="Description"
                    placeholder="Description"
                    variant="bordered"
                  />
                  {categories?.data && (
                    <Select
                      label="Product Category"
                      labelPlacement="outside"
                      {...register("categoryId", { required: true })}
                      variant="bordered"
                      placeholder="Product Category"
                      className="max-w-full"
                      aria-label="Role"
                    >
                      {categories?.data?.map((category) => (
                        <SelectItem key={category.id}>
                          {category?.name}
                        </SelectItem>
                      ))}
                    </Select>
                  )}
                  <Input
                    labelPlacement="outside"
                    {...register("discount_percentage", { required: true })}
                    type="number"
                    label="Discount Percentage"
                    placeholder="Discount Percentage"
                    variant="bordered"
                  />
                </div>

                <div className="grid grid-cols-3 items-center gap-5">
                  <DatePicker
                    onChange={(value) => setSaleStartTime(value)}
                    labelPlacement="outside"
                    variant="bordered"
                    label="Sale Start Time"
                    className="max-w-[284px]"
                  />
                  <DatePicker
                    onChange={(value) => setSaleEndTime(value)}
                    labelPlacement="outside"
                    variant="bordered"
                    label="Sale End Time"
                    className="max-w-[284px]"
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
                    {product?.data?.images &&
                      images?.length === 0 &&
                      product?.data?.images?.map((img, i) => (
                        <Image
                          key={i}
                          height={120}
                          width={120}
                          src={img}
                          alt="Image"
                          className="h-[120px] w-[120px] object-cover m-2"
                        />
                      ))}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  {isPending && !isSuccess ? (
                    <span className="flex items-center gap-2 justify-center text-base">
                      <span>Please Wait</span>{" "}
                      <TbFidgetSpinner className="animate-spin" />
                    </span>
                  ) : (
                    <span> Update</span>
                  )}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
