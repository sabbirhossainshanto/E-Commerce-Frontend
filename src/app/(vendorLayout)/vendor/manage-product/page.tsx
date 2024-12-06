"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
} from "@nextui-org/react";

import { DeleteIcon } from "@/src/components/icons";
import React from "react";
import { IProduct } from "@/src/types";
import { useDeleteProduct, useGetMyProducts } from "@/src/hooks/product";
import UpdateProduct from "@/src/components/modal/vendor/UpdateProduct";
import CreateProduct from "@/src/components/modal/vendor/CreateProduct";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "PRICE", uid: "price" },
  { name: "INVENTORY", uid: "inventory" },
  { name: "DISCOUNT", uid: "discount" },
  { name: "SHOP", uid: "shopName" },
  { name: "ACTIONS", uid: "actions" },
];

type TPickProduct = Pick<
  IProduct,
  "images" | "name" | "description" | "inventory" | "price" | "discount" | "id"
> & { actions: string; shopName: string; categoryName: string };

const ManageProduct = () => {
  const router = useRouter();
  const { data, refetch } = useGetMyProducts();
  const { mutate: deleteProduct } = useDeleteProduct();

  const productData =
    data?.data?.map((product) => ({
      id: product.id,
      discount: product?.discount,
      name: product?.name,
      description: product?.description,
      images: product?.images,
      inventory: product?.inventory,
      price: product?.price,
      categoryName: product.category.name,
      shopName: product.shop.shopName,
    })) || [];

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id, {
      onSuccess(data) {
        if (data?.success) {
          toast.success(data?.message);
          refetch();
        } else {
          toast.error(data?.message);
        }
      },
    });
  };

  const renderCell = React.useCallback(
    (product: TPickProduct, columnKey: keyof TPickProduct) => {
      const cellValue = product[columnKey];

      switch (columnKey) {
        case "name":
          return (
            <User
              className="cursor-pointer"
              onClick={() => router.push(`/products/${product?.id}`)}
              avatarProps={{ radius: "lg", src: product.images[0] }}
              description={product.shopName}
              name={cellValue}
            />
          );
        case "price":
          return (
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              {product.price}
            </div>
          );
        case "inventory":
          return (
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              {product.inventory}
            </div>
          );
        case "discount":
          return (
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              {product.discount || "N/A"}
            </div>
          );
        case "shopName":
          return (
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              {product.shopName}
            </div>
          );
        case "actions":
          return (
            <div className="relative flex items-center justify-end gap-5">
              <UpdateProduct id={product.id} />

              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="text-lg text-danger cursor-pointer active:opacity-50"
              >
                <DeleteIcon />
              </button>
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
      <div className="flex justify-end mb-5">
        <CreateProduct />
      </div>
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
        <TableBody items={productData}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(
                    item as TPickProduct,
                    columnKey as keyof TPickProduct
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageProduct;
