import "./MoreOption.css";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdFlight } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";
import { RiSuitcase2Fill } from "react-icons/ri";
import { FaTicketAlt } from "react-icons/fa";
import { useState } from "react";

export const MoreOption = ({ type }) => {
  return (
    <div className={type === "left" ? "navMoreOptionLeft" : "NavMoreOption"}>
      <div className="NavmoreoptionWrapper">
        <div className={"navMoreOptionDiv"}>
          <span>
            <HiBuildingOffice2 />
          </span>
          Stays
        </div>
        <div className="navMoreOptionDiv">
          <span>
            <MdFlight />
          </span>
          Flights
        </div>

        <div className="navMoreOptionDiv">
          <span>
            <IoCarSportSharp />
          </span>
          Cars
        </div>

        <div className="navMoreOptionDiv">
          <span>
            <RiSuitcase2Fill />
          </span>
          Packages
        </div>

        <div className="navMoreOptionDiv">
          <span>
            <FaTicketAlt />
          </span>
          Holidays Activity
        </div>

        <div className="navMoreOptionDiv1">Deals</div>
        <div className="navMoreOptionDiv1">Groups&meeting</div>
        <div className="navMoreOptionDiv1">mobile</div>
      </div>
    </div>
  );
};
