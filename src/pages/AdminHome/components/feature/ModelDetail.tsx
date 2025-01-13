import { Product } from "@/types/Product";
import React, { useState } from "react";
import "./ModelDetail.scss";
import renderStars from "@/components/Star/star";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ModelFeedback from "./ModelFeedback";

interface ProductItemProps {
  product?: Product;
}

const ModelDetail = ({ product }: ProductItemProps) => {
  const [openFeedback, setOpenFeedback] = useState(false);
  const [openSizeTab, setOpenSizeTab] = useState(true);
  const [openColorTab, setOpenColorTab] = useState(true);
  const [selectedColor, setSelectedColor] = useState(product?.colorList[0].id);
  const [selectedSize, setSelectedSize] = useState(
    product?.colorList[0].sizeList[0].id
  );
  const handleSelectColor = (colorId: string) => {
    setSelectedColor(colorId);
    setSelectedSize(
      product?.colorList.find((item) => item.id === colorId)?.sizeList[0].id
    );
  };
  const handleSelectSize = (sizeId: string) => {
    setSelectedSize(sizeId);
  };
  const handleOpenFeedBack = () => {
    setOpenFeedback(!openFeedback);
    setOpenSizeTab(false);
    setOpenColorTab(false);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full text-left">
        Xem chi tiết
      </AlertDialogTrigger>
      <AlertDialogContent className="h-max">
        {!openFeedback ? (
          <div className="Detail-container h-max">
            <div className="Detail-title">
              <p>Thông tin sản phẩm</p>
            </div>
            <div className="Detail-header">
              <h1>{product?.name}</h1>
              <div className="Detail-header-right">
                {openColorTab ? (
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
                            background: color.value,
                          }}
                          title={color.id}
                        ></div>
                      ))}
                    </div>
                  </div>
                ) : null}
                {openSizeTab ? (
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
                ) : null}
              </div>
            </div>

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
                  <p>{product?.unitPrice} đồng</p>
                </div>
                <div className="Detail-desc">
                  <p className="title">Số lượng tồn kho:</p>
                  <p>
                    {
                      product?.colorList
                        .find((item) => item.id === selectedColor)
                        ?.sizeList.find((item) => item.id === selectedSize)
                        ?.inventory
                    }{" "}
                    sản phẩm
                  </p>
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
                  <p>{product?.desc}</p>
                </div>
                <p className="Detail-feedback" onClick={handleOpenFeedBack}>
                  Xem tất cả bình luận về sản phẩm
                </p>
              </div>
              <div className="Detail-content2">
                <div className="Detail-desc">
                  <p className="title">Phân loại:</p>
                  <p>{product?.typeOf?.value}</p>
                </div>
                <div className="Detail-desc">
                  <p className="title">Chất liệu:</p>
                  <p>{product?.material}</p>
                </div>
                <div className="Detail-desc">
                  <p className="title">Chính sách bảo hành và đổi trả:</p>
                  <p>{product?.policy}</p>
                </div>
                <div className="Detail-desc">
                  <p className="title">Hướng dẫn bảo quản:</p>
                  <p>{product?.care_instructrion}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ModelFeedback
            prodID={product?.id}
            handleOpenFeedBack={handleOpenFeedBack}
            prodName={product?.name}
          ></ModelFeedback>
        )}
        <AlertDialogFooter>
          {/* <AlertDialogCancel>Thoát</AlertDialogCancel> */}
          <AlertDialogAction>Thoát</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModelDetail;
