import React, { useState } from "react";
import { GiSuitcase } from "react-icons/gi";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";
import { IoBagSharp } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi";
import "./Navb.css";
import { NavbarDropdown } from "../navbarDropdown/NavbarDropdown";
import { MoreOption } from "../moreOption/MoreOption";
import { useSelector } from "react-redux";
import { AuthDropdown } from "../AuthDropdown/AuthDropdown";

export const Navb = () => {
  const [Navtrigger, setNavTrigger] = useState(false);
  const [Authtrigger, setauthTrigger] = useState(false);
  const [moreOptionCLick, setMoreOptionClick] = useState(false);
  let auth = useSelector((state) => state.AuthReducer.isAuth);

  function NavbarTrigger() {
    {
      moreOptionCLick && setMoreOptionClick(false);
    }
    setNavTrigger((prev) => !prev);
  }

  function setAuthTrigger() {
    {
      moreOptionCLick && setMoreOptionClick(false);
    }
    setauthTrigger((prev) => !prev);
  }

  function triggerMoreOption() {
    {
      Navtrigger && setNavTrigger(false);
    }
    setMoreOptionClick((prev) => !prev);
  }

  return (
    <div className="NavbContainer" style={{ width: "100%" }}>
      <div className="NabContainerSearchicon">
        <button onClick={triggerMoreOption}>
          <AiOutlineSearch />
        </button>

        {moreOptionCLick && <MoreOption type="left" />}
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
        <button onClick={auth ? setAuthTrigger : NavbarTrigger}>
          <HiUserCircle />
        </button>

        {auth
          ? Authtrigger && <AuthDropdown />
          : Navtrigger && <NavbarDropdown />}
      </div>
    </div>
  );
};
