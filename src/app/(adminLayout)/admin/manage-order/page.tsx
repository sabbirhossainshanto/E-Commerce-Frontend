"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Select,
  SelectItem,
} from "@nextui-org/react";

import { IOrder } from "@/src/types";
import { toast } from "sonner";
import { OrderStatus } from "@/src/const/const";
import { useGetAllOrder, useUpdateOrderStatus } from "@/src/hooks/order";
import React from "react";

const columns = [
  { name: "PRODUCT", uid: "product" },
  { name: "QUANTITY", uid: "quantity" },
  { name: "ISPAID", uid: "isPaid" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

type TOrder = Pick<IOrder, "id" | "isPaid" | "status" | "quantity"> & {
  actions: string;
  product: string;
  image: string;
  name: string;
  ShopName: string;
};

const ManageUser = () => {
  const { data, refetch: refetchAllOrder } = useGetAllOrder();
  const { mutate: updateOrder } = useUpdateOrderStatus();

  const orderData =
    data?.data?.map((order) => ({
      id: order.id,
      isPaid: order?.isPaid,
      status: order?.status,
      quantity: order?.quantity,
      image: order?.product?.images[0],
      name: order?.product?.name,
      shopName: order?.shop?.shopName,
      ShopName: order.shop?.shopName,
      product: order.product?.name,
      actions: "default",
    })) || [];

  const handleUpdateOrderStatus = (status: string, order: TOrder) => {
    const payload = {
      id: order.id,
      status,
    };
    updateOrder(payload, {
      onSuccess(data) {
        if (data?.success) {
          toast.success("Order is updated successfully");
          refetchAllOrder();
        } else {
          toast.error(data?.message);
        }
      },
    });
  };

  const renderCell = React.useCallback(
    (order: TOrder, columnKey: keyof TOrder) => {
      const cellValue = order[columnKey];

      switch (columnKey) {
        case "product":
          return (
            <User
              avatarProps={{ radius: "lg", src: order.image }}
              description={order?.ShopName}
              name={order?.name}
            ></User>
          );
        case "quantity":
          return <p>{order?.quantity}</p>;
        case "isPaid":
          return (
            <Chip
              className="capitalize"
              color={order?.isPaid ? "success" : "danger"}
              size="sm"
              variant="flat"
            >
              {order.isPaid ? "Paid" : "Un Paid"}
            </Chip>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={
                order?.status === "COMPLETED"
                  ? "success"
                  : order.status === "PENDING"
                    ? "warning"
                    : "danger"
              }
              size="sm"
              variant="flat"
            >
              {order.status}
            </Chip>
          );

        case "actions":
          return (
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Select
                onChange={(e) =>
                  handleUpdateOrderStatus(e.target.value, order as TOrder)
                }
                placeholder={order.status}
                className="max-w-xs"
                aria-label="Role"
              >
                <SelectItem key={OrderStatus.PENDING}>Pending</SelectItem>
                <SelectItem key={OrderStatus.COMPLETED}>Completed</SelectItem>
                <SelectItem key={OrderStatus.CANCELLED}>Cancelled</SelectItem>
              </Select>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <div className="col-span-12 lg:col-span-9">
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={orderData}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item as TOrder, columnKey as keyof TOrder)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageUser;
