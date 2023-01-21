import "./payment.css";
import { Navbar } from "../Navbar/Navbar";
import PayemntMethod from "../paymentmethod/PaymentMethod";
import Pimportant from "../Pimportant/Pimportant";
import Hoteldetail from "../hotelDetails/Hoteldetails";
import Checking from "../Checking/Checking";
import { PaymentSignin } from "../signinpayment/PaymentSignin";
import Footer from "../Footer/Footer";

const Payment = () => {
  return (
    <div className="payment">
      <Navbar />

      <div className="paymentcontainer">
        <div className="payentwrapper">
          <h1 className="securepayment">
            Secure booking — only takes 2 minutes!
          </h1>
          <div className="free-cancellation-message">
            <div className="free-cancellation-image">
              <img
                src="https://forever.travel-assets.com/flex/flexmanager/images/2020/05/07/illustration__free__cancellation__non_bex__sml.svg"
                alt=""
              />
            </div>
            <div className="free-cancellation-text">
              <p>
                Fully refundable before Sun, Jan 15, 6:00pm (property local time
                )
              </p>
              <span>
                You can change or cancel this stay for a full refund if plans
                change. Because flexibility matters.
              </span>
            </div>
          </div>

          <div className="maindiv">
            <div className="div1">
              <PaymentSignin />
              <Checking />
              <PayemntMethod />
              <Pimportant />
            </div>
            <div className="div2">
              <Hoteldetail />
            </div>
          </div>
        </div>
      </div>
      <div className="payfooter">
        <Footer />
      </div>
    </div>
  );
};

export default Payment;
