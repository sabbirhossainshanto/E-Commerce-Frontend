"use client";

// import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/UI/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/UI/chart";
import { IOverview } from "@/src/types";

const Charts = ({ data }: { data: IOverview }) => {
  const orderData = data?.monthlyStats?.map((monthlyStat) => ({
    month: monthlyStat.month,
    totalSell: monthlyStat.totalMoney,
    orderCount: monthlyStat.orderCount,
  }));
  const orderConfig = {
    totalSell: {
      label: "Total Sell",
      color: "#245bc8",
    },
    orderCount: {
      label: "Order Count",
      color: "#e23670",
    },
  } satisfies ChartConfig;
  const userData = data?.monthlyStats?.map((monthlyStat) => ({
    month: monthlyStat.month,
    totalUsers: monthlyStat.totalUsers,
    totalVendors: monthlyStat.totalVendors,
  }));
  const userConfig = {
    totalUsers: {
      label: "Total Users",
      color: "#245bc8",
    },
    totalVendors: {
      label: "Total Vendors",
      color: "#e23670",
    },
  } satisfies ChartConfig;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 w-full mt-20 ">
      <Card>
        <CardHeader>
          <CardTitle>Total Sell and Order Count</CardTitle>
          <CardDescription>
            January - December {new Date().getFullYear()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={orderConfig}>
            <BarChart accessibilityLayer data={orderData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar
                dataKey="totalSell"
                fill="var(--color-totalSell)"
                radius={4}
              />
              <Bar
                dataKey="orderCount"
                fill="var(--color-orderCount)"
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
        {/* <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter> */}
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Users and Vendors</CardTitle>
          <CardDescription>
            January - December {new Date().getFullYear()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={userConfig}>
            <BarChart accessibilityLayer data={userData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar
                dataKey="totalUsers"
                fill="var(--color-totalUsers)"
                radius={4}
              />
              <Bar
                dataKey="totalVendors"
                fill="var(--color-totalVendors)"
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
        {/* <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default Charts;
