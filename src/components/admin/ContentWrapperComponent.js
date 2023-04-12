import React from "react";
import DashboardComponent from "./DashboardComponent";
import NavbarComponent from "./NavbarComponent";
import SidebarComponent from "./SidebarComponent";
import { useSelector, useDispatch } from "react-redux";
import { render } from "@testing-library/react";
import TableUserComponent from "./TableUserComponent";
import TableTestComponent from './TableTestComponent';

function ContentWrapperComponent(props) {
  const navbarType = useSelector((state) => state.admin.navbarType);

  const renderContent = () => {
    console.log(navbarType);
    switch (navbarType) {
      case "dashboard":
        return <DashboardComponent />;
      case "user":
        return <TableUserComponent />;
        case "test":
        return <TableTestComponent />;
      default:
    }
  };
  return (
    <div id="wrapper">
      <SidebarComponent />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <NavbarComponent />
          <div className="container-fluid">{renderContent()}</div>
        </div>
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright © Pi Group 2022</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ContentWrapperComponent;
