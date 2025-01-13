import { Product } from "@/types/Product";
import "./ProductItem.scss";
import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { EllipsisVerticalIcon } from "lucide-react";

import ModelDetail from "./feature/ModelDetail";
import ModelUpdate from "./feature/ModelUpdate";
import ModelDelete from "./feature/ModelDelete";

interface ProductItemProps {
  product?: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product?.colorList[0].id);
  const [selectedSize, setSelectedSize] = useState(
    product?.colorList[0].sizeList[0].id
  );
  const handleSelectColor = (colorId: string) => {
    setSelectedColor(colorId);
    setSelectedSize(
      product?.colorList.find((item) => item.id === colorId)?.sizeList[0].id
    );
  };

  const handleOpenMoreMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMoreMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className="product-wrap">
      {/* Product Images */}
      <div className="product-img">
        <img
          src={product?.colorList[0].img[0]}
          alt="second sunday"
          className="product-img1"
        />
        <div className="product-discount">
          <span>{product?.discount}% OFF</span>
        </div>
      </div>
      {/* Product Info */}
      <div className="product-info">
        <h5 className="product-name">{product?.name}</h5>

        <p className="product-price">
          <span className="text-black mr-[5px] title">Giá:</span>
          <span className="product-priceNow">
            {product?.unitPrice.toLocaleString()} <sup>₫</sup>
          </span>
        </p>

        <div className="product-colors">
          <span className="text-black mr-[5px] title">Màu sắc: </span>
          <div className="product-colors-options">
            {product?.colorList.map((color) => (
              <div
                key={color.id}
                onClick={() => handleSelectColor(color.id)}
                className={`product-colors-option ${
                  color.id === selectedColor ? "selected" : ""
                }`}
                style={{
                  background: color.value, // Use the color ID as the background
                }}
                title={color.id} // Tooltip to show color name when hovered
              ></div>
            ))}
          </div>
        </div>

        <div className="product-sizes">
          <span className="text-black mr-[5px] title">Size: </span>
          <div className="product-sizes-options">
            {product?.colorList
              ?.find((item) => item.id === selectedColor)
              ?.sizeList.map((size) => (
                <div
                  key={size.id}
                  className={`product-sizes-option ${
                    size.id === selectedSize ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size.id)}
                >
                  {size.value}
                </div>
              ))}
          </div>
        </div>

        <div className="flex justify-between ">
          <p className="product-inventory">
            <span className="text-black mr-[5px] title">Tồn kho:</span>
            <span className="product-inventory-number">
              {
                product?.colorList
                  ?.find((item) => item.id === selectedColor)
                  ?.sizeList.find((item) => item.id === selectedSize)?.inventory
              }
            </span>
          </p>
        </div>
      </div>
      {/* More info icon */}
      <div className="product-more">
        <IconButton
          aria-label="menu"
          color="primary"
          aria-controls="notification-menu"
          aria-haspopup="true"
          onClick={handleOpenMoreMenu}
        >
          <EllipsisVerticalIcon width="20" height="20" />
        </IconButton>
      </div>
      {/* Model Onlick more infor icon */}
      <Menu
        id="notification-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMoreMenu}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        className="product-menu"
      >
        <MenuItem onClick={handleCloseMoreMenu}>
          <ModelDetail product={product} />
        </MenuItem>
        <MenuItem onClick={handleCloseMoreMenu}>
          <ModelUpdate product={product} />
        </MenuItem>
        <MenuItem>
          <ModelDelete product={product} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProductItem;
