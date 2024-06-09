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
        <div className="flex lg:flex-row flex-col-reverse px-[20px] slider-text align-items-center js-fullheight justify-content-end gap-[20px] lg:mt-0 mt-[20px]">
          <div className=" d-flex align-items-center ftco-animate js-fullheight">
            <div className="text mt-5">
              <span className="subheading pacifico">
                The Best Or Nothing - Tốt Nhất Hoặc Không Có Gì
              </span>
              <h1>Pimath Và Những Lần Chống Trị Sai Ngu - Khóa 2k7 ︵✿Ρмт‿✿</h1>
              <p className="mt-5">
                <span>Pimath</span> mang sứ mệnh dìu dắt các em đến gần hơn với
                cánh cổng đại học. Nhóm mang giá trị cốt lõi của một người lái
                đò và luôn gắn liền với “Sự hoàn hảo, Niềm đam mê và Trách
                nhiệm".
              </p>
              {/* {authService ? (
                <AccountMenu />
              ) : (
                <Link to="/login" className="btn btn-primary py-3 px-4">
                  Đăng nhập
                </Link>
              )} */}
            </div>
          </div>
          <img
            className="max-w-[500px] object-cover"
            src="/images/undraw_book_lover_mkck.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HeroWrapComponent;
