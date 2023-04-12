import React from "react";
import PropTypes from "prop-types";

function FooterComponent(props) {
  const {} = props;

  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Giới thiệu</h2>
              <p>
              Nhóm Pi là nơi giao lưu của các thần đồng toán học, chúa tể của những con số, kẻ hủy diệt phương trình tương lai
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="fab fa-twitter" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="https://www.facebook.com/groups/pigroup.pmt317"  target="_blank" rel="noopener noreferrer">
                    <span className="fab fa-facebook" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Về Nhóm Pi</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Liên hệ</a>
                </li>
                <li>
                  <a href="#">Khoá học</a>
                </li>
                <li>
                  <a href="#">Giới thiệu</a>
                </li>
                <li>
                  <a href="#">Chính sách miễn giảm học phí</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Hỗ trợ</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Câu hỏi bài tập</a>
                </li>
                <li>
                  <a href="#">Thi thử online</a>
                </li>
                <li>
                  <a href="#">Cách đăng ký khoá học</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Liên hệ</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map-marker" />
                    <span className="text">
                      Đà nẵng
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-phone" />
                      <span className="text">0777561933</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-paper-plane" />
                      <span className="text">tuanpham31798@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with{" "}
              <i className="fa fa-heart" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Pi Group
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

FooterComponent.propTypes = {};

export default FooterComponent;
