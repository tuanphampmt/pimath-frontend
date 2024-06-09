import React from "react";
import ReactDOM from "react-dom/client";
// import './css/style.css';
// import './css/satoshi.css';
// import 'jsvectormap/dist/css/jsvectormap.css';
// import 'flatpickr/dist/flatpickr.min.css';
import "./App.css";
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
import SignIn from "./pages/Authentication/SignIn.tsx";
import SignUp from "./pages/Authentication/SignUp.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* PrivateRoute - user */}
        <Route element={<PrivateRoute />}>
          <Route path="/home/test" element={<HomeTestOnlineComponent />} />
          <Route path="/home/test/:examId" element={<ExamComponent />} />
        </Route>
        {/* PublicRoute - user*/}
        <Route element={<PublicRoute role="user" />}>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Route>
        {/* ProtectedRoute - user */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
