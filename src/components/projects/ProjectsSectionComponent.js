import React from "react";
import PropTypes from "prop-types";

function ProjectsSectionComponent(props) {
  const {} = props;

  return (
    <section className="ftco-section ftco-project" id="projects-section">
      <div className="container">
        <div className="row no-gutters justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Biên soạn: Phạm Minh Tuấn</span>
            <h2 className="mb-4">Sách của Pi</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-end"
              style={{ backgroundImage: "url(/images/sach-de.jpg)" }}
            >
              <div className="overlay" />
              <div className="text p-4">
                <h3>
                  <a href="#">BỘ ĐỀ THI THỬ TOÁN NÂNG CAO 2023</a>
                </h3>
                <span>150,000 VNĐ</span>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-end"
              style={{ backgroundImage: "url(/images/book-2.jpg)" }}
            >
              <div className="overlay" />
              <div className="text p-4">
                <h3>
                  <a href="#">You Are Your Ony Limit</a>
                </h3>
                <span>Romance</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-end"
              style={{ backgroundImage: "url(/images/book-3.jpg)" }}
            >
              <div className="overlay" />
              <div className="text p-4">
                <h3>
                  <a href="#">You Are Your Ony Limit</a>
                </h3>
                <span>Romance</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-end"
              style={{ backgroundImage: "url(/images/book-4.jpg)" }}
            >
              <div className="overlay" />
              <div className="text p-4">
                <h3>
                  <a href="#">You Are Your Ony Limit</a>
                </h3>
                <span>Romance</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-end"
              style={{ backgroundImage: "url(/images/book-5.jpg)" }}
            >
              <div className="overlay" />
              <div className="text p-4">
                <h3>
                  <a href="#">You Are Your Ony Limit</a>
                </h3>
                <span>Romance</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-end"
              style={{ backgroundImage: "url(/images/book-7.jpg)" }}
            >
              <div className="overlay" />
              <div className="text p-4">
                <h3>
                  <a href="#">You Are Your Ony Limit</a>
                </h3>
                <span>Romance</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-end"
              style={{ backgroundImage: "url(/images/book-6.jpg)" }}
            >
              <div className="overlay" />
              <div className="text p-4">
                <h3>
                  <a href="#">You Are Your Ony Limit</a>
                </h3>
                <span>Romance</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-end"
              style={{ backgroundImage: "url(/images/book-8.jpg)" }}
            >
              <div className="overlay" />
              <div className="text p-4">
                <h3>
                  <a href="#">You Are Your Ony Limit</a>
                </h3>
                <span>Romance</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

ProjectsSectionComponent.propTypes = {};

export default ProjectsSectionComponent;
