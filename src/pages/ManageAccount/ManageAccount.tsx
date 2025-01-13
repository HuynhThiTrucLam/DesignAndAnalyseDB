import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Account } from "@/types/Account";
import { EllipsisVerticalIcon, SquarePen } from "lucide-react";

const mockAccountData: Account = {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hAt5yLa0ySiNfk7UKtkNKKxj_0JNk3UIdA&s",
  username: "admin",
  password: "admin",
  id: "1",
  phone: "0123456789",
  email: "ahsjd@gmail.com",
};

const ManageAccount = () => {
  const [account, setAccount] = useState<Account>(mockAccountData);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleUpdateAccount = () => {
    console.log("Update account");
  };

  const handleToggleDisable = () => {
    setIsDisabled(false);
  };
  return (
    <div>
      {" "}
      <Card variant="outlined">
        <CardContent>
          <Box
            sx={{
              display: {
                sm: "flex",
                xs: "block",
              },
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <div className="flex  items-center justify-between">
                <Typography
                  variant="h3"
                  sx={{
                    paddingTop: "10px",
                    marginBottom: "30px",
                    fontWeight: "600",
                    color: "text.primary",
                    fontSize: "18px",
                  }}
                  gutterBottom
                >
                  TÀI KHOẢN CỦA TÔI
                </Typography>
              </div>
            </Box>
          </Box>
          <div className="flex flex-col gap-6 bmy-6 max-w-270">
            <div className="col-span-5 xl:col-span-2">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="  border-b border-stroke py-4 px-7 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Ảnh đại diện
                  </h3>
                  {/* More info icon */}
                </div>
                <div className="p-7">
                  <div>
                    <div className="mb-4 flex flex-col items-center gap-3">
                      <div
                        className=" overflow-hidden justify-center items-center flex
                      border-2 border-gray-300 dark:border-strokedark rounded-full"
                      >
                        <img
                          src={account.img}
                          alt="User"
                          className=" w-[200px] h-auto rounded-full"
                        />
                      </div>
                      <div className="ml-6">
                        <span className="flex gap-2.5">
                          <button className="text-sm hover:text-primary">
                            Xoá
                          </button>
                          <button className="text-sm hover:text-primary">
                            Chỉnh sửa
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Account-Info">
              <div className="col-span-5 xl:col-span-3">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="flex flex-row justify-between items-center border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      Thông tin tài khoản
                    </h3>
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
                            <SquarePen
                              width="20"
                              height="20"
                              onClick={handleToggleDisable}
                            />
                          </IconButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Chỉnh sửa tài khoản</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="p-7">
                    <div className="flex flex-col gap-6">
                      <div className="mb-5.5 flex flex-col gap-6 sm:flex-row">
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="fullName"
                          >
                            Username
                          </label>
                          <Input
                            placeholder={account.username}
                            disabled={isDisabled}
                          ></Input>
                        </div>

                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="phoneNumber"
                          >
                            Số điện thoại
                          </label>
                          <Input
                            disabled={isDisabled}
                            placeholder={account.phone}
                          ></Input>
                        </div>
                      </div>

                      <div className="mb-5.5">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="emailAddress"
                        >
                          Địa chỉ Email
                        </label>
                        <Input
                          type="email"
                          placeholder={account.email}
                          disabled={isDisabled}
                        ></Input>
                      </div>
                      <div className="mb-5.5">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="emailAddress"
                        >
                          Mật khẩu
                        </label>
                        <Input
                          type="password"
                          value={account.password}
                          disabled={isDisabled}
                        ></Input>
                      </div>
                      {isDisabled === false ? (
                        <div className="w-full flex gap-6">
                          <button
                            className="w-[50%] p-3 rounded-sm border-[0.5px]  border-black font-[600]"
                            onClick={() => setIsDisabled(true)}
                          >
                            {" "}
                            Thoát khỏi chỉnh sửa
                          </button>
                          <button
                            className="w-[50%] p-3 rounded-sm border-[1px] text-semibold border-black font-[600]"
                            onClick={handleUpdateAccount}
                          >
                            Lưu thay đổi
                          </button>
                        </div>
                      ) : null}
                    </div>
                    <button className="w-full mt-6 px-28 py-3 rounded-sm bg-black text-white font-[600]">
                      Đăng xuất
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageAccount;
