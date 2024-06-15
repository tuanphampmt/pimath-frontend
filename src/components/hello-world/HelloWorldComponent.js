import React from "react";
import { Link } from "react-router-dom";
import { checkTokenExpirationMiddleware } from "../../services/auth.service";
import { signOut } from "firebase/auth";
import AccountMenu from "../navbar/AccountMenu";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function HeroWrapComponent(props) {
  const authService = checkTokenExpirationMiddleware();
  const navigate = useNavigate();
  const location = useLocation();

  const handlenextPage = () => {
    navigate("/home/mock-exam");
    console.log(location.pathname);
  };
  return (
    <section className="hero-wrap js-fullheight h-auto lg:pt-[20px] pt-0">
      <div className="overlay" />
      <div className="container-fluid px-0">
        <div className="flex lg:flex-row flex-col-reverse px-[20px] slider-text align-items-center js-fullheight justify-content-end gap-[20px] lg:mt-0 mt-[20px] h-auto">
          <div className=" d-flex align-items-center ftco-animate js-fullheight h-auto">
            <div className="text mt-5">
              <span className="subheading pacifico">
                The Best Or Nothing - Tốt Nhất Hoặc Không Có Gì
              </span>
              <h1 className="lg:text-[2.5rem] text-[1.7em]">
                Pimath Và Những Lần Chống Trị Sai Ngu - Khóa 2k7 ︵✿Ρмт‿✿
              </h1>
              <p className="mt-5">
                <span>Pimath</span> mang sứ mệnh dìu dắt các em đến gần hơn với
                cánh cổng đại học. Nhóm mang giá trị cốt lõi của một người lái
                đò và luôn gắn liền với “Sự hoàn hảo, Niềm đam mê và Trách
                nhiệm".
              </p>
              {location.pathname === "/home" && (
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  startIcon={<AccessAlarmIcon />}
                  className="mt-5 pacifico"
                  onClick={() => handlenextPage()}
                >
                  Thi Thử
                </Button>
              )}

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
            className="sm:max-w-[500px] max-w-[350px] object-cover"
            src="/images/undraw_book_lover_mkck.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HeroWrapComponent;
