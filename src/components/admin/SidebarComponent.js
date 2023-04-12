import { borderRadius } from "@mui/system";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function SidebarComponent(props) {
  const dispatch = useDispatch();

  const handleContent = (navbarType) => {
    dispatch({
      type: "NAVBAR_TYPE",
      payload: navbarType,
    });
  }
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon" style={{width: "40px"}}> 
          <img src="/images/logo-pi.jpeg" style={{width: "100%", borderRadius: "50%"}}></img>
        </div>
        <div className="sidebar-brand-text mx-3">
          Pi Group <sup>3.14</sup>
        </div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <a className="nav-link" href="#dashboard" onClick={() => handleContent("dashboard")}>
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>BẢNG ĐIỀU KHIỂN</span>
        </a>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Quản lý</div>
      <li className="nav-item">
        <a className="nav-link" href="#user" onClick={() => handleContent("user")}>
          <i className="fas fa-fw fa-table" />
          <span><strong>BẢNG NGƯỜI DÙNG</strong></span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#test" onClick={() => handleContent("test")}>
          <i className="fas fa-fw fa-table" />
          <span><strong>BẢNG ĐỀ THI</strong></span>
        </a>
      </li>
    </ul>
  );
}

export default SidebarComponent;
