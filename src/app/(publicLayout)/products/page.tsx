"use client";

import LeftSidebar from "@/src/components/modules/products/LeftSidebar";
import ProductCart from "@/src/components/UI/ProductCart/ProductCart";
import ProductSkeleton from "@/src/components/UI/ProductSkeleton/ProductSkeleton";
import { useProduct } from "@/src/context/product.provider";
import { useGetAllCategory } from "@/src/hooks/category";
import { useGetAllProducts } from "@/src/hooks/product";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Pagination,
} from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const [limit, setLimit] = useState(10);
  const params = useSearchParams();
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["All"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );
  const [page, setPage] = useState(1);
  const { query, setQuery, setSelectedCategory } = useProduct();
  const payload = [
    ...query,
    { name: "limit", value: limit },
    { name: "page", value: page },
  ];
  const { data: products, isLoading } = useGetAllProducts(payload);
  const meta = products?.meta;
  const { data: categories } = useGetAllCategory([]);

  useEffect(() => {
    if (!selectedKeys.has("All")) {
      setQuery((prev) => {
        const prevQuery = prev.filter(
          (p) => p.name !== "sortBy" && p.name !== "sortOrder"
        );

        return [
          ...prevQuery,
          {
            name: "sortBy",
            value: "price",
          },
          {
            name: "sortOrder",
            value: Array.from(selectedKeys)[0] || "",
          },
        ];
      });
    }
  }, [selectedKeys]);

  return (
    <div className="container pb-14 pt-12 relative">
      <div className="grid grid-cols-12 gap-6">
        {categories?.data && categories?.data?.length > 0 && (
          <LeftSidebar categories={categories?.data} />
        )}

        <div className="col-span-12 md:col-span-9 h-full">
          <div className="flex items-center justify-end gap-5">
            <div className="flex items-center gap-1">
              <div>Sort By:</div>
              <Dropdown radius="sm">
                <DropdownTrigger>
                  <Button radius="sm" className="capitalize" variant="bordered">
                    {selectedValue}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Single selection example"
                  selectedKeys={selectedKeys}
                  selectionMode="single"
                  variant="flat"
                  onSelectionChange={(keys) =>
                    setSelectedKeys(new Set(keys as Set<string>))
                  }
                >
                  <DropdownItem key="asc"> Price Low-High</DropdownItem>
                  <DropdownItem key="desc"> Price High-Low</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="flex items-center gap-1">
              <div>Show Per Page:</div>
              <Dropdown radius="sm">
                <DropdownTrigger>
                  <Button radius="sm" className="capitalize" variant="bordered">
                    {limit}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  selectionMode="single"
                  variant="flat"
                >
                  <DropdownItem onClick={() => setLimit(5)} key="5">
                    {" "}
                    5
                  </DropdownItem>
                  <DropdownItem onClick={() => setLimit(10)} key="10">
                    {" "}
                    10
                  </DropdownItem>
                  <DropdownItem onClick={() => setLimit(15)} key="15">
                    {" "}
                    15
                  </DropdownItem>
                  <DropdownItem onClick={() => setLimit(20)} key="20">
                    {" "}
                    20
                  </DropdownItem>
                  <DropdownItem onClick={() => setLimit(30)} key="30">
                    {" "}
                    30
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            <Button
              className="bg-primary text-white"
              radius="sm"
              color="primary"
              onClick={() => {
                setQuery([]);
                setSelectedCategory(null);
                setPage(1);
              }}
              variant="bordered"
            >
              Reset
            </Button>
          </div>
          {products?.data && products?.data?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4">
              {products?.data?.map((product) => (
                <ProductCart key={product.id} product={product} />
              ))}
            </div>
          )}
          {products?.data?.length === 0 && (
            <div className="flex items-center justify-center w-full h-full">
              <h5>No product available in search query!</h5>
            </div>
          )}
          {isLoading && <ProductSkeleton mdGridCols="3" />}
          {!isLoading && (
            <div className="flex justify-end mt-10">
              <Pagination
                loop
                showControls
                onChange={(page) => setPage(page)}
                page={page}
                total={meta?.total ? Math.ceil(meta?.total / limit) : 1}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
