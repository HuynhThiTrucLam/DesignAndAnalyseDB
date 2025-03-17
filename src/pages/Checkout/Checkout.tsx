import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import "./Checkout.scss";
export const mockOrderData = {};

const Checkout = () => {
  const handleSubmit = () => {
    // Handle form submission (e.g., send data to backend)
    alert("Đặt hàng thành công!");
  };

  return (
    <section className="buy border-1 border-b-gray-500">
      <div className="buy-wrap">
        <div className="buy-left">
          <div className="buy-left-wrap">
            <div className="buy-form flex flex-col gap-5">
              <div className="buy-form-header">
                <p className="font-[600]">Thông tin nhận hàng</p>
              </div>
              <form className=" flex flex-col gap-10">
                <div className="input-focus-effect">
                  <Input
                    type="text"
                    placeholder="* Tên"
                    className="w-full border-1 focus:outline-none"
                    //   onChange={handleSearchChange}
                  />
                </div>
                <div className="input-focus-effect">
                  <Input
                    type="number"
                    placeholder="* Số điện thoại"
                    className="w-full border-1 focus:outline-none"
                    //   onChange={handleSearchChange}
                  />
                </div>
                <div className="input-focus-effect">
                  <Input
                    type="text"
                    placeholder="* Địa chỉ"
                    className="w-full border-1 focus:outline-none"
                    //   onChange={handleSearchChange}
                  />
                </div>
                <div className="input-focus-effect">
                  <Input
                    type="number"
                    placeholder="Email"
                    className="w-full border-1 focus:outline-none"
                    //   onChange={handleSearchChange}
                  />
                </div>

                <div className="input-focus-effect">
                  <Textarea
                    placeholder="Nhập ghi chú (nếu có)"
                    className="Add-desc-textarea"
                  />
                </div>
              </form>
            </div>
            <div className="buy-action flex flex-col gap-[50px]">
              <div className="buy-action-item flex flex-col gap-8">
                <h5 className="font-[600]">Phương thức vận chuyển</h5>
                <RadioGroup
                  defaultValue="comfortable"
                  className="flex flex-col gap-5"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Econimic" id="r1" />
                    <Label htmlFor="r1">Giao hàng tiết kiệm</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fast" id="r2" />
                    <Label htmlFor="r2">Giao hàng nhanh</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="express" id="r3" />
                    <Label htmlFor="r3">Hoả tốc</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="buy-action-item flex flex-col gap-5">
                <h5 className="font-[600]">Thanh toán</h5>
                <div className="checkbox ">
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="shipcode" id="r1" />
                      <Label htmlFor="r1">Thanh toán khi nhận hàng</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="buy-thank text-right flex flex-col gap-2">
            <p className="buy-thank-tittle text-[12px] text-[#d64646] font-[600]">
              Chính sách hoàn trả
            </p>
            <p className="buy-thank-content text-[12px]">
              Cảm ơn bạn đã mua hàng tại SECOND SUNDAY!
            </p>
            <p className=" text-[12px]">
              Các chương trình khuyến mại mới tham khảo tại
              <span className="text-[black] font-[500]">
                {" "}
                <a
                  href="https://www.facebook.com/secondsundayvn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/secondsundayvn
                </a>
              </span>{" "}
              bạn nhé.
            </p>
          </div>
        </div>

        <div className="buy-right">
          <div className="buy-right-header">
            <h3 className="font-[600] text-[20px]">Đơn hàng (1 sản phẩm)</h3>
          </div>
          <div className="buy-right-product">
            <div className="buy-right-product-img">
              <img
                src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/1-jpeg-1698983431761.jpg?v=1698983459007"
                alt="second-sunday"
              />
            </div>
            <div className="buy-right-product-content ">
              <p className="font-[600]">Giày Second Sunday Striker SK38</p>
              <span className="w-[24px] h-[24px] rounded-[50%] bg-black text-white font-[500] flex items-center justify-center">
                36
              </span>
              <p className="buy-right-product-price">
                289.000 <sup>₫</sup>
              </p>
            </div>
          </div>

          <div className="buy-discount">
            <div className="input-focus-effect">
              <Input
                type="search"
                placeholder="Nhap mã giảm giá"
                className="w-full border-1 focus:outline-none"
                //   onChange={handleSearchChange}
              />
            </div>
            <button className="button">
              <p>Áp dụng</p>
            </button>
          </div>

          <div className="flex flex-col gap-3 justify-between">
            <div className="flex justify-between">
              <span className="font-[600]">Tạm tính</span>
              <span>
                289.000 <sup>₫</sup>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-[600]">Phí vận chuyển</span>
              <span>-</span>
            </div>
            <div className="flex justify-between">
              <span className="font-[600]">Tổng cộng</span>
              <p>
                289.000 <sup>₫</sup>
              </p>
            </div>
          </div>

          <button
            className="bg-black text-white font-[600] py-3 rounded-md w-full"
            onClick={handleSubmit}
          >
            ĐẶT HÀNG
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
