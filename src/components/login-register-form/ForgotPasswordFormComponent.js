import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterComponent from "../footer/FooterComponent";
import NavbarPublic from "../navbar/NavbarPublic";
import Tooltip from "@mui/material/Tooltip";
import EmailIcon from "@mui/icons-material/Email";
import { auth, db } from "../../common/config/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPasswordFormComponent(props) {
  const {} = props;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = () => {
    if (email === "") {
      setError("Email là bắt buộc.");
      return false;
    }
    const match = email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!match) {
      setError("Email không hợp lệ.");
      return false;
    }
    return true;
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    try {
      if (validateEmail()) {
        await sendPasswordResetEmail(auth, email);
        setSuccessMessage(
          "Đã gửi liên kết đặt lại mật khẩu đến email của bạn."
        );
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };
  return (
    <>
      <NavbarPublic />
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="/images/undraw_remotely_2j6y.svg"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h2>Lấy lại mật khẩu</h2>
                    <p className="mb-4">
                      Để lấy lại mật khẩu các em cần phải điền Email của mình.
                    </p>
                  </div>
                  {error && <span className="message-error">{error}</span>}
                  {successMessage && (
                    <span className="message-success">{successMessage}</span>
                  )}
                  <form onSubmit={handleResetPassword} className="mt-2">
                    <div className="form-group first mb-4 last">
                      <label htmlFor="username">
                        <Tooltip
                          title={
                            <span style={{ fontSize: "15px" }}>Email</span>
                          }
                          placement="top"
                        >
                          <EmailIcon />
                        </Tooltip>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="d-flex mb-5 align-items-center">
                      <span className="mr-auto">
                        <Link to="/user/login" className="forgot-pass">
                          Đăng nhập
                        </Link>
                      </span>
                      <span className="ml-auto">
                        <Link to="/user/register" className="forgot-pass">
                          Đăng ký tài khoản
                        </Link>
                      </span>
                    </div>
                    <input
                      type="submit"
                      value="Gửi"
                      className="btn btn-block btn-primary"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default ForgotPasswordFormComponent;
