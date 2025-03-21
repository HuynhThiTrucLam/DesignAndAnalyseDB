import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import ForgotPass from "./ForgotPass";

const SignInAdmin = () => {
  const navigate = useNavigate();
  const handleReturnPassword = () => {
    console.log("Return password");
  };
  const handleSignIn = () => {
    navigate("/admin");
    console.log("Sign in");
  };
  return (
    <div className="w-full h-screen bg-cover bg-center bg-slate-50">
      <div className="py-16 h-screen flex justify-center items-center ">
        <div className="w-full h-[50vh]  p-8  flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/ed/8d/5e/ed8d5e9a0a36dbf20e5a5511ac76acaa.jpg'",
            }}
          ></div>

          <div className="w-full flex flex-col justify-center pl-8 lg:w-1/2">
            <h2 className="text-[24px]  font-semibold text-center">
              Đăng nhập
            </h2>
            <div className="flex flex-col gap-4 my-10">
              <div className="flex text-[13px] flex-col gap-3">
                <p className="font-[600]">Tên đăng nhập</p>
                <Input></Input>
              </div>
              <div className="flex text-[13px] flex-col gap-3">
                <p className="font-[600]">Mật khẩu</p>
                <Input type="password"></Input>
              </div>
              <div className=" text-right">
                <AlertDialog>
                  <AlertDialogTrigger className="w-full text-right text-[12px]">
                    Quên mật khẩu?
                  </AlertDialogTrigger>
                  <AlertDialogContent className="h-max border border-none">
                    <ForgotPass></ForgotPass>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Trở lại</AlertDialogCancel>
                      <AlertDialogAction onClick={handleReturnPassword}>
                        Xác nhận
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            {/* 
            <a
              href="#"
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="px-4 py-3">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign in with Google
              </h1>
            </a> */}

            <div className="">
              <button
                onClick={handleSignIn}
                className="bg-black text-white font-bold py-2 px-4 w-full rounded hover:bg-white  hover:text-black  hover:border-black border-1 "
              >
                Đăng nhập
              </button>
            </div>
            {/* <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a href="#" className="text-xs text-black uppercase">
                hoặc Đăng ký
              </a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInAdmin;
