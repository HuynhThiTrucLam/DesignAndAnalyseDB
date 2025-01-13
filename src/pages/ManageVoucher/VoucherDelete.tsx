import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";

interface VoucherDeleteProps {
  voucherCode: string;
}

const VoucherDelete = ({ voucherCode }: VoucherDeleteProps) => {
  const handleDeleteVoucher = () => {
    console.log("Delete voucher by code: ", voucherCode);
  };
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="w-full">
          <Trash2
            className="h-4 w-4  cursor-pointer"
            //   onClick={handleSearch}
          />
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-fit h-auto p-[30px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[24px]">
              Bạn có chắc chắn muốn xoá voucher {voucherCode}?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Hành động này không thể hoàn tác. Điều này sẽ xóa vĩnh viễn xóa dữ
              liệu của sản phẩm khỏi các máy chủ của chúng tôi.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Thoát</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteVoucher}>
              Xoá
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default VoucherDelete;
