import React from "react";
import PropTypes from "prop-types";

function SectionCounterComponent(props) {
  const {} = props;

  return (
    <section
      className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
      id="section-counter"
    >
      <div className="container">
        <div className="row d-md-flex align-items-center align-items-stretch">
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18 bg-light">
              <div className="text">
                <strong className="number" data-number={24260}>
                  0
                </strong>
                <span>Thành viên</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18 bg-light">
              <div className="text">
                <strong className="number" data-number={12}>
                  0
                </strong>
                <span>Khoá học</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18 bg-light">
              <div className="text">
                <strong className="number" data-number={10}>
                  0
                </strong>
                <span>Admin</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18 bg-light">
              <div className="text">
                <strong className="number" data-number={2}>
                  0
                </strong>
                <span>Sách</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

SectionCounterComponent.propTypes = {};

export default SectionCounterComponent;
