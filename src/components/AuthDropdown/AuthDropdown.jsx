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
  return (
    <div className="authDropdown">
      <div className="authDropdownWrapper" style={{ width: "100%" }}>
        <div className="authDropdownUserDetail" style={{ width: "100%" }}>
          <h2>Hi , {userData.userName}</h2>
          <h3>{userData.email}</h3>
          <div className="authDropdownBlueMember">
            <span>blue member</span>
          </div>
          <div className="authDropdownPrice">$0.00</div>
          <div>
            Points Value <span>R</span>
          </div>
        </div>
        <hr />
        <div className="authNavbarfeedbackothercontainer">
          <div style={{ width: "100%" }}>
            <p>Account</p>
          </div>

          <div>
            <p>List of orders</p>
          </div>

          <div>
            <p>Feedback</p>
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
      </div>
    </div>
  );
};
