import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Typography,
  Box,
  Input,
  Chip,
} from "@mui/material";
import { SearchIcon, SquarePen, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import { IconButton } from "@mui/material";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import React, { useEffect, useState } from "react";
import { Voucher } from "@/types/Voucher";
import VoucherItem from "./VoucherItem";
import VoucherDelete from "./VoucherDelete";
import VoucherUpdate from "./VoucherUpdate";
import { set } from "react-hook-form";
import VoucherAdd from "./VoucherAdd";

const voucherMockData: Voucher[] = [
  {
    id: "0000001",
    code: "MUAHE2025",
    startDate: "2021-10-10",
    duaration: 10,
    typeOfDuration: "day",
    type: "percent",
    value: 10,
    quantity: 10,
    description: "Mua hàng giảm giá 10%",
  },
  {
    id: "2",
    code: "XUAN2025",
    startDate: "2021-10-10",
    duaration: 10,
    typeOfDuration: "month",
    type: "percent",
    value: 20,
    quantity: 10,
    description: "Mua hàng giảm giá 20%",
  },
  {
    id: "3",
    code: "MUAHE2027",
    startDate: "2021-10-10",
    duaration: 2,
    typeOfDuration: "month",
    type: "value",
    value: 50000,
    quantity: 10,
    description: "Mua hàng giảm giá 50.000đ sanr ",
  },
  {
    id: "4",
    code: "XUAN2027",
    startDate: "2021-10-10",
    duaration: 10,
    typeOfDuration: "day",
    type: "value",
    value: 100000,
    quantity: 10,
    description: "Mua hàng giảm giá 100.000đ",
  },
  {
    id: "5",
    code: "MUAHE2029",
    startDate: "2021-10-10",
    duaration: 10,
    typeOfDuration: "day",
    type: "percent",
    value: 30,
    quantity: 10,
    description: "Mua hàng giảm giá 30%",
  },
  {
    id: "6",
    code: "XUAN2029",
    startDate: "2021-10-10",
    duaration: 10,
    typeOfDuration: "day",
    type: "percent",
    value: 40,
    quantity: 10,
    description: "Mua hàng giảm giá 40%",
  },
];

const ManageVoucher = () => {
  const [filter, setFilter] = useState<string>("code");
  const [vouchers, setVouchers] = useState<Voucher[]>(voucherMockData);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };
  const handleSearch = () => {
    console.log(filter);
    console.log("Search query: ", searchQuery);
  };
  useEffect(() => {
    setVouchers(voucherMockData);
  }, [vouchers]);
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Box
            sx={{
              display: {
                sm: "flex",
                xs: "block",
              },
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <div className="flex  items-center justify-between">
                <Typography
                  variant="h3"
                  sx={{
                    paddingLeft: "18px",
                    paddingTop: "10px",
                    fontWeight: "600",
                    color: "text.primary",
                    fontSize: "18px",
                  }}
                  gutterBottom
                >
                  <VoucherAdd></VoucherAdd>
                  DANH SÁCH VOUCHER
                </Typography>
                <div className="flex w-full max-w-sm items-center border border-gray-300 rounded-lg px-2.5 py-1.5">
                  <SearchIcon className="h-4 w-4 mr-2.5 cursor-pointer" />

                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full border-0 focus:outline-none"
                    onChange={handleSearchChange}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
              </div>
            </Box>
            <div className="Add-size">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[180px] h-[42px] ml-3">
                  <SelectValue placeholder="Tiêu chí tìm kiếm" />
                </SelectTrigger>
                <SelectContent className="w-full ">
                  <SelectGroup>
                    <SelectItem value="code">Mã voucher</SelectItem>
                    <SelectItem value="month">Tháng</SelectItem>
                    <SelectItem value="duaration">Hạn sử dụng</SelectItem>
                    <SelectItem value="quantity">Số lượng</SelectItem>
                    <SelectItem value="status">Trạng thái đơn hàng</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </Box>

          <Box
            sx={{
              overflow: "auto",
              mt: 3,
            }}
          >
            <Table
              aria-label="simple table"
              className="mt-3 whitespace-nowrap w-full border-r-zinc-500"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      Mã voucher
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      Ngày bắt đầu
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      Hạn sử dụng
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      Loại
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      Số lượng
                    </Typography>
                  </TableCell>
                  <TableCell className="w-max">
                    <Typography color="textSecondary" variant="h6"></Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6"></Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6"></Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vouchers.map((voucher) => (
                  <TableRow key={voucher.id}>
                    <TableCell>
                      <Typography variant="h6">{voucher.code}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">{voucher.startDate}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">
                        {voucher.duaration}{" "}
                        {voucher.typeOfDuration === "day"
                          ? "ngày"
                          : voucher.typeOfDuration === "month"
                          ? "tháng"
                          : "năm"}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        sx={{
                          pl: "4px",
                          pr: "4px",
                          backgroundColor:
                            voucher.type === "percent" ? "#d64646" : "#000",
                          color: "#fff",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                        size="medium"
                        label={voucher?.type}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">{voucher.quantity}</Typography>
                    </TableCell>
                    <TableCell>
                      <VoucherItem voucherId={voucher.id}></VoucherItem>
                    </TableCell>
                    <TableCell>
                      <VoucherUpdate></VoucherUpdate>
                    </TableCell>
                    <TableCell>
                      <VoucherDelete voucherCode={voucher.code}></VoucherDelete>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className=" mt-10 flex items-center justify-between w-full">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageVoucher;
