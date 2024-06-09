import React from "react";
import PropTypes from "prop-types";

function AboutSectionComponent(props) {
  const {} = props;

  return (
    <section className="ftco-about img ftco-section" id="about-section">
      <div className="container">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay" />
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: "url(/images/logo.jpeg)" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 pl-md-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate">
                <h2 className="mb-4 pacifico">Pimath</h2>
                <p>
                  Pimath có những khóa học VD VDC cực kì chất lượng, là nơi tổ
                  chức thi thử THPT Quốc Gia môn Toán. Các đề được soạn theo
                  thiên hướng nâng cao, có độ phân hoá rõ ràng và các câu hỏi VD
                  - VDC hay, lạ, khó.
                </p>
                <div className="text-about">
                  <h4 className="pacifico">Mục tiêu</h4>
                  <p>
                    Mục tiêu của Pimath là giúp các em ôn luyện kiến thức môn
                    Toán một cách kĩ càng để các em tự tin bước vào kì thi THPT
                    Quốc Gia.
                  </p>
                  <h4 className="pacifico">Định hướng</h4>
                  <p>
                    Kết nối tất cả học sinh trên cả nước cùng nhau trao đổi, học
                    hỏi, và giải đáp thắc mắc để cùng tiến bộ.
                  </p>
                  <h4 className="pacifico">Sứ mệnh</h4>
                  <p>
                    Pimath mang sứ mệnh dìu dắt các em đến gần hơn với cánh cổng
                    đại học. Nhóm mang giá trị cốt lõi của một người lái đò và
                    luôn gắn liền với “Sự hoàn hảo, Niềm đam mê và Trách nhiệm".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

AboutSectionComponent.propTypes = {};

export default AboutSectionComponent;
