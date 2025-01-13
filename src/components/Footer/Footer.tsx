// src/components/Footer.tsx

import React from "react";

// Import images for the footer
import instagram from "../../assets/images/instagram.webp";
import youtube from "../../assets/images/youtube.webp";
import zalo from "../../assets/images/zalo.webp";
import "./style.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        {/* Footer Information */}
        <div className="footer-infor">
          <h3>THÔNG TIN</h3>
          <div className="footer-list">
            <a href="/">Chính sách bảo mật</a>
            <a href="/">Chính sách vận chuyển</a>
            <a href="/">Chính sách đổi trả</a>
          </div>
          <i className="fa-solid fa-plus footer-plus" />
        </div>

        {/* Footer Stores */}
        <div className="footer-stores">
          <h3>CHÍNH SÁCH</h3>
          <p>Chi nhánh 1</p>
          <a href="/">
            Ỷ Lan, phường Hiệp Tân, quận Tân Phú, thành phố Hồ Chí Minh.
          </a>
          <i className="fa-solid fa-plus footer-plus" />
        </div>

        {/* Footer Contact */}
        <div className="footer-contact">
          <h3>LIÊN HỆ</h3>
          <div className="footer-map">
            <i className="fa-solid fa-location-dot" />
            <p>Ỷ Lan, phường Hiệp Tân, quận Tân Phú, thành phố Hồ Chí Minh.</p>
          </div>
          <div className="footer-hotline">
            <i className="fa-solid fa-phone-volume" />
            <p className="footer-hightlight">Hotline:</p>
            <a href="/" className="footer-phoneNum">
              0916698055
            </a>
          </div>
          <div className="footer-email">
            <div className="footer-email-wrap">
              <i className="fa-solid fa-envelope" />
              <p className="footer-hightlight">Email:</p>
            </div>
            <p className="gmail">secondsundayvn@gmail.com</p>
          </div>
          <i className="fa-solid fa-plus footer-plus" />
        </div>

        {/* Footer About */}
        <div className="footer-about">
          <h3>VỀ CHÚNG TÔI</h3>
          <div className="footer-content">
            <p>
              Với thông điệp "Such a simple thing", Second Sunday dành trọn tâm
              huyết để làm ra các sản phẩm mang màu sắc của riêng mình, màu sắc
              của sự đơn giản, tinh tế, màu sắc của 1 ngày bình yên. Hãy trải
              nghiệm, cảm nhận và "enjoy your second sunday" cùng chúng tớ nhé
              !!! Second Sunday - Such a simple thing
            </p>
          </div>

          {/* Footer Social */}
          <div className="footer-social">
            <a href="https://www.facebook.com/secondsundayvn">
              <i
                className="fa-brands fa-facebook"
                style={{ color: "#113fac" }}
              />
            </a>
            <a href="https://www.instagram.com/secondsunday.vn">
              <img src={instagram} alt="Second Sunday - Insta" />
            </a>
            <a href="https://www.youtube.com/@secondsundayvn">
              <img src={youtube} alt="Second Sunday - youtube" />
            </a>
            <a href="#">
              <img src={zalo} alt="Second Sunday - zalo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
