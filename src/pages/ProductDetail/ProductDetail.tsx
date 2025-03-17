import renderStars from "@/components/Star/star";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("1");
  const [selectedSize, setSelectedSize] = useState("");

  const [product, setProduct] = useState<any>();
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  console.log("object");
  console.log(location.state.product);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleBuyNow = () => {
    console.log(product.id, selectedColor, selectedSize, quantity);
  };

  useEffect(() => {
    const productList = location.state.product;
    setSelectedColor(productList.colorList[0].id);
    setSelectedSize(productList.colorList[0].sizeList[0].value);
    setProduct(productList);
  }, []);

  return (
    <section className="shopping">
      <div className="shopping-container">
        <div className="shopping-left">
          {/* Product Slider and Options */}
          <div className="shopping-slider">
            <img src={product?.colorList[0].img[0]} alt="second-sunday" />
            <div className="shopping-option">
              <a href="#" className="shopping-decs">
                <p>MÔ TẢ SẢN PHẨM</p>
              </a>
              <a href="#" className="shopping-video">
                <p>VIDEO CHI TIẾT</p>
              </a>
            </div>
          </div>

          {/* Product Details */}
          <div className="shopping-content">
            <p>{product?.name}</p>
            <p>- Thông số Size :</p>
            <p>- Lưu ý :</p>
            <p className="shopping-content-header">
              𝐒𝐞𝐜𝐨𝐧𝐝 𝐒𝐮𝐧𝐝𝐚𝐲 - 𝐒𝐮𝐜𝐡 𝐚 𝐬𝐢𝐦𝐩𝐥𝐞 𝐭𝐡𝐢𝐧𝐠
            </p>
            <p>Chính sách Bảo hành và Đổi trả</p>
            <p>
              - Đổi trả dễ dàng trong thời gian như trên phiếu bảo hành, áp dụng
              cho sản phẩm mới, chưa qua sử dụng và đầy đủ tem mác.
            </p>
            <p>
              - Nếu gặp bất kỳ vấn đề gì, vui lòng liên hệ với chúng mình qua
              Chat để được hỗ trợ tốt nhất.
            </p>
            <p>
              - Lưu ý rằng, chính sách đổi trả chỉ áp dụng cho sản phẩm còn mới,
              có lỗi kỹ thuật hoặc gửi sai hàng. Sản phẩm đổi mới có giá trị
              bằng hoặc cao hơn sản phẩm cũ, với những sản phẩm có giá trị thấp
              hơn, chính sách như trên phiếu bảo hành.
            </p>
          </div>
        </div>

        <div className="shopping-right">
          {/* Product Title, Rating, and Price */}
          <h1>{product?.name}</h1>
          <div className="shopping-rating">
            <div className="Detail-rating">
              {renderStars(product?.rating || 0)}
              <p> / {product?.rating}</p>
              <p>({product?.feedback?.lenghth} đánh giá)</p>
            </div>

            <div className="shopping-price">
              <div className="shopping-prices">
                <p className="shopping-price-now">
                  {product?.unitPrice}
                  <sup>₫</sup>
                </p>
                <p className="shopping-price-discount">
                  <sup>
                    {product?.unitPrice * (1 - product?.discount / 100)}₫
                  </sup>
                </p>
              </div>
              <p className="shopping-discount">-20%</p>
            </div>
          </div>

          {/* Return, Warranty, and Shipping Options */}
          <div className="shopping-return">
            <div className="shopping-item">
              <img
                src="https://bizweb.dktcdn.net/100/466/874/themes/921146/assets/product_poli_1.png?1734948255984"
                alt="second-sunday"
              />
              <p>Đổi trả dễ dàng</p>
            </div>
            <div className="shopping-item">
              <i className="fa-solid fa-shield"></i>
              <p>Chính hãng 100%</p>
            </div>
            <div className="shopping-item">
              <i className="fa-solid fa-truck-fast"></i>
              <p>Giao toàn quốc</p>
            </div>
          </div>

          <div className="shopping-size">
            <p>Màu sắc</p>
            <div className="shopping-size-list">
              {product?.colorList.map((color: any) => (
                <div
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`shopping-colors-option ${
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

          {/* Size Selection */}
          <div className="shopping-size">
            <p>Kích thước</p>
            <div className="shopping-size-list">
              {product?.colorList
                ?.find((item: any) => item.id === selectedColor)
                ?.sizeList.map((size: any) => (
                  <p
                    key={size.id}
                    className={`shopping-sizes-option ${
                      size.id === selectedSize ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSize(size.id)}
                  >
                    {size.value}
                  </p>
                ))}
            </div>
          </div>

          {/* Quantity Counter */}
          <div className="shopping-count">
            <p>Số lượng:</p>
            <div className="shopping-counter">
              <button
                onClick={decreaseQuantity}
                className="shopping-counter-minus"
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="shopping-counter-number text-center w-[50px]"
              />
              <button
                onClick={increaseQuantity}
                className="shopping-counter-plus"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="shopping-button">
            <div className="shopping-button-wrap add">
              <a href="#">THÊM VÀO GIỎ</a>
            </div>
            <div className="shopping-button-wrap buy">
              <button onClick={handleBuyNow}>MUA NGAY</button>
            </div>
          </div>
        </div>
      </div>
      {/* Review Section */}
      <div className="shopping-bottom">
        <div className="shopping-bottom-wrap">
          <p>
            Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu
            tiên đánh giá cho sản phẩm này
          </p>
          <a href="#" className="shopping-bottom-button">
            Gửi đánh giá của bạn
          </a>
        </div>
      </div>
      {/* </div>
      Size Chart Popup
      <div className="shopping-sizeTab">
        <p>Bảng size</p>
        <img
          src="https://bizweb.dktcdn.net/100/466/874/files/size-vn.jpg?v=1695615475634"
          alt="second sunday"
        />
        <i className="fa-solid fa-xmark"></i>
      </div> */}
      {/* Overlay */}
      {/* <div className="shopping-overlay"></div> */}
    </section>
  );
};

export default ProductDetail;
