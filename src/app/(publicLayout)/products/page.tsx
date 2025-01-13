"use client";

import ProductCart from "@/src/components/UI/ProductCart/ProductCart";
import ProductSkeleton from "@/src/components/UI/ProductSkeleton/ProductSkeleton";
import { limit } from "@/src/const/const";
import { useProduct } from "@/src/context/product.provider";
import { useGetAllCategory } from "@/src/hooks/category";
import { useGetAllProducts } from "@/src/hooks/product";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Pagination,
} from "@nextui-org/react";
import { useState } from "react";

const ProductPage = () => {
  const [page, setPage] = useState(1);
  const { query, setQuery, selectedCategory, setSelectedCategory } =
    useProduct();
  const { data: products, isLoading } = useGetAllProducts([
    ...query,
    { name: "limit", value: limit },
    { name: "page", value: page },
  ]);
  const meta = products?.meta;
  const { data: categories } = useGetAllCategory([]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectedCategory(value);
      setQuery((prev) => {
        const prevQuery = prev.filter((p) => p.name !== "category");
        return [...prevQuery, { name: "category", value }];
      });
    } else {
      setQuery([]);
      setSelectedCategory(null);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery((prev) => {
      const prevQuery = prev.filter((p) => p.name !== "searchTerm");
      return [...prevQuery, { name: "searchTerm", value: e.target.value }];
    });
  };

  const handleRemoveSearch = () => {
    setQuery((prev) => {
      const prevQuery = prev.filter((p) => p.name !== "searchTerm");
      return [...prevQuery];
    });
  };

  const handleSortByPrice = (sortOrder: string) => {
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
          value: sortOrder,
        },
      ];
    });
  };

  return (
    <div className="container pb-14 pt-12 relative">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className=" transition-all duration-300 bg-white  shadow p-4 z-20 ">
            <div className="mt-6 sm:mt-2">
              {/* Category */}
              <div className="pb-4 border-b border-[#E9E4E4] mb-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl text-left font-medium mb-3  uppercase">
                    Categories
                  </h4>
                </div>
                <div className="space-y-2">
                  {categories?.data?.map((category) => (
                    <div
                      key={category?.id}
                      className="custom_check flex justify-between items-center"
                    >
                      <div className="flex gap-3 items-center">
                        <input
                          onChange={handleQueryChange}
                          value={category?.name}
                          type="checkbox"
                          checked={selectedCategory === category?.name}
                          className="focus:ring-0 text-rose-500 focus:bg-primary focus:outline-rose-500"
                          id={`cat-${category?.id}`}
                        />
                        <label htmlFor="cat-women" className="cursor-pointer ">
                          {category?.name}
                        </label>
                      </div>
                      <p>({category?.products?.length})</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Price Range */}
              {/* <div className="pb-4 border-b border-[#E9E4E4] mb-4">
                <h4 className="text-xl font-medium  text-secondary uppercase">
                  Price
                </h4>
                <span
                  id="rangeValue"
                  className="block relative text-center text-xl font-semibold"
                >
                  500
                </span>
                <input type="range" className="range" min="0" max="1000" />
              </div> */}
              {/* Price Range */}
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 h-full">
          {/* Dropdown */}

          <div className="flex items-center gap-5">
            <Dropdown radius="sm" size="lg">
              <DropdownTrigger>
                <Button
                  radius="sm"
                  className="text-[10px] md:text-sm bg-primary text-white"
                  variant="bordered"
                >
                  Sort Product
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  onClick={() => handleSortByPrice("asc")}
                  key="asc"
                >
                  Price Low-High
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleSortByPrice("desc")}
                  key="desc"
                >
                  Price High-Low
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <div className="max-w-[200px]">
              <Input
                size="sm"
                onChange={handleSearchChange}
                onClear={handleRemoveSearch}
                variant="bordered"
                isClearable
                type="text"
                label="Search Product..."
              />
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
