import React, { useState } from "react";
import { GiSuitcase } from "react-icons/gi";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";
import { IoBagSharp } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi";
import "./Navb.css";
import { NavbarDropdown } from "../navbarDropdown/NavbarDropdown";
import { MoreOption } from "../moreOption/MoreOption";

export const Navb = () => {
  const [Navtrigger, setNavTrigger] = useState(false);

  function NavbarTrigger() {
    setNavTrigger((prev) => !prev);
  }

  return (
    <div className="NavbContainer" style={{ width: "100%" }}>
      <div className="NabContainerSearchicon">
        <button>
          <AiOutlineSearch />
        </button>

        <MoreOption type="left" />
      </div>

      <div className="navBagIcon">
        <button>
          <IoBagSharp />
        </button>
      </div>

      <div className="navAiBellIcon">
        <button>
          <AiFillBell />
        </button>
      </div>

      <div className="navUserCircleIcon">
        <button onClick={NavbarTrigger}>
          <HiUserCircle />
        </button>

        {Navtrigger && <NavbarDropdown />}
      </div>
    </div>
  );
};
