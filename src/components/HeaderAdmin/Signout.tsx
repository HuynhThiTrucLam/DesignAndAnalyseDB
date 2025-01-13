import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate("/admin/sign-in");
    console.log("Sign out");
  };
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="w-full text-left">
          Đăng xuất
        </AlertDialogTrigger>
        <AlertDialogContent className="h-max border border-none">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Bạn có chắc chắn muốn đăng xuất khỏi tài khoản?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Hãy chắc chắn rằng bạn đã lưu lại tất cả thông tin trước khi đăng
              xuất khỏi tài khoản.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Thoát</AlertDialogCancel>
            <AlertDialogAction onClick={handleSignOut}>
              Đăng xuất
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Signout;
