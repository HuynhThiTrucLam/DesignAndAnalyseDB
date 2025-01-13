import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

const topSellingProducts = [
  {
    id: "1",
    name: "Product A",
    totalSold: 1200, // Tổng số lượng đã bán
    unitPrice: "45.99", // Đơn giá
    revenue: (1200 * 45.99).toFixed(2), // Doanh thu (Tổng số lượng * Đơn giá)
    color: "#000", // Màu sắc (mã màu Hex)
  },
  {
    id: "2",
    name: "Product B",
    totalSold: 950, // Tổng số lượng đã bán
    unitPrice: "32.50", // Đơn giá
    revenue: (950 * 32.5).toFixed(2), // Doanh thu
    color: "#000", // Màu sắc (mã màu Hex)
  },
  {
    id: "3",
    name: "Product C",
    totalSold: 800, // Tổng số lượng đã bán
    unitPrice: "55.75", // Đơn giá
    revenue: (800 * 55.75).toFixed(2), // Doanh thu
    color: "#000", // Màu sắc (mã màu Hex)
  },
  {
    id: "4",
    name: "Product D",
    totalSold: 675, // Tổng số lượng đã bán
    unitPrice: "29.99", // Đơn giá
    revenue: (675 * 29.99).toFixed(2), // Doanh thu
    color: "#000", // Màu sắc (mã màu Hex)
  },
  {
    id: "5",
    name: "Product E",
    totalSold: 540, // Tổng số lượng đã bán
    unitPrice: "75.30", // Đơn giá
    revenue: (540 * 75.3).toFixed(2), // Doanh thu
    color: "#000", // Màu sắc (mã màu Hex)
  },
];

const ProductTable = () => {
  // Hàm trả về màu sắc dựa trên chỉ số (index)
  const getChipColor = (index: any) => {
    const colors = ["#d64646", "#000", "secondary", "#000", "#d64646"]; // Mảng màu
    return colors[index % colors.length]; // Quay lại màu nếu index lớn hơn số màu trong mảng
  };

  return (
    <Table
      aria-label="simple table"
      sx={{
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Tên sản phẩm
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Số lượng đã bán
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Đơn giá
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography color="textSecondary" variant="h6">
              Doanh Thu
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {topSellingProducts.map((product, index) => (
          <TableRow key={product.id}>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <p>Mã màu:</p>
                    <div
                      className="border-radius"
                      style={{
                        backgroundColor: product.color,
                        width: "14px",
                        height: "14px",
                      }}
                    ></div>
                  </div>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.totalSold}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.unitPrice} đồng
              </Typography>
            </TableCell>

            <TableCell align="right">
              <Typography variant="h6">{product.revenue} đồng</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
