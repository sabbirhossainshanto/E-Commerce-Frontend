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
} from "@nextui-org/react";
import { EditIcon } from "../../icons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  useGetMyProducts,
  useGetSingleProduct,
  useUpdateProduct,
} from "@/src/hooks/product";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";

export default function UpdateProduct({ id }: { id: string }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [images, setImages] = useState<File[]>([]);
  const { refetch } = useGetMyProducts();
  const { data: product } = useGetSingleProduct(id);
  const { mutate: updateProduct } = useUpdateProduct();
  const { handleSubmit, register, reset } = useForm();

  const handleUpdateProduct: SubmitHandler<FieldValues> = (values) => {
    if (product?.data?.id) {
      const payload = Object.fromEntries(
        Object.entries({
          name: values?.name,
          description: values?.description,
          discount: Number(values?.discount),
          inventory: Number(values?.inventory),
          price: Number(values?.price),
        }).filter(([_, value]) => value != null)
      );

      const formData = new FormData();
      formData.append("data", JSON.stringify(payload));
      for (let image of images) {
        formData.append("file", image);
      }
      updateProduct(
        { formData, id: product?.data?.id },
        {
          onSuccess(data) {
            if (data?.success) {
              toast.success(data?.message);
              refetch();
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
        name: product?.data?.name,
        description: product?.data?.description,
        discount: product?.data?.discount,
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
        size="2xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(handleUpdateProduct)}>
              <ModalHeader className="flex flex-col gap-1">
                Edit Product
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
                </div>
                <div className="flex items-center gap-5">
                  <Input
                    labelPlacement="outside"
                    {...register("inventory", { required: true })}
                    label="Inventory"
                    placeholder="Inventory"
                    variant="bordered"
                  />
                  <Input
                    labelPlacement="outside"
                    {...register("discount")}
                    label="Discount"
                    placeholder="Discount"
                    variant="bordered"
                  />
                </div>

                <Input
                  {...register("description", { required: true })}
                  labelPlacement="outside"
                  label="Description"
                  placeholder="Description"
                  variant="bordered"
                />

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
                  Update
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
