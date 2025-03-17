import { Product } from "@/types/Product";
import ProductItem from "./ProductItem";

interface ProductListProps {
  data?: Product[] | null;
}

const ListProduct = ({ data }: ProductListProps) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {data?.map((data) => (
        <ProductItem key={data.id} product={data} />
      ))}
    </div>
  );
};

export default ListProduct;
