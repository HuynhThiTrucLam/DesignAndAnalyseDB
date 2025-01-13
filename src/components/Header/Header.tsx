import React from "react";

// Import images for the header
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu.png";
import menuRed from "../../assets/images/menu-red.png";
import shoesBlack from "../../assets/images/giay-black.png";
import shoesRed from "../../assets/images/giay.png";
import sandalBlack from "../../assets/images/dep-black.png";
import sandalRed from "../../assets/images/dep.png";
import accessoriesBlack from "../../assets/images/phukien-black.png";
import accessoriesRed from "../../assets/images/tui.png";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { CartTab } from "../Cart/CartTab";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const hanldeNavToAllProduct = (type?: string) => {
    console.log("object");
    navigate(`/product-byType/${type}`);
  };
  return (
    <header className="header">
      {/* Header Top */}
      <div className="header-top">
        <div className="header-top-wrap">
          <div className="header-left">
            <i className="fa-solid fa-bars" />
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <div className="header-right">
            <div className="header-adress">
              <div className="header-phone">
                <i className="fa-solid fa-phone-volume" />
                <p>0916698055</p>
              </div>
              <div className="header-email">
                <i className="fa-solid fa-paper-plane" />
                <a href="mailto:secondsundayvn@gmail.com">
                  secondsundayvn@gmail.com
                </a>
              </div>
            </div>
            <div className="header-search">
              <form action="#">
                <input type="text" placeholder="Nhập tên sản phẩm..." />
                <div className="header-icon-search">
                  <div className="header-icon-wrap">
                    <i className="fa-solid fa-magnifying-glass" />
                  </div>
                </div>
              </form>
            </div>
            <div className="header-shopping">
              <CartTab />
            </div>
          </div>
        </div>
      </div>

      {/* Header Middle */}
      <div className="header-middle">
        <div className="header-middle-wrap">
          <Link to={"/"}>TRANG CHỦ</Link>
          <Link to={"/policy"}>CHÍNH SÁCH</Link>
          <Link to={"/"}>
            <img src={logo} alt="second-sunday-logo" />
          </Link>
          <Link to={"/size"}>BẢNG SIZE</Link>
          <Link to={"/store"}>HỆ THỐNG CỬA HÀNG</Link>
        </div>
      </div>

      {/* Header Menu */}
      <div className="header-menu">
        <div className="header-container">
          <div className="header-menu-wrap">
            <div className="header-icon">
              <button onClick={() => hanldeNavToAllProduct("All")}>
                <img className="black" src={menu} alt="menu" />
                <p>Tất cả sản phẩm</p>
              </button>
            </div>
            <div className="header-icon">
              <button onClick={() => hanldeNavToAllProduct("Giay")}>
                <img className="black" src={shoesBlack} alt="menu-shoes" />
                <p>Giày</p>
              </button>
            </div>
            <div className="header-icon">
              <button onClick={() => hanldeNavToAllProduct("Dep")}>
                <img className="black" src={sandalBlack} alt="menu-sandal" />
                <p>Dép</p>
              </button>
            </div>
            <div className="header-icon">
              <button onClick={() => hanldeNavToAllProduct("PhuKien")}>
                <img
                  className="black"
                  src={accessoriesBlack}
                  alt="menu-accessories"
                />
                <p>Phụ kiện</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
