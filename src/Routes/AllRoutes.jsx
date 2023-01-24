import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Bookearly from "../pages/Bookearly/Bookearly";
import Pagenot from "../pages/Pagenot";
import Login from "../pages/Login";
import CreateAccount from "../pages/SignUP";
import CreateHotel from "../pages/CreateHotal/CreateHotal";
import Footer from "../components/Footer/Footer";
import ConfirmBooking from "../pages/ConfirmBooking";

import SignIn from "../pages/Admin/Auth/SignIn";
import Admin from "../pages/Admin/Admin";
import SignUp from "../pages/Admin/Auth/SignUp";

import Card from "../components/card/Card";
import Hotels from "../pages/Hotels/Hotels";
import SingleHotel from "../components/SingleHotel/SingleHotel";
import { Cartdata } from "../components/card/Cartdata";
import TopImages from "../components/SingleHotel/TopImages"; // for singleHotel page test
import Location from "../components/SingleHotel/Location"; // for singleHotel Page test
import Reviews from "../components/SingleHotel/Reviews"; // for SingleHotel Page  test
import Payemnt from "../components/Payment/Payment";

import TableData from "../pages/Admin/TableData";

import HotelData from "../pages/HotelsSinglePage/HotelData";

import UpdateDataForm from "../pages/Admin/UpdateDataForm";

import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="createHotal" element={<CreateHotel />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/confirmBooking" element={<ConfirmBooking />} />

        <Route path="/signinadmin" element={<SignIn />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/bookearly" element={<Bookearly />} />
        <Route path="/SingleHotel" element={<SingleHotel />} />
        <Route path="/carddata" element={<Cartdata />} />
        <Route path="/card" element={<Card />} />
        <Route
          path="/hotels"
          element={
            <PrivateRoute>
              <Hotels />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Pagenot />} />
        <Route path="/payment" element={<Payemnt />} />
        <Route
          path="/singlepage/:id"
          from
          element={
            <PrivateRoute>
              <HotelData />
            </PrivateRoute>
          }
        />

        <Route path="/signinadmin" element={<SignIn />}></Route>
        <Route path="/dashboard" element={<Admin />}></Route>
        <Route path="/bookearly" element={<Bookearly />} />
        <Route path="/SingleHotel" element={<SingleHotel />} />
        <Route path="/carddata" element={<Cartdata />} />
        <Route path="/card" element={<Card />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="*" element={<Pagenot />} />
        <Route path="/payment" element={<Payemnt />} />
        <Route path="/hoteldata" element={<TableData />}></Route>
        <Route path="/singlepage/:id" from element={<HotelData />} />
        <Route path="/updatedata/:id" element={<UpdateDataForm />}></Route>
        <Route path="/bookingconfirm" element={<ConfirmBooking />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
