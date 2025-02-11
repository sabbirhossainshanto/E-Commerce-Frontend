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
  Spinner,
} from "@nextui-org/react";

import { IOrder } from "@/src/types";
import { useGetAllOrder } from "@/src/hooks/order";
import React from "react";

const columns = [
  { name: "PRODUCT", uid: "product" },
  { name: "QUANTITY", uid: "quantity" },
  { name: "ISPAID", uid: "isPaid" },
  { name: "STATUS", uid: "status" },
];

type TOrder = Pick<IOrder, "id" | "isPaid" | "status" | "quantity"> & {
  actions: string;
  product: string;
  image: string;
  name: string;
  ShopName: string;
};

const RecentOrder = () => {
  const { data, isLoading } = useGetAllOrder([{ name: "limit", value: 10 }]);

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

        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <div className="col-span-12 lg:col-span-9">
      <Table
        shadow="md"
        radius="sm"
        aria-label="Example table with custom cells"
      >
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
        <TableBody
          loadingContent={<Spinner />}
          isLoading={isLoading}
          items={orderData}
        >
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

export default RecentOrder;
