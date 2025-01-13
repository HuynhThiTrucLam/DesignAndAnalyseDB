import React from "react";
import "./styles.scss";

const Store: React.FC = () => {
  return (
    <div className="stores">
      <div className="store-wrap">
        <h1>Địa chỉ </h1>
        <div className="stores-line"> </div>
        <div className="stores-content">
          <p className="stores-title">Văn phòng Hồ Chí Minh</p>
          <div className="stores-address">
            {" "}
            <i className="fa-solid fa-location-dot"></i>
            <p>Ỷ Lan, phường Hiệp Tân, quận Tân Phú, thành phố Hồ Chí Minh.</p>
          </div>
          <div className="stores-CSKH">
            {" "}
            <i className="fa-solid fa-location-dot"></i>
            <p>CSKH: 0916698055</p>
          </div>
          <div className="stores-time">
            <i className="fa-solid fa-calendar-days"></i>
            <p>Giờ làm việc: từ 8AM đến 5PM các ngày trong tuần.</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d431.62875849881954!2d106.63188471840502!3d10.775638778552148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f988fe78c4d%3A0x315b14cc0ecaa3de!2zQ8ahbSBU4bqlbSBOaOG6qW4!5e0!3m2!1svi!2s!4v1699461263087!5m2!1svi!2s"
            width="1170"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className="stores-line"> </div>
      </div>
    </div>
  );
};

export default Store;
