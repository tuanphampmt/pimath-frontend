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
            <h2 className="mb-4">Liên hệ</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
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
                <p>Đà Nẵng</p>
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
                  <a href="tel://1234567920">0777561933</a>
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
                  <a href="mailto:info@yoursite.com">tuanpham31798@gmail.com</a>
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
                  <a href="#">Nhóm Pi</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form action="#" className="bg-light p-4 p-md-5 contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên của bạn"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email của bạn"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nội dung"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={7}
                  className="form-control"
                  placeholder="Tin nhắn"
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  defaultValue="Send Message"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex">
            <div id="map" className="map" />
            {/* <div class="img" style="background-image: url(images/about.jpg);"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

ContactSectionComponent.propTypes = {};

export default ContactSectionComponent;
