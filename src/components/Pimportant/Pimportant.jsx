import "./important.css";
import { AiOutlineCheck } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Pimportant = () => {
  const [payment, setpayment] = useState(false);

  const handlepayment = () => {
    setpayment(!payment);
  };

  if (payment) {
    return <Navigate to="/bookingconfirm" />;
  }

  return (
    <div className="important">
      <p className="importantTitle">Important information</p>
      <div className="importantwrapper">
        <div className="impRule">
          <ul className="ruleul">
            <li>
              Cancellations or changes made after 6:00pm (property local time)
              on Jan 15, 2023 or no-shows are subject to a property fee equal to
              the first nights rate plus taxes and fees.
            </li>
            <li>
              Front desk staff will greet guests on arrival. For more details,
              please contact the property using the information on the booking
              confirmation.
            </li>
            <li>
              Due to COVID-19, valet parking and shuttle services are not
              available until further notice.
            </li>
            <li>
              Guests booked in breakfast included rate plans receive breakfast
              for up to 2 adults who are sharing a guestroom. Breakfast fees
              apply for additional guests.
            </li>
            <li>
              You'll be asked to pay the following charges at the property:
              <ul className="ruleulchild">
                <li>Deposit: USD 100.00 per day</li>
                <li>Resort fee: USD 33.81 per accommodation, per night</li>
              </ul>
            </li>
            <li>
              The resort fee includes:
              <ul className="ruleulchild">
                <li>Phone calls</li>
                <li>In-room bottled water</li>
                <li>Additional inclusions</li>
                <li>WiFi access (may be limited)</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="imps">
          By clicking on the button below, I acknowledge that I have reviewed
          the <span className="impblue">Privacy Statement</span>and
          <span className="impblue">Government Travel Advice</span> Opens in a
          new window. and have reviewed and accept the and have reviewed and
          accept the
          <span className="impblue"> Rules & Restrictions</span> and{" "}
          <span>Terms of Use </span>
        </div>

        <div className="impchanrule">
          <span>
            <AiOutlineCheck className="imp_icon" />
          </span>
          <span>
            Change of plans? No problem. You can cancel for a full refund before{" "}
            <span className="impbefore"> Sun, Jan 15</span>
          </span>
        </div>

        <button className="impbtn" onClick={handlepayment}>
          <span className="btnflrc">
            <span> Complete Booking</span>
            <span className="fagreater">
              <FontAwesomeIcon icon={faGreaterThan} />
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Pimportant;
