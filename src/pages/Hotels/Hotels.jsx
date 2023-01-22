import React, { useEffect } from "react";

import CardList from "../../components/CardList/CardList";
import Filter from "../../components/Filter/Filter";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import Style from "./Hotels.module.css";
import { Box, Image } from "@chakra-ui/react";

const Hotels = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className={Style.container}>
        {/* content div */}
        <div className={Style.contentDiv}>
          <div className={Style.dataDisplayContainer}>
            <div className={Style.filterContainer}>
              <Filter />
            </div>
            <div className={Style.displayListContainer}>
              <CardList />
            </div>
          </div>
        </div>

        <div className={Style.advertiseDiv}>
          {/* advertisement banner */}
          advertisement
          <Box boxSize="sm">
            <Image
              src="https://tpc.googlesyndication.com/simgad/5907458669670630689?"
              alt="Dan Abramov"
            />
            <Image className={Style.fixAdverisementImage}
              src="https://tpc.googlesyndication.com/simgad/7634118557413064762?"
              alt="Dan Abramov"
            />
          </Box>
          
        </div>
      </div>
    </div>
  );
};

export default Hotels;
