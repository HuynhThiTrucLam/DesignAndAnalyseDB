import { Input } from "@/components/ui/input";
import React from "react";

const ForgotPass = () => {
  return (
    <div>
      <div className="Detail-container h-max">
        <div className="font-[600] text-[16px] bg-[#d64646] w-max py-3 px-6 text-white rounded-3xl mb-10">
          <p className=" text-[14px] ">Quên mật khẩu</p>
        </div>
        <div className=" flex flex-col gap-6 w-full bd-b-none">
          <h1 className="w-full font-[600] text-[30px] text-black dark:text-white">
            Chúng tôi đã gửi yêu cầu của bạn đến quản trị viên
          </h1>
          <div className="w-full">
            <label
              className="mb-3 block font-[600] text-[16px] text-black dark:text-white"
              htmlFor="phoneNumber"
            >
              Nhập của bạn email tại đây:
            </label>
            <Input type="email"></Input>
            <p className="font-[400] text-[14px] mt-4">
              {" "}
              Vui lòng kiểm tra email của bạn để nhận mật khẩu mới sau vài phút.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
