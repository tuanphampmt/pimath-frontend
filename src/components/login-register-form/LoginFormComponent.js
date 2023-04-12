import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterComponent from "../footer/FooterComponent";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../common/config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import NavbarPublic from "../navbar/NavbarPublic";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";

function LoginFormComponent(props) {
  const {} = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  let navigate = useNavigate();

  const validatePassword = () => {
    if (password === "") {
      setError("Mật khẩu là bắt buộc.");
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (email === "") {
      setError("Email là bắt buộc.");
      return false;
    }
    return true;
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
        navigate("/user/home");
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      if (res.user && res.user.accessToken) {
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
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    setError("");
    if (validateEmail() && validatePassword()) {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          if (res.user && res.user.accessToken && res.user.emailVerified) {
            localStorage.setItem(
              "user",
              JSON.stringify({ email: res.user.email })
            );
            localStorage.setItem(
              "access-token",
              JSON.stringify(res.user.accessToken)
            );
            navigate("//trang-chu");
          } else {
            setError("Tài khoản của bạn chưa được xác thực.");
          }
        })
        .catch((err) => {
          console.error(err);
          setError(err.message);
        });
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
                    <h2>Đăng nhập</h2>
                    <p className="mb-4">
                      Để thi thử các em cần phải đăng nhập vào website của Nhóm
                      Pi.
                    </p>
                  </div>
                  {error && <span className="message-error">{error}</span>}
                  <form onSubmit={handleSubmitLogin} className="mt-2">
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
                    <div className="form-group last mb-4">
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
                    <div className="d-flex mb-5 align-items-center">
                      <span className="mr-auto">
                        <Link to="/user/register" className="forgot-pass">
                          Đăng ký tài khoản
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
                      value="Đăng nhập"
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

export default LoginFormComponent;
