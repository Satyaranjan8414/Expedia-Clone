import React from "react";
import home from "./Home.module.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";
import BookearlyImage from "../Bookearly/BookearlyImage"


const Home = () => {
  return (
    <div className={home.Home}>
      {<Navbar />}
      <div className={home.homeWrapper}>
        <Header />
      </div>
      <BookearlyImage/>
    </div>
  );
};

export default Home;
