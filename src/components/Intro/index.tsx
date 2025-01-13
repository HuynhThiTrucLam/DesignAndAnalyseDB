import React from "react";
import "./styles.scss";

const Intro = () => {
  return (
    <div>
      <div className="intro">
        <div className="intro-wraper">
          <div className="intro-header">
            <h2>Such a simple thing</h2>
          </div>
          <div className="intro-content">
            <p>
              Với thông điệp "Such a simple thing", Second Sunday dành trọn tâm
              huyết để làm ra các sản phẩm mang màu sắc của riêng mình, màu sắc
              của sự đơn giản, tinh tế, màu sắc của 1 ngày bình yên. Hãy trải
              nghiệm, cảm nhận và "enjoy your second sunday" cùng chúng tớ nhé
              !!!
            </p>
          </div>
          <div className="intro-line"></div>
          <div className="intro-video">
            <div className="video">
              <iframe
                width="100%"
                height="446"
                src="https://www.youtube.com/embed/GBc9Zaj2gzM"
                title="Second Sunday | Second Sunday Chunky Big Lace"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
