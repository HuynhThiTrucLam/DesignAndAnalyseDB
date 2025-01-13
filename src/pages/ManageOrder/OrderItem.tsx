import React, { useEffect, useState } from "react";
import "./OrderItem.scss";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export type OrderDetail = {
  createdAt: string;
  confirmAt: string;
  customer: string;
  status: string;
  payment: string;
  products: {
    id: string;
    name: string;
    img: string;
    price: number;
    color: string;
    size: string;
    quantity: number;
  }[];
};

export const mockOrderData = {
  createdAt: "09:00:00 2025-01-01",
  confirmAt: "09:30:00 2025-01-02",
  customer: "John Doe",
  status: "Chờ xác nhận",
  payment: "Thanh toán khi nhận hàng",
  products: [
    {
      id: "1",
      name: "Áo thun nam",
      img: "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
      price: 100000,
      color: "#000",
      size: "M",
      quantity: 2,
    },
    {
      id: "2",
      name: "Áo thun Jacket",
      img: "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
      price: 120000,
      color: "#555",
      size: "L",
      quantity: 3,
    },
    {
      id: "3",
      name: "Áo thun nữ",
      img: "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
      price: 150000,
      color: "#f00",
      size: "S",
      quantity: 1,
    },
  ],
};

interface OrderIdProps {
  orderID: string;
}
const OrderItem = ({ orderID }: OrderIdProps) => {
  const [orderDetail, setOrderDetail] = useState<OrderDetail>();

  useEffect(() => {
    setOrderDetail(mockOrderData);
  }, []);

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="w-full">Xem chi tiết</AlertDialogTrigger>
        <AlertDialogContent className="max-w-4xl w-full bg-white rounded-lg shadow-lg h-max  p-[30px 20px] ">
          <div className="OrderDetail">
            <div className="OrderDetail-header">
              <div className="OrderDetail-header-top">
                <h1 className="OrderDetail-header-title">
                  Đơn hàng: {orderID}
                </h1>
                <p
                  className="OrderDetail-status"
                  style={{
                    backgroundColor:
                      orderDetail?.status === "Chờ xác nhận"
                        ? "#f5da42"
                        : orderDetail?.status === "Vận chuyển"
                        ? "#000"
                        : orderDetail?.status === "Thành công"
                        ? "#1ac75c"
                        : orderDetail?.status === "Đã huỷ"
                        ? "secondary"
                        : orderDetail?.status === "Hoàn trả"
                        ? "#545457"
                        : "transparent",
                    color:
                      orderDetail?.status === "Đã huỷ" ||
                      orderDetail?.status === "Chờ xác nhận"
                        ? "#000"
                        : "#fff",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {orderDetail?.status}
                </p>
              </div>
              <div className="OrderDetail-header-bottom">
                <div className="flex gap-4">
                  <p className="title">Khách hàng:</p>
                  <p>{orderDetail?.customer}</p>
                </div>
                <div className="flex gap-4">
                  <p className="title">Phương thức thanh toán:</p>
                  <p>{orderDetail?.payment}</p>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex gap-4 ">
                    <p className="title">Ngày đặt hàng:</p>
                    <p>{orderDetail?.createdAt}</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="title">Ngày xác nhận:</p>
                    <p>{orderDetail?.confirmAt}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="OrderDetail-body">
              {orderDetail?.products.map((product) => (
                <div key={product.id} className="OrderDetail-product flex mb-6">
                  <div className="OrderDetail-product-content flex gap-[2px]">
                    <div className="OrderDetail-product-img w-24 h-24 mr-4">
                      <img
                        className="w-full h-full object-cover rounded-md"
                        src={product.img}
                        alt={product.name}
                      />
                    </div>
                    <div className="OrderDetail-product-info">
                      <p className="OrderDetail-product-name">{product.name}</p>

                      <div className="OrderDetail-product-color">
                        <p>Size:</p>
                        <p>{product.size}</p>
                      </div>
                      <div className="OrderDetail-product-color">
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
                    </div>
                  </div>
                  <div className="OrderDetail-product-quantity">
                    <p>{product.quantity}x</p>
                  </div>
                  <div className="OrderDetail-product-price">
                    <p> {product.price.toLocaleString()}đ</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="OrderDetail-total">
              <div className="OrderDetail-amount">
                <p className="title">Tổng tiền:</p>
                <p className="price">1.000.000đ</p>
              </div>
              <div className="OrderDetail-shipping">
                <p className="title">Phí vận chuyển:</p>
                <p className="price">30.000đ</p>
              </div>
              <div className="OrderDetail-discount">
                <p className="title">Giảm giá:</p>
                <p className="price">100.000đ</p>
              </div>
              <div className="OrderDetail-pay">
                <p className="title">Tổng thanh toán:</p>
                <p className="price">930.000đ</p>
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

export default OrderItem;
