import { Product } from "@/types/Product";
import React from "react";

interface ProductProps {
  product: Product;
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-wrap">
      <div className="product-img">
        <a href="./shopping.html">
          <img
            src={product.colorList[0].img[0]}
            alt="second sunday"
            className="product-img1"
          />
          <img
            src={product.colorList[0].img[1]}
            alt="second sunday"
            className="product-img2"
          />
        </a>
        <div className="product-discount">
          <span>{product.discount}</span>
        </div>
      </div>
      <div className="product-info">
        <h5 className="product-name">{product.name}</h5>
        <p className="product-price">
          <span className="product-pricePre">
            {product.unitPrice.toLocaleString()}
            <sup>₫</sup>
          </span>
          <span className="product-priceNow">
            {product.unitPrice.toLocaleString()}
            <sup>₫</sup>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
