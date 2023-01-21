import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Bookearly from "../pages/Bookearly/Bookearly";
import Pagenot from "../pages/Pagenot";
import Login from "../pages/Login";
import CreateAccount from "../pages/SignUP";
import Footer from "../components/Footer/Footer";

import Card from "../components/card/Card";
import Hotels from "../pages/Hotels/Hotels";
import SingleHotel from "../components/SingleHotel/SingleHotel";
import { Cartdata } from "../components/card/Cartdata";
import Payemnt from "../components/Payment/Payment";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/footer" element={<Footer />} />

        <Route path="*" element={<Pagenot />} />
        <Route path="/bookearly" element={<Bookearly />} />

        <Route path="/SingleHotel" element={<SingleHotel />} />
        <Route path="/carddata" element={<Cartdata />} />
        <Route path="/card" element={<Card />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/payment" element={<Payemnt />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
