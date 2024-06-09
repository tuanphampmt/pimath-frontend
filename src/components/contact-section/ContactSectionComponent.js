import React from "react";
import PropTypes from "prop-types";

function ContactSectionComponent(props) {
  const {} = props;

  return (
    <section
      className="ftco-section contact-section ftco-no-pb"
      id="contact-section"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2 className="mb-4 pacifico">Liên hệ</h2>
            <p>
              Hãy liên hệ cho adminh Pimath nếu bạn có thắc mắc gì về khóa học.
            </p>
          </div>
        </div>
        <div className="row d-flex contact-info mb-5">
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box text-center p-4 bg-light">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-map-marker" />
              </div>
              <div>
                <h3 className="mb-4">Địa chỉ</h3>
                <p>
                  {" "}
                  <a href="#">Đà Nẵng</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box text-center p-4 bg-light">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-phone" />
              </div>
              <div>
                <h3 className="mb-4">Số điện thoại</h3>
                <p>
                  <a href="tel://0777561933">0777561933</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box text-center p-4 bg-light">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-paper-plane" />
              </div>
              <div>
                <h3 className="mb-4">Địa chỉ email</h3>
                <p>
                  <a href="mailto:tuanpham31798@gmail.com">
                    tuanpham31798@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box text-center p-4 bg-light">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-globe" />
              </div>
              <div>
                <h3 className="mb-4">Group Facebook</h3>
                <p>
                  <a href="https://www.facebook.com/groups/pimath">
                    Nhóm Pimath
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ContactSectionComponent.propTypes = {};

export default ContactSectionComponent;
