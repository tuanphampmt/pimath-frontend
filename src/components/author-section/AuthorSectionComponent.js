import React from "react";
import PropTypes from "prop-types";

function AuthorSectionComponent(props) {
  const {} = props;

  return (
    <section
      className="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
      id="author-section"
    >
      <div className="container">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay" />
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: "url(/images/pmt.jpeg)" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="py-md-5 w-100 bg-light px-md-5">
              <div className="py-md-5">
                <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section ftco-animate">
                    <span className="subheading">
                    Administrator của NHÓM PI
                    </span>
                    <h2 className="mb-4">Phạm Minh Tuấn</h2>
                    <p>
                      Anh tốt nghiệp ngành CNTT với niềm đam mê Toán vô tận. Anh luôn yêu để sống, luôn sống để học Toán, luôn học Toán để yêu.

                    </p>
                    <ul className="about-info mt-4 px-md-0 px-2">
                      <li className="d-flex">
                        <span>Họ và tên:</span> <span>Phạm Minh Tuấn</span>
                      </li>
                      <li className="d-flex">
                        <span>Ngày sinh:</span>{" "}
                        <span>Ngày 31 tháng 7 năm 1996</span>
                      </li>
                      <li className="d-flex">
                        <span>Địa chỉ:</span>{" "}
                        <span>Đà Nẵng</span>
                      </li>
                      <li className="d-flex">
                        <span>Nghề nghiệp:</span>{" "}
                        <span>Software Engineer</span>
                      </li>
                      <li className="d-flex">
                        <span>Email:</span>{" "}
                        <span>tuanpham31798@gmail.com</span>
                      </li>
                      <li className="d-flex">
                        <span>Số điện thoại: </span> <span>0777561933</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="counter-wrap ftco-animate d-flex mt-md-3">
                  <div className="text">
                    <p className="mb-4 btn-custom">
                      <span>Theo dõi</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

AuthorSectionComponent.propTypes = {};

export default AuthorSectionComponent;
