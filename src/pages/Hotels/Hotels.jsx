import React, { useEffect } from "react";

import CardList from "../../components/CardList/CardList";
import Filter from "../../components/Filter/Filter";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import Style from "./Hotels.module.css";

const Hotels = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className={Style.container}>
      {/* content div */}
        <div className={Style.contentDiv}>
          {/* <Header /> */}
          <div className={Style.dataDisplayContainer}>
            <div className={Style.filterContainer}>
            <Filter/>
            </div>
            <div className={Style.displayListContainer}>
            <CardList/>
            </div>
            
           
          </div>
        </div>


        <div>
        {/* advertisement banner */}
        advertisement

        </div>

      </div>
       
    </div>
  );
};

export default Hotels;
