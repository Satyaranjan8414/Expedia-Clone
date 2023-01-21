import "./AuthDropdown.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { SIGNOUT } from "../../Redux/AuthContext/actionTypes";
import React from "react";
import { useToast, Button
} from "@chakra-ui/react";

export const AuthDropdown = () => {
  const Navigate = useNavigate();
  const hoverColor = "#3182ce";
  const dispatch = useDispatch();
  const toast = useToast();

  //userData 
  const { userData, isAuth } = useSelector((state) => {
    return {
      userData: state.AuthReducer.userData,
      isAuth: state.AuthReducer.isAuth,
    };
  }, shallowEqual);

//signOut section
  const handleSignout = (e) => {
    setTimeout(() => {
      Navigate("/signup");
    }, 2000);

    dispatch({ type: SIGNOUT });
    toast({
      title: "Signout Successfull !!!",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };

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
          <h2>Hi , {userData.userName}</h2>
          <h3>{userData.email}</h3>
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

        <div className="authdropdownSignout"><Button
              w="100%"
              colorScheme="blue"
              onClick={(e) => {
                handleSignout(e);
              }}
            >
              Sign out
            </Button></div>
        <div className="authdropdownSignout" onClick={callSignout}>
          SignOut
        </div>
      </div>
    </div>
  );
};
