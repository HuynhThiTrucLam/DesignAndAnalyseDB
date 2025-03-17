import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Voucher } from "@/types/Voucher";
import { Chip } from "@mui/material";
import React, { useEffect } from "react";
import "./VoucherItem.scss";

interface VoucherItemProps {
  voucherId: string;
}

const voucherMockData: Voucher = {
  id: "0000001",
  code: "MUAHE2025",
  startDate: "2021-10-10",
  duaration: 10,
  typeOfDuration: "day",
  type: "percent",
  value: 10,
  quantity: 10,
  description: "Mua hàng giảm giá 10%",
};

const VoucherItem = ({}: VoucherItemProps) => {
  const [voucher, setVoucher] = React.useState<Voucher | null>(null);

  useEffect(() => {
    // Call API to get voucher by ID
    setVoucher(voucherMockData);
  }, [voucher]);

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="w-full">Xem chi tiết</AlertDialogTrigger>
        <AlertDialogContent className="max-w-4xl w-full bg-white rounded-lg shadow-lg h-max  p-[30px 20px] ">
          <div className="Voucher">
            <div className="Voucher-header">
              <div className="Voucher-header-left">
                <h3 className="text-xl font-semibold">Mã giảm giá:</h3>
                <p>{voucher?.code}</p>
              </div>
              <div className="Voucher-header-right">
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor:
                      voucher?.type === "percent" ? "#d64646" : "#000",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                  size="medium"
                  label={voucher?.type}
                />
              </div>
            </div>
            <div className="Voucher-content">
              <div className="Voucher-content-item">
                <p className="title">Ngày bắt đầu:</p>
                <p>{voucher?.startDate}</p>
              </div>
              <div className="Voucher-content-item">
                <p className="title">Hạn sử dụng:</p>
                <p>
                  {voucher?.duaration}{" "}
                  {voucher?.typeOfDuration === "day"
                    ? "ngày"
                    : voucher?.typeOfDuration === "month"
                    ? "tháng"
                    : "năm"}
                </p>
              </div>
              <div className="Voucher-content-item">
                <p className="title">Giá trị:</p>
                <p>10%</p>
              </div>
              <div className="Voucher-content-item">
                <p className="title">Số lượng:</p>
                <p>10</p>
              </div>
              <div className="Voucher-content-item">
                <p className="title">Mô tả:</p>
                <p>Mua hàng giảm giá 10%</p>
              </div>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction>Thoát</AlertDialogAction>
            {/* <AlertDialogAction className="bg-blue-600 text-white rounded-md px-4 py-2 ml-2 hover:bg-blue-500 transition-all">Action</AlertDialogAction> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default VoucherItem;
