"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { RevenueType } from "@/types/Chart";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

// const chartData: RevenueType[] = [
//   { unit: "01", value: 186 },
//   { unit: "02", value: 305 },
//   { unit: "03", value: 237 },
//   { unit: "04", value: 73 },
//   { unit: "05", value: 209 },
//   { unit: "06", value: 214 },
//   { unit: "07", value: 500 },
//   { unit: "08", value: 300 },
//   { unit: "09", value: 200 },
//   { unit: "10", value: 200 },
//   { unit: "11", value: 200 },
//   { unit: "12", value: 200 },
//   { unit: "13", value: 200 },
//   { unit: "14", value: 200 },
//   { unit: "15", value: 200 },
//   { unit: "16", value: 200 },
//   { unit: "17", value: 200 },
//   { unit: "18", value: 200 },
//   { unit: "19", value: 200 },
//   { unit: "20", value: 200 },
//   { unit: "21", value: 200 },
//   { unit: "22", value: 200 },
//   { unit: "23", value: 200 },
//   { unit: "24", value: 200 },
//   { unit: "25", value: 200 },
//   { unit: "26", value: 200 },
//   { unit: "27", value: 200 },
//   { unit: "28", value: 200 },
//   { unit: "29", value: 200 },
//   { unit: "30", value: 200 },
//   { unit: "31", value: 200 },
// ];

const chartConfig = {
  value: {
    label: "value",
    color: "#000",
  },
} satisfies ChartConfig;

interface ChartProps {
  chartData: RevenueType[];
  typeOfChart: string;
}
export function Chart({ chartData, typeOfChart }: ChartProps) {
  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardTitle> DOANH THU </CardTitle>
          <CardDescription>
            Đơn vị tính: {typeOfChart === "year" ? "VND / tháng" : "VND / ngày"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="unit"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="value"
                type="natural"
                stroke="#d64646"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none mb-4">
            Tổng doanh thu:{" "}
            {chartData.map((item) => item.value).reduce((a, b) => a + b, 0)} VND
          </div>
          <div className="flex gap-2 font-medium leading-none">
            Tăng khoảng{" "}
            {((chartData[chartData.length - 1].value -
              chartData[chartData.length - 2].value) /
              chartData[chartData.length - 2].value) *
              100}
            % {typeOfChart === "year" ? "năm nay" : "tháng này"}
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            {typeOfChart === "year"
              ? "So với cùng kỳ năm trước"
              : "So với cùng kỳ tháng trước"}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
