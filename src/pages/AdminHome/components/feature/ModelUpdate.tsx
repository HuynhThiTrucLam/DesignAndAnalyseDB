import renderStars from "@/components/Star/star";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Product } from "@/types/Product";
import { useState } from "react";
import { mockTypes } from "../../AdminHome";
import "./ModelDetail.scss";

interface ProductItemProps {
  product?: Product;
}

const ModelUpdate = ({ product }: ProductItemProps) => {
  const [openFeedback, setOpenFeedback] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product?.colorList[0].id);
  const [selectedSize, setSelectedSize] = useState(
    product?.colorList[0].sizeList[0].id
  );
  const [selectedType, setSelectedType] = useState(product?.typeOf.value || "");

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  const handleSelectColor = (colorId: string) => {
    setSelectedColor(colorId);
    setSelectedSize(
      product?.colorList.find((item) => item.id === colorId)?.sizeList[0].id
    );
  };

  const handleOpenFeedBack = () => {
    setOpenFeedback(!openFeedback);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full  text-left">
        Chỉnh sửa
      </AlertDialogTrigger>
      <AlertDialogContent className="h-max">
        <div className="Detail-container h-max">
          <div className="Detail-title">
            <p>Chỉnh sửa sản phẩm</p>
          </div>
          <div className="Detail-header">
            <h1>{product?.name}</h1>

            <div className="Detail-header-right">
              <div className="Detail-colors">
                <span className="text-black mr-[5px] title">Màu sắc: </span>
                <div className="Detail-colors-options">
                  {product?.colorList.map((color) => (
                    <div
                      key={color.id}
                      onClick={() => handleSelectColor(color.id)}
                      className={`Detail-colors-option ${
                        color.id === selectedColor ? "selected" : ""
                      }`}
                      style={{
                        background: color.value, // Use the color ID as the background
                      }}
                      title={color.id} // Tooltip to show color name when hovered
                    ></div>
                  ))}
                </div>
              </div>
              <div className="Detail-sizes">
                <span className="text-black mr-[5px] title">Size: </span>
                <div className="Detail-sizes-options">
                  {product?.colorList
                    ?.find((item) => item.id === selectedColor)
                    ?.sizeList.map((size) => (
                      <div
                        key={size.id}
                        className={`Detail-sizes-option ${
                          size.id === selectedSize ? "selected" : ""
                        }`}
                        onClick={() => setSelectedSize(size.id)}
                      >
                        {size.value}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          {!openFeedback ? (
            <div className="Detail-content">
              <div className="Detail-image">
                <img
                  src={
                    product?.colorList.find((item) => item.id === selectedColor)
                      ?.img[0]
                  }
                ></img>
                <div className="Detail-image-list">
                  {product?.colorList
                    .find((item) => item.id === selectedColor)
                    ?.img.map((img) => (
                      <img src={img} key={img}></img>
                    ))}
                </div>
              </div>
              <div className="Detail-content2">
                <div className="Detail-desc">
                  <p className="title">Đơn giá:</p>
                  <div className="flex justify-between items-center">
                    <Input
                      type="number"
                      placeholder="10 000 đồng"
                      value={product?.unitPrice}
                      className="w-[90%]"
                    />
                    <p> đồng</p>
                  </div>
                </div>
                <div className="Detail-desc">
                  <p className="title">Số lượng tồn kho:</p>
                  <div className="flex justify-between items-center">
                    <Input
                      type="number"
                      value={
                        product?.colorList
                          .find((item) => item.id === selectedColor)
                          ?.sizeList.find((item) => item.id === selectedSize)
                          ?.inventory
                      }
                      className="w-[80%]"
                    />
                    <p>sản phẩm</p>
                  </div>
                </div>
                <div className="Detail-desc">
                  <p className="title">Lượt bán:</p>
                  <p>{product?.totalSold} đơn hàng</p>
                </div>

                <div className="Detail-desc">
                  <p className="title">Lượt đánh giá</p>
                  <div className="Detail-rating">
                    {renderStars(product?.rating || 0)}
                    <p> / {product?.rating}</p>
                  </div>
                </div>
                <div className="Detail-desc">
                  <p className="title">Mô tả:</p>
                  <Textarea
                    placeholder="Type your message here."
                    value={product?.desc}
                    className="Detail-desc-textarea"
                  />
                </div>
              </div>
              <div className="Detail-content2">
                <div className="Detail-desc">
                  <p className="title">Phân loại:</p>
                  <Select value={selectedType} onValueChange={handleTypeChange}>
                    <SelectTrigger className="w-full ">
                      <SelectValue placeholder="Chọn loại sản phẩm" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {mockTypes.map((type) => {
                          return (
                            <SelectItem key={type.value} value={type.value}>
                              {type.value}
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="Detail-desc">
                  <p className="title">Chất liệu:</p>
                  <Input type="string" value={product?.material} />
                </div>
                <div className="Detail-desc">
                  <p className="title">Chính sách bảo hành và đổi trả:</p>
                  <Textarea
                    placeholder="Type your message here."
                    value={product?.policy}
                    className="Detail-desc-policy"
                  />
                </div>
                <div className="Detail-desc">
                  <p className="title">Hướng dẫn bảo quản:</p>
                  <Textarea
                    placeholder="Type your message here."
                    value={product?.care_instructrion}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="Detail-listfeed">
              <div className="Detail-listfeed-header">
                <h6>Bình luận về sản phẩm</h6>
                <p className="Detail-feedback" onClick={handleOpenFeedBack}>
                  Xem chi tiết
                </p>
              </div>
            </div>
          )}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Thoát</AlertDialogCancel>
          <AlertDialogAction>Cập nhật ngay</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModelUpdate;
