import navbar from "./Navbar.module.css";
import { HiUserCircle } from "react-icons/hi";
import React, { useState } from "react";
import { NavbarDropdown } from "../navbarDropdown/NavbarDropdown";
import { AuthDropdown } from "../AuthDropdown/AuthDropdown";
import { Navb } from "../Navb/Navb";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { MoreOption } from "../moreOption/MoreOption";
import { Link } from "react-router-dom";

export const Navbar = ({ type }) => {
  const [drop, setdrop] = useState(false);
  const [Auth, setAuth] = useState(false);
  const [trigger, settrigger] = useState(false);
  const [triggerMoreOption, setMoreOption] = useState(false);

  const dropdonTrigger = () => {
    setdrop((prev) => !prev);
  };

  const AuthTrigger = () => {
    setAuth((prev) => !prev);
  };

  console.log(type);

  return (
    <div className={navbar.Navbar}>
      <div className={navbar.navbarWrapper}>
        <div
          className={
            type == "list" ? ` ${navbar.AuthNewNavbar}` : navbar.navbarLogo
          }
        >
          <Link to="/">
            <img src="https://i.imgur.com/wQLmi8a.png" alt="" />
          </Link>
        </div>

        <div
          className={
            type == "list" ? navbar.listDisplayNone : navbar.navMoreOption
          }
        >
          <p onClick={() => setMoreOption((prev) => !prev)}>
            More travel
            <span>
              <AiOutlineDown />
            </span>
          </p>

          {triggerMoreOption && <MoreOption />}
        </div>

        <div className={type == "list" ? navbar.listDisplayNone : navbar.nav1}>
          <div className={navbar.NavLanguageSelect}>
            <div>
              <AiOutlineGlobal />
            </div>
            <span onClick={AuthTrigger}>English</span>
          </div>
          <div>
            <span>Support</span>
          </div>
          <div>
            <span>Tips</span>
          </div>

          <div className={navbar.Navbellicon}>
            <span>
              <FaBell />
            </span>
          </div>

          {Auth ? (
            <div className={navbar.AfterSignup}>
              <span onClick={() => settrigger((prev) => !prev)}>
                <HiUserCircle />
              </span>
              {trigger && <AuthDropdown />}
            </div>
          ) : (
            <div className={navbar.navDropdown}>
              <span onClick={dropdonTrigger}>Sign in</span>
              {drop && <NavbarDropdown />}
            </div>
          )}
        </div>

        <div className={navbar.navB}>
          <Navb />
        </div>
      </div>
    </div>
  );
};
