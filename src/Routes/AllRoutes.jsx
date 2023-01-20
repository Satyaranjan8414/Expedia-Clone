import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Bookearly from "../pages/Bookearly/Bookearly";
import Pagenot from "../pages/Pagenot";
import Login from "../pages/Login";
import CreateAccount from "../pages/SignUP";
import Footer from "../components/Footer/Footer";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/footer" element={<Footer/>}/>
       
        
        <Route path="*" element={<Pagenot />} />
        <Route path="/bookearly" element={<Bookearly/>} /> 
      </Routes>
    </div>
  );
};

export default AllRoutes;
