import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

const ProductSkeleton = ({ mdGridCols }: { mdGridCols: string }) => {
  return (
    <div
      className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${mdGridCols} gap-5 mt-4`}
    >
      {Array(5)
        .fill(0)
        .map((_, idx) => {
          return (
            <Card
              key={idx}
              className="w-full h-[350px] space-y-5 p-4 flex flex-col"
              radius="lg"
            >
              <Skeleton className="rounded-lg">
                <div className="h-[250px] rounded-lg bg-default-300" />
              </Skeleton>
              <div className="space-y-3 mt-auto">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                </Skeleton>
              </div>
            </Card>
          );
        })}
    </div>
  );
};

export default ProductSkeleton;
