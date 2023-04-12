import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeComponent from "./components/Home/HomeComponent";
import LoginFormComponent from "./components/login-register-form/LoginFormComponent";
import RegisterFormComponent from "./components/login-register-form/RegisterFormComponent";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import HomeTestOnlineComponent from "./components/test-online/HomeTestOnlineComponent";
import "./common/js/loader";
import ExamComponent from "./components/test-online/ExamComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* PrivateRoute - user */}
        <Route element={<PrivateRoute />}>
          <Route path="/trang-chu/thi-thu" element={<HomeTestOnlineComponent />} />
          <Route path="/trang-chu/thi-thu/:examId" element={<ExamComponent />} />
        </Route>
        {/* PublicRoute - user*/}
        <Route element={<PublicRoute role="user"/>}>
          <Route path="/dang-nhap" element={<LoginFormComponent />} />
          <Route path="/dang-ky" element={<RegisterFormComponent />} />
  
        </Route>
        {/* ProtectedRoute - user */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/trang-chu" />} />
          <Route path="/trang-chu" element={<HomeComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
