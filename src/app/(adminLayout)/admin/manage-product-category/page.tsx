"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  Tooltip,
  TableCell,
} from "@nextui-org/react";

import { DeleteIcon, EditIcon } from "@/src/components/icons";
import React from "react";
import { ICategories } from "@/src/types";
import { toast } from "sonner";
import { useDeleteCategory, useGetAllCategory } from "@/src/hooks/category";
import CreateProductCategory from "@/src/components/modal/admin/CreateProductCategory";
import UpdateProductCategory from "@/src/components/modal/admin/UpdateProductCategory";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "ACTIONS", uid: "actions" },
];

type TCategory = Pick<ICategories, "name" | "id"> & { actions: string };

const ManageProductCategory = () => {
  const { data, refetch: refetchCategory } = useGetAllCategory();
  const { mutate: deleteCategory } = useDeleteCategory();

  const categoryData =
    data?.data?.map((user) => ({
      id: user.id,
      name: user?.name,
    })) || [];

  const handleDeleteCategory = (category: TCategory) => {
    deleteCategory(category.id, {
      onSuccess(data) {
        if (data?.success) {
          toast.success(data?.message);
          refetchCategory();
        } else {
          toast.error(data?.message);
        }
      },
    });
  };

  const renderCell = React.useCallback(
    (category: TCategory, columnKey: keyof TCategory) => {
      const cellValue = category[columnKey];

      switch (columnKey) {
        case "name":
          return <p>{category.name}</p>;

        case "actions":
          return (
            <div className="relative flex items-center justify-end gap-2">
              <UpdateProductCategory id={category.id} />

              <button
                onClick={() => handleDeleteCategory(category)}
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
        <CreateProductCategory />
      </div>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "end" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={categoryData}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item as TCategory, columnKey as keyof TCategory)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageProductCategory;
