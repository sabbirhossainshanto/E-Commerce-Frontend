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
  DatePicker,
  DateValue,
} from "@nextui-org/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { TbFidgetSpinner } from "react-icons/tb";
import { useCreateCoupon } from "@/src/hooks/coupon";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function CreateCoupon() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [expiryDate, setExpiryDate] = useState<DateValue | undefined>(
    undefined
  );
  const queryClient = useQueryClient();
  const { mutate: createCoupon, isPending, isSuccess } = useCreateCoupon();
  const { handleSubmit, register } = useForm();

  const handleUpdateProduct: SubmitHandler<FieldValues> = (values) => {
    const payload = {
      ...values,
      discount: Number(values?.discount),
      expiryDate: `${expiryDate?.day}-${expiryDate?.month}-${expiryDate?.year}`,
      minimumOrderValue: Number(values?.minimumOrderValue),
      usageLimit: Number(values?.usageLimit),
    };

    createCoupon(payload, {
      onSuccess(data) {
        if (data?.success) {
          toast.success(data?.message);
          queryClient.invalidateQueries({ queryKey: ["get-coupons"] });
          onClose();
        } else {
          toast.error(data?.message);
        }
      },
    });
  };

  return (
    <>
      <Button className="my-4" radius="sm" color="primary" onPress={onOpen}>
        Add New
      </Button>
      <Modal
        radius="sm"
        size="2xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(handleUpdateProduct)}>
              <ModalHeader className="flex flex-col gap-1">
                Create Coupon
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center gap-5">
                  <Input
                    radius="sm"
                    labelPlacement="outside"
                    {...register("code", { required: true })}
                    label="Code"
                    type="text"
                    placeholder="Code"
                    variant="bordered"
                  />
                  <Input
                    radius="sm"
                    type="number"
                    labelPlacement="outside"
                    {...register("discount", { required: true })}
                    label="Discount"
                    placeholder="Discount"
                    variant="bordered"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <Select
                    radius="sm"
                    label="Discount Type"
                    labelPlacement="outside"
                    {...register("discountType", { required: true })}
                    variant="bordered"
                    placeholder="Discount Type"
                    className="max-w-full"
                    aria-label="Role"
                  >
                    <SelectItem key="PERCENTAGE">Percentage</SelectItem>
                    <SelectItem key="FIXED">Fixed</SelectItem>
                  </Select>
                  <Input
                    radius="sm"
                    type="number"
                    {...register("minimumOrderValue", { required: true })}
                    labelPlacement="outside"
                    label="Minimum Order Value"
                    placeholder="Minimum Order Value"
                    variant="bordered"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <Input
                    radius="sm"
                    type="number"
                    {...register("usageLimit", { required: true })}
                    labelPlacement="outside"
                    label="Usage Limit"
                    placeholder="Usage Limit"
                    variant="bordered"
                  />
                  <DatePicker
                    radius="sm"
                    onChange={(value) => setExpiryDate(value)}
                    labelPlacement="outside"
                    variant="bordered"
                    label="Expiry Date"
                    className="max-w-[284px]"
                  />
                </div>
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
                  {isPending && !isSuccess ? (
                    <span className="flex items-center gap-2 justify-center text-base">
                      <span>Please Wait</span>{" "}
                      <TbFidgetSpinner className="animate-spin" />
                    </span>
                  ) : (
                    <span> Create Coupon</span>
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
