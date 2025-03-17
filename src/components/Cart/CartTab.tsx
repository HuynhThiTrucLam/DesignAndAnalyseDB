import { Button } from "@/components/ui/button";
import shoppingCart from "../../assets/images/shopping-cart.png";
import "./CartTab.scss";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const mockData = [
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
  {
    id: "4",
    name: "Áo thun nữ",
    img: "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
    price: 150000,
    color: "#f00",
    size: "S",
    quantity: 1,
  },
  {
    id: "5",
    name: "Áo thun nữ",
    img: "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
    price: 150000,
    color: "#f00",
    size: "S",
    quantity: 1,
  },
  {
    id: "6",
    name: "Áo thun nữ",
    img: "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
    price: 150000,
    color: "#f00",
    size: "S",
    quantity: 1,
  },
];

export function CartTab() {
  //   const [cartItemList, setCartItemList] = useState<[]>([]);
  // const [isSignedIn, setIsSignedIn] = useState(true);

  //   useEffect(() => {
  //     setCartItemList(mockData);
  //   }, [cartItemList]);

  return (
    <Sheet>
      <SheetTrigger>
        <i className="fa-solid fa-phone-volume" />
        <div className="header-shopping-wrap">
          <img src={shoppingCart} alt="shopping-cart" />
          <p className="header-shopping-circle">0</p>
        </div>
      </SheetTrigger>
      <SheetContent className="z-[9999999]">
        <SheetHeader>
          <SheetTitle className="text-[24px] mt-10">Giỏ hàng</SheetTitle>
          <SheetDescription className="pb-4">
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-between gap-[50px] ">
          <div className=" max-h-[350px] overflow-y-auto">
            {mockData?.map((product) => (
              <div key={product.id} className="OrderDetail-product flex mb-6">
                <div className="OrderDetaxssil-product-content flex gap-[2px]">
                  <div className="OrderDetail-product-img w-24 h-24 mr-4">
                    <img
                      className="w-full h-full object-cover rounded-md"
                      src={product.color}
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
        <SheetFooter className="flex mt-6 ">
          <SheetClose asChild>
            <Button className="font-[600] text-[14px]" type="submit">
              Thanh toán
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
