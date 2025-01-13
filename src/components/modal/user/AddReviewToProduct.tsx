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
  Select,
  SelectItem,
} from "@nextui-org/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { TbFidgetSpinner } from "react-icons/tb";
import { useAddReviewToProduct } from "@/src/hooks/review";
import { useQueryClient } from "@tanstack/react-query";

export default function AddReviewToProduct({
  productId,
}: {
  productId: string;
}) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { mutate: addReview, isSuccess, isPending } = useAddReviewToProduct();
  const queryClient = useQueryClient();
  const { handleSubmit, register } = useForm();

  const handleAddReviewToProduct: SubmitHandler<FieldValues> = (values) => {
    const payload = {
      productId,
      rating: Number(values?.rating),
      comment: values?.comment,
    };

    addReview(payload, {
      onSuccess(data) {
        if (data?.success) {
          toast.success(data?.message);
          queryClient.invalidateQueries({ queryKey: ["my-order"] });
          onClose();
        } else {
          toast.error(data?.message);
        }
      },
    });
  };

  return (
    <>
      <Button
        radius="sm"
        onPress={onOpen}
        className="mt-3 bg-primary text-white"
      >
        Leave a Review
      </Button>
      <Modal
        radius="sm"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(handleAddReviewToProduct)}>
              <ModalHeader className="flex flex-col gap-1">
                Add Review To Product
              </ModalHeader>
              <ModalBody>
                <Select
                  radius="sm"
                  variant="bordered"
                  style={{
                    height: "50px",
                    width: "350px",
                  }}
                  {...register("rating", { required: true })}
                  placeholder="Rating"
                  className="max-w-xs"
                  aria-label="Role"
                >
                  <SelectItem key={1}>1</SelectItem>
                  <SelectItem key={2}>2</SelectItem>
                  <SelectItem key={3}>3</SelectItem>
                  <SelectItem key={4}>4</SelectItem>
                  <SelectItem key={5}>5</SelectItem>
                </Select>

                <Input
                  radius="sm"
                  {...register("comment", { required: true })}
                  label="Comment"
                  placeholder="Enter comment"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  radius="sm"
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button radius="sm" type="submit" color="primary">
                  {!isSuccess && isPending ? (
                    <span className="flex items-center gap-2 justify-center text-base">
                      <span>Please Wait</span>{" "}
                      <TbFidgetSpinner className="animate-spin" />
                    </span>
                  ) : (
                    <span>Continue</span>
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
