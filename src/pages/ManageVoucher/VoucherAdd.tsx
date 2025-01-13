import { Input } from "@/components/ui/input";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import React, { useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { IconButton } from "@mui/material";
import { Voucher } from "@/types/Voucher";
import { set } from "react-hook-form";

const VoucherAdd = () => {
  const [voucher, setVoucher] = React.useState<Voucher | null>(null);
  const [code, setCode] = React.useState<string>("");
  const [startDate, setStartDate] = React.useState<string>("");
  const [duaration, setDuaration] = React.useState<number>(0);
  const [typeOfDuration, setTypeOfDuration] = React.useState<string>("day");

  const [type, setType] = React.useState<string>("percent");
  const [value, setValue] = React.useState<number>(0);
  const [quantity, setQuantity] = React.useState<number>(0);
  const [description, setDescription] = React.useState<string>("");
  const codeOnChange = (event: any) => {
    setCode(event.target.value);
  };
  const startDateOnChange = (event: any) => {
    setStartDate(event.target.value);
  };

  const duarationOnChange = (event: any) => {
    setDuaration(event.target.value);
  };

  const valueOnChange = (event: any) => {
    setValue(event.target.value);
  };

  const quantityOnChange = (event: any) => {
    setQuantity(event.target.value);
  };

  const descriptionOnChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleAddVoucher = () => {
    console.log("Add voucher");
    console.log(code);
    console.log(startDate);
    console.log(duaration);
    console.log(typeOfDuration);
    console.log(type);
    console.log(value);
    console.log(quantity);
    console.log(description);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <IconButton
                aria-label="menu"
                color="primary"
                aria-controls="dd-menu"
                aria-haspopup="true"
                className="mr-2"
              >
                <AddToPhotosOutlinedIcon />
              </IconButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>Thêm voucher mới</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </AlertDialogTrigger>
      <AlertDialogContent className="h-max">
        <div className="Voucher">
          <div className="Voucher-header">
            <div className="Voucher-header-left w-full">
              <h3 className="text-xl font-semibold w-[15%]">Mã giảm giá:</h3>
              <Input
                className="w-[85%]"
                placeholder="Nhập mã giảm giá"
                onChange={codeOnChange}
              />
            </div>
          </div>
          <div className="Voucher-content">
            <div className="Voucher-content-item justify-between  items-center">
              <p className="title">Ngày bắt đầu:</p>
              <Input
                type="date"
                className="w-[80%]"
                onChange={startDateOnChange}
              />
            </div>
            <div className="Voucher-content-item justify-between items-center">
              <p className="title">Hạn sử dụng:</p>
              <div className="w-[80%] flex items-center gap-2">
                <Input
                  placeholder="Nhập hạn sử dụng"
                  type="number"
                  onChange={duarationOnChange}
                  className="w-[70%]"
                />
                <Select
                  value={typeOfDuration}
                  onValueChange={setTypeOfDuration}
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
                  placeholder="Nhập giá trị"
                  type="numsber"
                  className="w-[70%]"
                  onChange={valueOnChange}
                />
                <Select value={type} onValueChange={setType}>
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
                placeholder="Nhập số lượng"
                type="number"
                className="w-[80%]"
                onChange={quantityOnChange}
              />
            </div>
            <div className="Voucher-content-item justify-between  items-center">
              <p className="title">Mô tả:</p>
              <Textarea
                placeholder="Nhập mô tả"
                className="w-[80%]"
                onChange={descriptionOnChange}
              />
            </div>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Thoát</AlertDialogCancel>
          <AlertDialogAction onClick={handleAddVoucher}>
            Thêm ngay
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default VoucherAdd;
