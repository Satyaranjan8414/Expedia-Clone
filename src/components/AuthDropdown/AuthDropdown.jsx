import "./AuthDropdown.css";

import { useState } from "react";
import { getLocalData } from "../../utils/accessLocalStorage";
import { IoInformationCircleOutline } from "react-icons/io5";
import { SignOutFun } from "../../Redux/AuthContext/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const AuthDropdown = ({ setAuth }) => {
  const data = getLocalData("userData");
  let dispatch = useDispatch();

  const callSignout = () => {
    dispatch(SignOutFun);
    setAuth((prev) => !prev);
  };

  return (
    <div className="authDropdown">
      <div className="authDropdownWrapper" style={{ width: "100%" }}>
        <div className="authDropdownUserDetail" style={{ width: "100%" }}>
          <h2>Hi , {data.userName}</h2>
          <h3>{data.email}</h3>
          <div className="authDropdownBlueMember">
            <span>blue member</span>
          </div>
          <div className="authDropdownPrice">$0.00</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.1rem 0 ",
              gap: "0.6rem",
              fontSize: "0.8rem",
            }}
          >
            <div>Points Value</div>
            <div>
              <IoInformationCircleOutline style={{ fontSize: "0.9rem" }} />
            </div>
          </div>
        </div>
        <hr />
        <div className="authNavbarfeedbackothercontainer">
          <div style={{ width: "100%" }}>
            <p>Account</p>
          </div>

          <div>
            <p>Feedback</p>
          </div>

          <div>
            <p>Admin</p>
          </div>
        </div>

        <hr className="haderSperation" />

        <div className="authdropdownSignout" onClick={callSignout}>
          SignOut
        </div>
      </div>
    </div>
  );
};
