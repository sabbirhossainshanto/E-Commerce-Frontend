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
} from "@nextui-org/react";
import { IOrder } from "@/src/types";
import React from "react";
import { useGetMyShop } from "@/src/hooks/shop";
import { useRouter } from "next/navigation";

const columns = [
  { name: "PRODUCT", uid: "product" },
  { name: "QUANTITY", uid: "quantity" },
  { name: "ISPAID", uid: "isPaid" },
  { name: "PRICE", uid: "price" },
  { name: "DELIVERY", uid: "status" },
];

type TOrder = Pick<IOrder, "id" | "isPaid" | "status" | "quantity"> & {
  product: string;
  image: string;
  name: string;
  ShopName: string;
  price: number;
};

const ManageUser = () => {
  const { data } = useGetMyShop();
  const router = useRouter();

  const orderData =
    data?.data?.orders?.map((order) => ({
      id: order?.productId,
      isPaid: order?.isPaid,
      status: order?.status,
      quantity: order?.quantity,
      image: order?.product?.images[0],
      name: order?.product?.name,
      shopName: order?.shop?.shopName,
      ShopName: order.shop?.shopName,
      product: order.product?.name,
      price: order?.quantity * order?.product?.price,
    })) || [];

  const renderCell = React.useCallback(
    (order: TOrder, columnKey: keyof TOrder) => {
      const cellValue = order[columnKey];

      switch (columnKey) {
        case "product":
          return (
            <User
              className="cursor-pointer"
              onClick={() => router.push(`/products/${order?.id}`)}
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
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "status" ? "center" : "start"}
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
