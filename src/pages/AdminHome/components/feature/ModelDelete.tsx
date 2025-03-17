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
import { Product } from "@/types/Product";

interface ProductItemProps {
  product?: Product;
}

const ModelDelete = ({ product }: ProductItemProps) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="w-full text-left">
          Xoá
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-fit h-auto p-[30px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[24px]">
              Bạn có chắc chắn muốn xoá {product?.name}
            </AlertDialogTitle>
            <AlertDialogDescription>
              Hành động này không thể hoàn tác. Điều này sẽ xóa vĩnh viễn xóa dữ
              liệu của sản phẩm khỏi các máy chủ của chúng tôi.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Thoát</AlertDialogCancel>
            <AlertDialogAction>Xoá</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ModelDelete;
