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
import { PlusIcon } from "../../icons";
import { useCreateCategory, useGetAllCategory } from "@/src/hooks/category";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import Image from "next/image";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function CreateProductCategory() {
  const { handleSubmit, register, reset } = useForm();
  const [image, setImage] = useState<File | null>(null);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { mutate: createCategory } = useCreateCategory();
  const { refetch } = useGetAllCategory();

  const handleCreateCategory: SubmitHandler<FieldValues> = (value) => {
    const payload = { name: value?.name };
    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));
    if (image) {
      formData.append("file", image);
    }
    createCategory(formData, {
      onSuccess(data) {
        if (data?.success) {
          toast.success(data?.message);
          refetch();
          reset();
          setImage(null);
          onClose();
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

  return (
    <>
      <Button
        onPress={onOpen}
        className="default_btn"
        endContent={<PlusIcon />}
      >
        Add New
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(handleCreateCategory)}>
              <ModalHeader className="flex flex-col gap-1">
                Create Product Category
              </ModalHeader>
              <ModalBody>
                <Input
                  {...register("name", { required: true })}
                  label="Category"
                  placeholder="Enter category name"
                  variant="bordered"
                />

                <div className="mt-4">
                  <label htmlFor="Image" className="text-xs">
                    Category Image
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
                    {image && (
                      <Image
                        height={120}
                        width={120}
                        src={URL.createObjectURL(image)}
                        alt="Image"
                        className="h-[120px] w-[120px] object-cover m-2"
                      />
                    )}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Create
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
