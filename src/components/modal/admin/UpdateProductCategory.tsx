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
import {
  useGetAllCategory,
  useGetSingleCategory,
  useUpdateSingleCategory,
} from "@/src/hooks/category";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect } from "react";

export default function UpdateProductCategory({ id }: { id: string }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { data: category } = useGetSingleCategory(id);
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      name: category?.data?.name,
    },
  });
  const { refetch: refetchCategories } = useGetAllCategory();
  const { mutate: updateCategory } = useUpdateSingleCategory();

  const handleUpdateCategory: SubmitHandler<FieldValues> = (value) => {
    if (category?.data?.id) {
      const payload = {
        name: value?.name,
        id: category?.data?.id,
      };
      updateCategory(payload, {
        onSuccess(data) {
          if (data?.success) {
            toast.success(data?.message);
            refetchCategories();
            onClose();
          } else {
            toast.error(data?.message);
          }
        },
      });
    }
  };

  useEffect(() => {
    reset({
      name: category?.data?.name,
    });
  }, [category]);

  return (
    <>
      <button
        onClick={onOpen}
        className="text-lg text-default-400 cursor-pointer active:opacity-50"
      >
        <EditIcon />
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(handleUpdateCategory)}>
              <ModalHeader className="flex flex-col gap-1">
                Edit Product Category
              </ModalHeader>
              <ModalBody>
                <Input
                  {...register("name", { required: true })}
                  label="Category"
                  placeholder="Enter category name"
                  variant="bordered"
                />
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
