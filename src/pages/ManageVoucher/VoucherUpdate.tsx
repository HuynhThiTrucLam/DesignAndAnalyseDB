import React, { useEffect } from "react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SquarePen } from "lucide-react";
import { Voucher } from "@/types/Voucher";
import { Chip } from "@mui/material";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { set } from "react-hook-form";

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

const VoucherUpdate = () => {
  const [voucher, setVoucher] = React.useState<Voucher | null>(null);
  const [code, setCode] = React.useState<string>(voucher?.code || "");
  const [startDate, setStartDate] = React.useState<string>(
    voucher?.startDate || ""
  );
  const [duaration, setDuaration] = React.useState<number>(
    voucher?.duaration || 0
  );
  const [typeOfDuration, setTypeOfDuration] = React.useState<string>(
    voucher?.typeOfDuration || ""
  );

  const [type, setType] = React.useState<string>(voucher?.type || "");
  const [value, setValue] = React.useState<number>(voucher?.value || 0);
  const [quantity, setQuantity] = React.useState<number>(
    voucher?.quantity || 0
  );
  const [description, setDescription] = React.useState<string>(
    voucher?.description || ""
  );

  const startDateOnChange = (event: any) => {
    setStartDate(event.target.value);
  };

  const duarationOnChange = (event: any) => {
    setDuaration(event.target.value);
  };

  const typeOfDurationOnChange = (event: any) => {
    setTypeOfDuration(event.target.value);
  };

  const valueOnChange = (event: any) => {
    setValue(event.target.value);
  };

  const typeOnChange = (event: any) => {
    setType(event.target.value);
  };

  const quantityOnChange = (event: any) => {
    setQuantity(event.target.value);
  };

  const descriptionOnChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleUpdateVoucher = () => {
    console.log("Update voucher");
    console.log(code);
    console.log(startDate);
    console.log(duaration);
    console.log(typeOfDuration);
    console.log(type);
    console.log(value);
    console.log(quantity);
    console.log(description);
  };

  useEffect(() => {
    // Call API to get voucher by ID
    const responseData = voucherMockData;
    setCode(responseData.code);
    setStartDate(responseData.startDate);
    setDuaration(responseData.duaration);
    setTypeOfDuration(responseData.typeOfDuration);
    setType(responseData.type);
    setValue(responseData.value);
    setQuantity(responseData.quantity);
    setDescription(responseData.description);
    setVoucher(voucherMockData);
  }, [voucher]);

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="w-full">
          <SquarePen className="h-4 w-4 cursor-pointer" />
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-4xl w-full bg-white rounded-lg shadow-lg h-max  p-[30px 20px] ">
          <div className="Voucher">
            <div className="Voucher-header">
              <div className="Voucher-header-left">
                <h3 className="text-xl font-semibold">Mã giảm giá:</h3>
                <p>{code}</p>
              </div>
            </div>
            <div className="Voucher-content">
              <div className="Voucher-content-item justify-between  items-center">
                <p className="title">Ngày bắt đầu:</p>
                <Input
                  type="date"
                  value={startDate}
                  className="w-[80%]"
                  onChange={startDateOnChange}
                />
              </div>
              <div className="Voucher-content-item justify-between items-center">
                <p className="title">Hạn sử dụng:</p>
                <div className="w-[80%] flex items-center gap-2">
                  <Input
                    type="number"
                    value={duaration}
                    onChange={duarationOnChange}
                    className="w-[70%]"
                  />
                  <Select
                    value={typeOfDuration}
                    onValueChange={typeOfDurationOnChange}
                  >
                    <SelectTrigger className="w-[30%] ">
                      <SelectValue placeholder="Chọn loại sản phẩm" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="day"> Ngày</SelectItem>
                        <SelectItem value="month"> Tháng</SelectItem>
                        <SelectItem value="year"> Năm</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="Voucher-content-item justify-between  items-center">
                <p className="title">Giá trị:</p>
                <div className="flex w-[80%] items-center gap-2">
                  <Input
                    type="numsber"
                    value={value}
                    className="w-[70%]"
                    onChange={valueOnChange}
                  />
                  <Select value={type} onValueChange={typeOnChange}>
                    <SelectTrigger className="w-[30%] ">
                      <SelectValue placeholder="Chọn loại sản phẩm" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="percent"> %</SelectItem>
                        <SelectItem value="value"> Nghìn đồng</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="Voucher-content-item justify-between  items-center">
                <p className="title">Số lượng:</p>
                <Input
                  type="number"
                  value={quantity}
                  className="w-[80%]"
                  onChange={quantityOnChange}
                />
              </div>
              <div className="Voucher-content-item justify-between  items-center">
                <p className="title">Mô tả:</p>
                <Textarea
                  value={description}
                  className="w-[80%]"
                  onChange={descriptionOnChange}
                />
              </div>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Thoát</AlertDialogCancel>
            <AlertDialogAction onClick={handleUpdateVoucher}>
              Cập nhật ngay
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default VoucherUpdate;
