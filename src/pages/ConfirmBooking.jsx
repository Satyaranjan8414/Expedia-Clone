import { useToast } from "@chakra-ui/react";
import { style } from "@motionone/dom";
import { left } from "@popperjs/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { getLocalData } from "../utils/accessLocalStorage";

const ConfirmBooking = () => {
  const navigate = useNavigate();
  const Toast = useToast();
  const handleClick = (e) => {
    e.preventDefault();
    Toast({
      title: `Booking Successfull`,
      status: "success",
      duration: 1000,
      position: "top",
      isClosable: true,
    });

    navigate("/");
  };
  return (
    <div className="lastdiv">
      <Navbar />
      <div>
        <img
          style={{ height: "200px", margin: "auto" }}
          src="https://www.poornima.edu.in/wp-content/uploads/2020/08/greentick.jpg"
          alt="Lastpage"
        />
      </div>
      <div
        style={{
          alignItems: "center",
          width: "50%",
          margin: "auto",
          textAlign: "center",
          padding: "auto",
        }}
      >
        <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
          Your Booking Is Complete!
        </h2>
        <p
          style={{ fontSize: "15px", marginTop: "20px", marginBottom: "20px" }}
        >
          You will be recieving a confirmation email on your registered e-mail
          regarding your trip details.
        </p>
        <p
          style={{
            fontWeight: "bold",
          }}
        >
          Thank Your For Choosing Travellia.
        </p>
        <button
          style={{
            background: "teal",
            borderRadius: "10px",
            padding: "0.4rem 0.4rem",
            marginTop: "15px",
            color: "#fff",
          }}
          id="lastbutton"
          onClick={handleClick}
        >
          Continue Booking
        </button>
      </div>
    </div>
  );
};

export default ConfirmBooking;
