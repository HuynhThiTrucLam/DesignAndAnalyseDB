//Thong ke doanh thu cua san pham
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { RevenueType } from "@/types/Chart";
import { Box, Card, Typography } from "@mui/material";
import dayjs from "dayjs";
import { DatabaseBackup } from "lucide-react";
import React, { useEffect } from "react";
import * as XLSX from "xlsx";
import { Chart } from "./Chart";

//Get doanh thu theo thang
const chartData2025: RevenueType[] = [
  { unit: "January", value: 186 },
  { unit: "February", value: 305 },
  { unit: "March", value: 237 },
  { unit: "April", value: 73 },
  { unit: "May", value: 209 },
  { unit: "June", value: 214 },
  {
    unit: "July",
    value: 500,
  },
  {
    unit: "August",
    value: 300,
  },
  {
    unit: "September",
    value: 200,
  },
  {
    unit: "October",
    value: 200,
  },
  {
    unit: "November",
    value: 200,
  },
  {
    unit: "December",
    value: 200,
  },
];
const chartData2026: RevenueType[] = [
  { unit: "January", value: 286 },
  { unit: "February", value: 405 },
  { unit: "March", value: 207 },
  { unit: "April", value: 100 },
  { unit: "May", value: 409 },
  { unit: "June", value: 414 },
  {
    unit: "July",
    value: 500,
  },
  {
    unit: "August",
    value: 300,
  },
  {
    unit: "September",
    value: 200,
  },
  {
    unit: "October",
    value: 240,
  },
  {
    unit: "November",
    value: 100,
  },
  {
    unit: "December",
    value: 1000,
  },
];
const chartDataJanuary: RevenueType[] = [
  {
    unit: "01",
    value: 186,
  },
  {
    unit: "02",
    value: 305,
  },
  {
    unit: "03",
    value: 237,
  },
  {
    unit: "04",
    value: 73,
  },
  {
    unit: "05",
    value: 209,
  },
  {
    unit: "06",
    value: 214,
  },
  {
    unit: "07",
    value: 500,
  },
  {
    unit: "08",
    value: 300,
  },
  {
    unit: "09",
    value: 200,
  },
  {
    unit: "10",
    value: 200,
  },
  {
    unit: "11",
    value: 200,
  },
  {
    unit: "12",
    value: 200,
  },
  {
    unit: "13",
    value: 200,
  },
  {
    unit: "14",
    value: 200,
  },
  {
    unit: "15",
    value: 200,
  },
  {
    unit: "16",
    value: 200,
  },
  {
    unit: "17",
    value: 200,
  },
  {
    unit: "18",
    value: 200,
  },
  {
    unit: "19",
    value: 200,
  },
  {
    unit: "20",
    value: 200,
  },
  {
    unit: "21",
    value: 200,
  },
  {
    unit: "22",
    value: 200,
  },
  {
    unit: "23",
    value: 200,
  },
  {
    unit: "24",
    value: 200,
  },
  {
    unit: "25",
    value: 200,
  },
  {
    unit: "26",
    value: 200,
  },
  {
    unit: "27",
    value: 200,
  },
  {
    unit: "28",
    value: 200,
  },
  {
    unit: "29",
    value: 200,
  },
  {
    unit: "30",
    value: 200,
  },
  {
    unit: "31",
    value: 200,
  },
];

const chartDataFebruary: RevenueType[] = [
  {
    unit: "01",
    value: 186,
  },
  {
    unit: "02",
    value: 305,
  },
  {
    unit: "03",
    value: 237,
  },
  {
    unit: "04",
    value: 73,
  },
  {
    unit: "05",
    value: 209,
  },
  {
    unit: "06",
    value: 214,
  },
  {
    unit: "07",
    value: 500,
  },
  {
    unit: "08",
    value: 300,
  },
  {
    unit: "09",
    value: 200,
  },
  {
    unit: "10",
    value: 200,
  },
  {
    unit: "11",
    value: 200,
  },
  {
    unit: "12",
    value: 200,
  },
  {
    unit: "13",
    value: 200,
  },
  {
    unit: "14",
    value: 200,
  },
  {
    unit: "15",
    value: 200,
  },
  {
    unit: "16",
    value: 200,
  },
  {
    unit: "17",
    value: 200,
  },
  {
    unit: "18",
    value: 200,
  },
  {
    unit: "19",
    value: 200,
  },
  {
    unit: "20",
    value: 200,
  },
  {
    unit: "21",
    value: 200,
  },
  {
    unit: "22",
    value: 200,
  },
  {
    unit: "23",
    value: 200,
  },
  {
    unit: "24",
    value: 200,
  },
  {
    unit: "25",
    value: 200,
  },
  {
    unit: "26",
    value: 200,
  },
  {
    unit: "27",
    value: 200,
  },
  {
    unit: "28",
    value: 200,
  },
  {
    unit: "29",
    value: 200,
  },
  {
    unit: "30",
    value: 200,
  },
];

const mockCallApi = (year: number, month?: number, typeOfChart?: string) => {
  if (year === 2025) {
    if (typeOfChart === "month") {
      if (month === 1) {
        return chartDataJanuary;
      }
      if (month === 2) {
        return chartDataFebruary;
      }
    }
    return chartData2025;
  } else if (year === 2024) {
    if (typeOfChart === "month") {
      if (month === 1) {
        return chartDataJanuary;
      }
      if (month === 2) {
        return chartDataFebruary;
      }
    }
    return chartData2026;
  }
};

const Analyze = () => {
  const [typeOfChart, setTypeOfChart] = React.useState<string>("year");
  const [month, setMonth] = React.useState<string>(dayjs().month().toString());
  const [year, setYear] = React.useState<string>(dayjs().year().toString());
  const [isOpenMonth, setIsOpenMonth] = React.useState<boolean>(false);
  const { toast } = useToast();

  const [chartData, setChartData] = React.useState<RevenueType[]>([]);

  const handleExportToExcel = () => {
    if (chartData.length === 0) {
      toast({
        variant: "destructive",
        title: "Dữ liệu trống",
        description: "Không có dữ liệu để xuất. Vui lòng thử lại",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    // Create a new worksheet
    const worksheet = XLSX.utils.json_to_sheet(
      chartData.map((data) => ({
        Tháng: data.unit,
        "Doanh Thu": data.value,
      }))
    );

    // Create a new workbook and append the worksheet to it
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Doanh Thu");

    // Export the workbook to a file
    XLSX.writeFile(workbook, `Doanh_Thu_${year}_${month || "all_months"}.xlsx`);
  };

  useEffect(() => {
    // TODO call real api
    if (year) {
      const chartValue = mockCallApi(
        Number(year),
        month ? Number(month) : undefined,
        typeOfChart
      );

      if (chartValue) {
        setChartData(chartValue);
      } else {
        setChartData([]);
      }
    }
  }, [year, month, typeOfChart]);
  return (
    <div>
      <Card variant="outlined">
        <div className="flex flex-col gap-4">
          <Box className="flex justify-between items-center pr-6">
            <div className="flex items-center gap-4">
              <Typography
                variant="h3"
                sx={{
                  paddingLeft: "18px",
                  paddingTop: "20px",
                  paddingBottom: "10px",
                  fontWeight: "600",
                  color: "text.primary",
                  fontSize: "18px",
                }}
                gutterBottom
              >
                THỐNG KÊ DOANH THU THEO
              </Typography>
              <Select
                value={typeOfChart}
                onValueChange={(value) => {
                  setTypeOfChart(value);
                  setIsOpenMonth(!isOpenMonth);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Chọn nam" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="month">THÁNG</SelectItem>
                    <SelectItem value="year">NĂM</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button className="font-[600]" onClick={handleExportToExcel}>
              In báo cáo thống kê
            </Button>
          </Box>
          <Box className="p-5">
            <div className="Analyze ">
              <div className="Analyze-choose flex flex-col justify-between gap-8">
                <div className="Analyze-title flex gap-4 items-center">
                  <p className="font-[600]">Chọn năm thống kê: </p>
                  <Select value={year} onValueChange={setYear}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Chọn nam" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {Array.from({ length: 10 }).map((_, index) => (
                          <SelectItem
                            key={index}
                            value={(2025 - index).toString()}
                          >
                            {2025 - index}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                {isOpenMonth ? (
                  <div className="Analyze-title flex gap-4 items-center">
                    <p className="font-[600]">Chọn tháng thống kê: </p>
                    <Select value={month} onValueChange={setMonth}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Chọn tháng tại đây" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {Array.from({ length: 12 }).map((_, index) => (
                            <SelectItem key={index} value={index.toString()}>
                              Tháng {index + 1}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                ) : null}
              </div>
            </div>
          </Box>
          {chartData.length ? (
            <Box className="p-5">
              <Chart chartData={chartData} typeOfChart={typeOfChart}></Chart>
            </Box>
          ) : (
            <div className="flex flex-col gap-[10px] items-center justify-center h-[200px]">
              <DatabaseBackup></DatabaseBackup>
              <p>Không tìm thấy dữ liệu</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Analyze;
