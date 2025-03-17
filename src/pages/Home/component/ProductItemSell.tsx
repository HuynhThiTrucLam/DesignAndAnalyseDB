import { Product } from "@/types/Product";
import { useNavigate } from "react-router-dom";
import "./ProductItemSell.scss";

interface productProps {
  product: Product;
}

const ProductItemSell = ({ product }: productProps) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate("/product-detail", { state: { product } });
  };
  return (
    <div className="product-wrap" onClick={handleDetail}>
      <div className="product-img">
        <img
          src={product?.colorList[0].img[0]}
          alt="second sunday"
          className="product-img1"
        />
        <div className="product-discount">
          <span>-{product.discount}%</span>
        </div>
      </div>
      <div className="product-info">
        <h5 className="product-name">{product.name}</h5>
        <p className="product-price">
          <span className="product-pricePre">
            {product.unitPrice} <sup>₫</sup>
          </span>
          <span className="product-priceNow">
            {(product.unitPrice * (1 - product.discount / 100)).toFixed(2)}{" "}
            <sup>₫</sup>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductItemSell;
