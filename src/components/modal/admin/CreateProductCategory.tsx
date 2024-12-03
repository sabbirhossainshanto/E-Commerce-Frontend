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

export default function CreateProductCategory() {
  const { handleSubmit, register } = useForm();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { mutate: createCategory } = useCreateCategory();
  const { refetch } = useGetAllCategory();

  const handleCreateCategory: SubmitHandler<FieldValues> = (value) => {
    createCategory(
      { name: value?.name },
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
