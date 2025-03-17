import { Product } from "@/types/Product";
import ProductItemSell from "./ProductItemSell";
import "./ProductListSell.scss";
interface productProps {
  products: Product[];
  typeOfProduct: string;
}
const ProductListSell = ({ products, typeOfProduct }: productProps) => {
  return (
    <div className="productListSell-container">
      <div className="productListSell-header">
        <h3>{typeOfProduct}</h3>
      </div>
      <div className="productListSell-shoes">
        {products.map((product, index) => (
          <ProductItemSell key={index} product={product} />
        ))}
      </div>
      <div className="productListSell-button">
        <a href="#">VIEW ALL</a>
      </div>
    </div>
  );
};

export default ProductListSell;
