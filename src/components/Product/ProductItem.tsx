import React from "react";
import { Product } from "../../pages/Home";

interface ProductProps {
  product: Product;
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-wrap">
      <div className="product-img">
        <a href="./shopping.html">
          <img src={src1} alt="second sunday" className="product-img1" />
          <img src={src2} alt="second sunday" className="product-img2" />
        </a>
        <div className="product-discount">
          <span>{discount}</span>
        </div>
      </div>
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p className="product-price">
          <span className="product-pricePre">
            {pricePrev.toLocaleString()}
            <sup>₫</sup>
          </span>
          <span className="product-priceNow">
            {price.toLocaleString()}
            <sup>₫</sup>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
