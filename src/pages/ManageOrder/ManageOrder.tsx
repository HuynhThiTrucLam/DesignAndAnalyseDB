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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Order } from "@/types/Order";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Input,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ManageOrder.scss";

import { SearchIcon } from "lucide-react";
import OrderItem from "./OrderItem";

export const mockOrderData = [
  {
    id: "o1",
    createdAt: "2025-01-01",
    customer: "John Doe",
    status: "Chờ xác nhận",
  },
  {
    id: "o2",
    createdAt: "2025-01-02",
    customer: "Jane Smith",
    status: "Vận chuyển",
  },
  {
    id: "o3",
    createdAt: "2025-01-03",
    customer: "Alice Johnson",
    status: "Thành công",
  },
  {
    id: "o4",
    createdAt: "2025-01-04",
    customer: "Bob Brown",
    status: "Đã huỷ",
  },
  {
    id: "o5",
    createdAt: "2025-01-05",
    customer: "Charlie Green",
    status: "Hoàn trả",
  },
  {
    id: "o6",
    createdAt: "2025-01-06",
    customer: "David White",
    status: "Chờ xác nhận",
  },
  {
    id: "o7",
    createdAt: "2025-01-07",
    customer: "Eve Black",
    status: "Vận chuyển",
  },
  {
    id: "o8",
    createdAt: "2025-01-08",
    customer: "Frank Grey",
    status: "Thành công",
  },
  {
    id: "o9",
    createdAt: "2025-01-09",
    customer: "Grace Red",
    status: "Đã huỷ",
  },
  {
    id: "o10",
    createdAt: "2025-01-10",
    customer: "Helen Blue",
    status: "Hoàn trả",
  },
  {
    id: "o11",
    createdAt: "2025-01-11",
    customer: "Ivy Yellow",
    status: "Chờ xác nhận",
  },
];

const statusOptions = [
  { id: "All", name: "Tất cả" },
  { id: "Wait", name: "Chờ xác nhận" },
  { id: "Shipping", name: "Vận chuyển" },
  { id: "Successfully", name: "Thành công" },
  { id: "Cancel", name: "Đã huỷ" },
  { id: "Return", name: "Hoàn trả" },
];

const ManageOder: React.FC = () => {
  //Phân trang

  const [orders, setOrders] = useState<Order[]>([]);
  const [status, setStatus] = useState<any>([]);
  const [selectedType, setSelectedType] = useState<string>("Tất cả");
  const [selectedCriteria, setSelectedCriteria] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleCardClick = (typeOfOrder: string) => {
    console.log("Get order by type: ", typeOfOrder);
    setSelectedType(typeOfOrder);
  };

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);

    let filteredOrders = [...mockOrderData];

    if (selectedCriteria === "codeOfOrder") {
      filteredOrders = filteredOrders.filter((order) =>
        order.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedCriteria === "nameOfOrder") {
      filteredOrders = filteredOrders.filter((order) =>
        order.customer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedCriteria === "dateOfOrder") {
      filteredOrders = filteredOrders.filter((order) =>
        order.createdAt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedCriteria === "statusOfOrder") {
      filteredOrders = filteredOrders.filter((order) =>
        order.status.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setOrders(filteredOrders);
  };

  const handleSearch = () => {
    console.log(selectedCriteria);
    console.log("Search query: ", searchQuery);

    // Call API to get Order by search query and criteria

    // setOrders(filteredOrders);
  };

  useEffect(() => {
    setStatus(statusOptions);
    setOrders(mockOrderData);
  }, [orders]);

  return (
    <div className="ManageOrder">
      <div className="ManageOrder-status">
        {status.map((status: any) => (
          <Card
            key={status.id}
            onClick={() => handleCardClick(status.id)}
            className={selectedType === status.name ? "active" : ""}
            sx={{
              cursor: "pointer",
              "&.active": {
                border: "1px solid #000",
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                <p className="type">{status.name}</p>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                30
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card variant="outlined">
        <CardContent>
          <Box
            sx={{
              display: {
                sm: "flex",
                xs: "block",
              },
              alignItems: "flex-start",
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
                  DANH SÁCH ĐƠN HÀNG
                </Typography>
                <div className="flex w-full max-w-sm items-center border border-gray-300 rounded-lg px-2.5 py-1.5">
                  <SearchIcon
                    className="h-4 w-4 mr-2.5 cursor-pointer"
                    onClick={handleSearch}
                  />

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
              <Select
                value={selectedCriteria}
                onValueChange={setSelectedCriteria}
              >
                <SelectTrigger className="w-[180px] h-[42px] ml-3">
                  <SelectValue placeholder="Tiêu chí tìm kiếm" />
                </SelectTrigger>
                <SelectContent className="w-full ">
                  <SelectGroup>
                    <SelectItem value="codeOfOrder">Mã đơn hàng</SelectItem>
                    <SelectItem value="nameOfOrder">Tên khách hàng</SelectItem>
                    <SelectItem value="dateOfOrder">Ngày tạo</SelectItem>
                    <SelectItem value="statusOfOrder">
                      Trạng thái đơn hàng
                    </SelectItem>
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
                      Mã đơn hàng
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      Ngày tạo
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      Khách hàng
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      Trạng thái
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography color="textSecondary" variant="h6"></Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <Typography variant="body1">{order.id}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{order.createdAt}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{order.customer}</Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        sx={{
                          pl: "4px",
                          pr: "4px",
                          backgroundColor:
                            order.status === "Chờ xác nhận"
                              ? "#d64646"
                              : order.status === "Vận chuyển"
                              ? "#000"
                              : order.status === "Thành công"
                              ? "#1ac75c"
                              : order.status === "Đã huỷ"
                              ? "secondary"
                              : order.status === "Hoàn trả"
                              ? "#545457"
                              : "transparent",
                          color: order.status === "Đã huỷ" ? "#000" : "#fff",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                        size="medium"
                        label={order.status}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <OrderItem orderID={order.id}></OrderItem>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter></TableFooter>
            </Table>{" "}
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

export default ManageOder;
