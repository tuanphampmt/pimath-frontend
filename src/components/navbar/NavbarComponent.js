import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";
function NavbarComponent(props) {
  const {} = props;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/home">
          Pimath<sup>3.14</sup>
        </Link>
        <button
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon />
        </button>
        <div className="navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto items-center">
            <li className="nav-item">
              <a href="#home-section" className="nav-link">
                <span>Trang chủ</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-section" className="nav-link">
                <span>Giới thiệu</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#chapter-section" className="nav-link">
                <span>Khoá học của Pi</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonial-section" className="nav-link">
                <span>Nhận xét</span>
              </a>
            </li>
            {/* <li className="nav-item">
              <Link to="/home/mock-exam" className="nav-link">
                <span>Thi thử</span>
              </Link>
            </li> */}
            <li className="nav-item">
              <a href="#contact-section" className="nav-link">
                <span>Liên hệ</span>
              </a>
            </li>
            <FaceRoundedIcon
              fontSize="large"
              className="text-black ml-[7rem]"
            />
            {/* <li className="nav-item">
              <a href="#projects-section" className="nav-link">
                <span>Sách của Pi</span>
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a href="#author-section" className="nav-link">
                <span>Admin</span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
