import "./signpaymet.css";
import { FaLock } from "react-icons/fa";
import { useEffect, useState } from "react";
export const PaymentSignin = () => {
  const [email, setemail] = useState({});

  useEffect(() => {
    let val = JSON.parse(localStorage.getItem("userData")) || {};
    setemail(val);
  }, []);

  return (
    <div className="PaymentSignin">
      <span className="falock">
        <div className="fapadding">
          <FaLock />
        </div>
      </span>

      <div className="paymentemail">
        <span className="signas">Signed in as</span>
        <span> {email.email}</span>
      </div>
    </div>
  );
};
