import React from "react";
import home from "./Home.module.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";

import BookearlyImage from "../Bookearly/BookearlyImage"


import { Reward } from "../../components/Reward/Reward";
import { ExpediaApp } from "../../components/expediaApp/ExpediaApp";

const Home = () => {
  return (
    <div className={home.Home}>
      {<Navbar />}
      <div className={home.homeWrapper}>
        <Header />
      </div>
      <BookearlyImage/>
      <div>
        <Reward />
      </div>
      <div>
        <ExpediaApp />
      </div>

      <div style={{ padding: "500px" }}></div>
    </div>
  );
};

export default Home;
