import React from "react";
import { Link } from "react-router-dom";
import { checkTokenExpirationMiddleware } from "../../services/auth.service";
import { signOut } from "firebase/auth";
import AccountMenu from "../navbar/AccountMenu";
function HeroWrapComponent(props) {
  const authService = checkTokenExpirationMiddleware();

  return (
    <section className="hero-wrap js-fullheight">
      <div className="overlay" />
      <div className="container-fluid px-0">
        <div className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-end">
          <img
            className="one-third js-fullheight align-self-end order-md-last img-fluid"
            src="/images/undraw_book_lover_mkck.svg"
            alt=""
          />
          <div className="one-forth d-flex align-items-center ftco-animate js-fullheight">
            <div className="text mt-5">
              <span className="subheading">
                THE BEST OR NOTHING - TỐT NHẤT HOẶC KHÔNG CÓ GÌ
              </span>
              <h1>Nhóm Pi - Group Luyện Đề Thi Thử Nâng Cao ︵✿ρмт‿✿</h1>
              <p>
                Nhóm Pi mang sứ mệnh dìu dắt các em đến gần hơn với cánh cổng
                đại học. Nhóm mang giá trị cốt lõi của một người lái đò và luôn
                gắn liền với “sự hoàn hảo, niềm đam mê và trách nhiệm".
              </p>
              {authService ? (
                <AccountMenu/>
              ) : (
                <Link to="/user/login" className="btn btn-primary py-3 px-4">
                  Đăng nhập
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroWrapComponent;
