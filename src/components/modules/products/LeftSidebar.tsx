import { useProduct } from "@/src/context/product.provider";
import { ICategories } from "@/src/types";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/react";
import React, { useState } from "react";

const LeftSidebar = ({ categories }: { categories: ICategories[] }) => {
  const filterCategory = categories?.filter(
    (category) => category?.products?.length > 0
  );
  const [priceRangeTo, setPriceRangeTo] = useState<number>(0);
  const [priceRangeFrom, setPriceRangeFrom] = useState<number>(0);
  const { setQuery, selectedCategory, setSelectedCategory } = useProduct();
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
  return (
    <div className="col-span-12 md:col-span-3">
      <div className=" transition-all duration-300 bg-white  shadow p-4 z-20 ">
        <div className="mt-6 sm:mt-2">
          <div className="max-w-full pb-4">
            <div className="flex justify-between items-start">
              <h4 className="text-xl text-left font-medium mb-3  uppercase">
                Search By Key
              </h4>
            </div>
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
          {/* Category */}
          <div className="pb-4 border-b border-[#E9E4E4] mb-4">
            <div className="flex justify-between items-start">
              <h4 className="text-xl text-left font-medium mb-3  uppercase">
                Categories
              </h4>
            </div>
            <div className="space-y-2">
              {filterCategory?.map((category) => (
                <div
                  key={category?.id}
                  className="custom_check flex justify-between items-center"
                >
                  <div className="flex gap-3 items-center">
                    <Checkbox
                      id={`cat-${category?.id}`}
                      onChange={handleQueryChange}
                      value={category?.name}
                      checked={selectedCategory === category?.name}
                      color="primary"
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
          <div className="pb-4 border-b border-[#E9E4E4] mb-4">
            <h4 className="text-xl font-medium  uppercase">Price</h4>
            <div className="flex gap-3">
              <div>
                {" "}
                <span
                  id="rangeValue"
                  className="block relative text-center text-xl font-semibold"
                >
                  {priceRangeFrom}
                </span>
                <input
                  onChange={(e) => setPriceRangeFrom(Number(e.target.value))}
                  type="range"
                  className="range"
                  min="0"
                  max="1000"
                  value={priceRangeFrom}
                />
              </div>
              <div>
                {" "}
                <span
                  id="rangeValue"
                  className="block relative text-center text-xl font-semibold"
                >
                  {priceRangeTo}
                </span>
                <input
                  onChange={(e) => setPriceRangeTo(Number(e.target.value))}
                  type="range"
                  className="range"
                  min="0"
                  max="1000"
                  value={priceRangeTo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
