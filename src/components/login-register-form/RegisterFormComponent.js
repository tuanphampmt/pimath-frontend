import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterComponent from "../footer/FooterComponent";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from "@mui/material/Tooltip";
import { auth, db } from "../../common/config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { collection, addDoc, query, getDocs, where } from "firebase/firestore";
import NavbarPublic from "../navbar/NavbarPublic";

function RegisterFormComponent(props) {
  const {} = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  let navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const validatePassword = () => {
    if (password === "" || confirmPassword === "") {
      setError("Mật khẩu là bắt buộc.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp.");
      return false;
    }
    return true;
  };

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

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");
    try {
      if (validateEmail() && validatePassword()) {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await sendEmailVerification(user);
        setSuccessMessage(
          "Hệ thống đã gửi email xác thực đến tài khoản của bạn. Vui lòng kiểm tra email."
        );
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          authProvider: "local",
          email,
        });
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
      localStorage.setItem(
        "user",
        JSON.stringify({ email: user.email, name: user.displayName })
      );
      localStorage.setItem(
        "access-token",
        JSON.stringify(res.user.accessToken)
      );
      navigate("//trang-chu");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const signInWithFacebook = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const res = await signInWithPopup(auth, facebookProvider);
      const user = res.user;
      console.log(user);
      if (res.user && res.user.accessToken) {
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
          await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "facebook",
            email: user.email,
          });
        }
        localStorage.setItem(
          "user",
          JSON.stringify({ email: user.email, name: user.displayName })
        );
        localStorage.setItem(
          "access-token",
          JSON.stringify(res.user.accessToken)
        );
        navigate("//trang-chu");
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
                    <h3>Đăng ký tài khoản</h3>
                    <p className="mb-4">
                      Để đăng nhập vào website của Nhóm Pi các em cần phải đăng
                      ký tài khoản.
                    </p>
                  </div>
                  {error && <span className="message-error">{error}</span>}
                  {successMessage && (
                    <span className="message-success">{successMessage}</span>
                  )}
                  <form onSubmit={handleSubmitRegister} className="mt-2">
                    <div className="form-group first">
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
                    <div className="form-group">
                      <label htmlFor="password">
                        <Tooltip
                          title={
                            <span style={{ fontSize: "15px" }}>Mật khẩu</span>
                          }
                          placement="top"
                        >
                          <VisibilityIcon />
                        </Tooltip>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group last mb-4">
                      <label htmlFor="password">
                        <Tooltip
                          title={
                            <span style={{ fontSize: "15px" }}>
                              Xác nhận mật khẩu
                            </span>
                          }
                          placement="top"
                        >
                          <VisibilityIcon />
                        </Tooltip>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>

                    <div className="d-flex mb-5 align-items-center">
                      <span className="mr-auto">
                        <Link to="/user/login" className="forgot-pass">
                          Đăng nhập
                        </Link>
                      </span>
                      <span className="ml-auto">
                        <Link
                          to="/user/forgot-password"
                          className="forgot-pass"
                        >
                          Lấy lại mật khẩu
                        </Link>
                      </span>
                    </div>
                    <input
                      type="submit"
                      value="Đăng ký"
                      className="btn btn-block btn-primary"
                    />

                    <span className="d-block text-left my-4 text-muted">
                      — or login with —
                    </span>
                    <div className="social-login">
                      <a
                        href="#facebook"
                        className="facebook"
                        onClick={signInWithFacebook}
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>

                      <a
                        href="#google"
                        className="google"
                        onClick={signInWithGoogle}
                      >
                        <i className="fa-brands fa-google"></i>
                      </a>
                    </div>
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

RegisterFormComponent.propTypes = {};

export default RegisterFormComponent;
