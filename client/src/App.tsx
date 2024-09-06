import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
// import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
