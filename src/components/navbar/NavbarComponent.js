import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function NavbarComponent(props) {
  const {} = props;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
      id="ftco-navbar"
    >
      <div className="container">

      <a className="navbar-brand" href="/user/home">
            Pi Group<sup>3.14</sup>
          </a>
        <button
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon/>
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item">
              <a href="#home-section" className="nav-link">
                <span>Trang chủ</span>
              </a>
            </li>
            
            <li className="nav-item">
              <a href="/trang-chu/thi-thu" className="nav-link">
                <span>Thi thử Online</span>
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
            <li className="nav-item">
              <a href="#projects-section" className="nav-link">
                <span>Sách của Pi</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#author-section" className="nav-link">
                <span>Admin</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-section" className="nav-link">
                <span>Liên hệ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}



export default NavbarComponent;
