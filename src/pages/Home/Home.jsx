import React from "react";
import home from "./Home.module.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import BookearlyImage from "../Bookearly/BookearlyImage";

import { Reward } from "../../components/Reward/Reward";
import { ExpediaApp } from "../../components/expediaApp/ExpediaApp";

const Home = () => {
  return (
    <div className={home.Home}>
      {<Navbar />}
      <div className={home.homeWrapper}>
        <Header />
      </div>
      <div>
        <Reward />
      </div>
      <div style={{ padding: "10px" }}></div>
      <div>
        <ExpediaApp />
      </div>
      <div style={{ padding: "1.5rem" }}></div>
      <div>
        <BookearlyImage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
