// import React from "react";

// const Home = () => {
//   return (
//     <div className={home.Home}>
//       <div className={home.homeWrapper}></div>
//     </div>
//   );
// };
import React from "react";
import home from "./Home.module.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/Header/Header";


const Home = () => {
  return (
    <div className={home.Home}>
      <Navbar />
      <div className={home.homeWrapper}>
        <Header />
      </div>
    </div>
  );
};

// export default Home;
