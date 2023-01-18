import "./AuthDropdown.css";

import React from "react";

export const AuthDropdown = () => {
  return (
    <div className="authDropdown">
      <div className="authDropdownWrapper" style={{ width: "100%" }}>
        <div className="authDropdownUserDetail" style={{ width: "100%" }}>
          <h2>Hi , Vishal</h2>
          <h3>vishalvarma537@gmail.com</h3>
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

        <div className="authdropdownSignout">SignOut</div>
      </div>
    </div>
  );
};
