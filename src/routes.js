import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./modules/home";
import ExampleForm from "./modules/form";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<ExampleForm />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      {/* <ToastContainer /> */}
    </Routes>
  );
};

export default Router;
