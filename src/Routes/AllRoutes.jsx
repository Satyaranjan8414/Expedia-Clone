import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Pagenot from "../pages/Pagenot";
import Login from "../pages/Login";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Pagenot />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
