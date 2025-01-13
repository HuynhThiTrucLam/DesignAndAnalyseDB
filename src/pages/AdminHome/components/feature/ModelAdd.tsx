import { Input } from "@/components/ui/input";
import "./ModelAdd.scss";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";

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
import { mockSizes, mockTypes } from "../../AdminHome";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { ColorPicker } from "@/components/ui/color-picker";

const ModelAdd = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [material, setMaterial] = useState("");
  const [policy, setPolicy] = useState("");
  const [instruction, setInstruction] = useState("");
  const [picture, setPicture] = useState("");
  const [inventory, setInventory] = useState(0);

  const handleAddProduct = () => {
    console.log(name);
    console.log(color);
    console.log(type);
    console.log(size);
    console.log(price);
    console.log(inventory);
    console.log(description);
    console.log(material);
    console.log(policy);
    console.log(instruction);
    console.log("Add new product");
  };
  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handlePriceChange = (event: any) => {
    setPrice(event.target.value);
  };
  const handleInventoryChange = (event: any) => {
    setInventory(event.target.value);
  };
  const handleDescChange = (event: any) => {
    setDescription(event.target.value);
  };
  const handleInstructionChange = (event: any) => {
    setInstruction(event.target.value);
  };
  const handleMaterialChange = (event: any) => {
    setMaterial(event.target.value);
  };
  const handlePolicyChange = (event: any) => {
    setPolicy(event.target.value);
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
              <p>Thêm sản phẩm mới</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </AlertDialogTrigger>
      <AlertDialogContent className="h-max">
        <div className="Add-container">
          <div className="Add-title mb-6">
            <p>Thêm sản phẩm mới</p>
          </div>
          <div className="Add-header">
            <Input
              placeholder="Nhập tên sản phẩm"
              value={name}
              onChange={handleNameChange}
            />
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Chọn loại sản phẩm" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {mockTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.value}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="Add-detail">
            <div className="Add-left">
              <div className="Add-color">
                <p className="title">Thêm màu:</p>

                <ColorPicker
                  color={color}
                  onChange={(value: string) => {
                    setColor(value);
                  }}
                />
              </div>
              <div className="Add-size">
                <p className="title">Thêm kích thước:</p>
                <Select value={size} onValueChange={setSize}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Chọn kích thước" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {mockSizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="Add-image">
                <p className="title">Thêm hình ảnh sản phẩm tại đây</p>
                <div className="Add-image-list">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Input id="picture" type="file" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Input id="picture" type="file" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Input id="picture" type="file" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Input id="picture" type="file" />
                  </div>
                </div>
              </div>
            </div>
            <div className="Add-middle">
              <div className="Add-price">
                <p className="title">Đơn giá:</p>
                <Input
                  placeholder="Nhập đơn giá"
                  type="number"
                  value={price}
                  onChange={handlePriceChange}
                />
              </div>
              <div className="Add-inventory">
                <p className="title">Số lượng nhập:</p>
                <Input
                  placeholder="Số lượng nhập"
                  type="number"
                  value={inventory}
                  onChange={handleInventoryChange}
                />
              </div>
              <div className="Add-desc">
                <p className="title">Mô tả:</p>
                <Textarea
                  placeholder="Nhập mô tả sản phẩm tại đây"
                  className="Add-desc-textarea"
                  value={description}
                  onChange={handleDescChange}
                />
              </div>
              <div className="Add-desc">
                <p className="title">Hướng dẫn bảo quản:</p>
                <Textarea
                  placeholder="Nhập hướng dẫn bảo quản sản phẩm tại đây"
                  value={instruction}
                  onChange={handleInstructionChange}
                />
              </div>
            </div>
            <div className="Add-right">
              <div className="Add-desc">
                <p className="title">Chất liệu:</p>
                <Input
                  placeholder="Nhập chất liệu tại đây"
                  value={material}
                  onChange={handleMaterialChange}
                />
              </div>
              <div className="Add-desc">
                <p className="title">Chính sách bảo hành và đổi trả:</p>
                <Textarea
                  placeholder="Nhập chính sách bảo hành và đổi trả"
                  className="Add-desc-policy"
                  value={policy}
                  onChange={handlePolicyChange}
                />
              </div>
            </div>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Thoát</AlertDialogCancel>
          <AlertDialogAction onClick={handleAddProduct}>
            Thêm sản phẩm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModelAdd;
