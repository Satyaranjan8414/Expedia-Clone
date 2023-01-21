import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CountryCode from "../countrycode/CountryCode";
import { useState } from "react";

export default function Checking() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: "2%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: " 0px 3%",
          }}
        >
          <h3 style={{ marginBottom: "10px", color: "#262626" }}>
            Who's checking in?
          </h3>
          <div
            style={{ display: "flex", gap: "10px", flexDirection: "column" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
              <h4>Room 1: </h4>
              <span>
                <p>1 Room: Standard Room, 1 King Bed, Non Smoking</p>
              </span>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "5% 2%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2%",
                  width: "20%",
                  fontSize: "small",
                  color: "green",
                  fontWeight: "600",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
                <p>Free parking</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2%",
                  fontSize: "1vw",
                  fontSize: "small",
                  width: "20%",
                  color: "green",
                  fontWeight: "600",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ fontWeight: "900" }} />
                <p>Free WiFi</p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div style={{ width: "100%" }} className="payment_info_input">
          <form style={{ width: "95%", margin: "auto" }}>
            <label
              htmlFor=""
              style={{ fontSize: "small", marginBottom: "5px" }}
            >
              Traveler name
              <span style={{ color: "red" }} class="required">
                *
              </span>
            </label>

            <div
              style={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                gap: "2%",
                marginBottom: "15px",
                marginTop: "10px",
              }}
            >
              <input
                style={{
                  flex: 1,
                  padding: "1% 1%",
                  borderRadius: "5px",
                  height: "30px",
                  outline: "1px solid #3498db",
                  border: "none",
                }}
                type="text"
                placeholder="First Name"
              />
              <input
                style={{
                  flex: 1,
                  padding: "1% 1%",
                  borderRadius: "5px",
                  height: "30px",
                  outline: "1px solid #3498db",
                  border: "none",
                }}
                type="text"
                placeholder="Last name"
              />
            </div>
            <label htmlFor="" style={{ fontSize: "small" }}>
              Mobile phone number
              <span style={{ color: "red" }} class="required">
                *
              </span>
            </label>
            <div
              style={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                gap: "2%",
              }}
            >
              <CountryCode />
              <input
                style={{
                  flex: 2,
                  padding: "1% 1%",
                  borderRadius: "5px",
                  height: "30px",
                  outline: "1px solid #3498db",
                  border: "none",
                  marginBottom: "15px",
                  marginTop: "10px",
                }}
                type="number"
                name=""
                id=""
                placeholder="So the property can reach you"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "5px",
                marginBottom: "20px",
                gap: "1%  ",
              }}
            >
              <input type="checkbox" name="hbfhb" id="" />
              <label htmlFor="" style={{ fontSize: "small" }}>
                Receive text alerts about this trip. Message and data rates may
                apply.
              </label>
            </div>
          </form>
        </div>
        {/*  */}
      </div>
    </>
  );
}
