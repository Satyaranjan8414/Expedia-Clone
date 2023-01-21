import "./pm.css";
import { AiOutlineCheck } from "react-icons/ai";

const PaymentMethod = () => {
  return (
    <div className="paymentmethod">
      <p className="paymentmethod-title">Payment method</p>
      <div className="paymentmethod-tt">
        <div className="paymenttras">
          <span className="trans-icon">
            {" "}
            <AiOutlineCheck className="ti-icon" />
          </span>
          <span className="trans-title">We use secure transmission</span>
        </div>

        <div className="paymenttras">
          <span className="trans-icon">
            <AiOutlineCheck className="ti-icon" />
          </span>
          <span className="trans-title">
            We protect your personal information
          </span>
        </div>
      </div>

      <div className="paymentmethodcheck">
        <div className="selpayment">Debit/Credit Card</div>
        <div className="selpayment">Paypal</div>
        <div className="selpayment">Monthly Payments</div>
        <div className="selpayment">Click-to-Pay</div>
      </div>

      <div className="payment-line"></div>

      <div className="paymentmethod-imgcard">
        <div>
          <img
            src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://a.travel-assets.com/dms-svg/payments/cards-cc_china_union_pay.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://a.travel-assets.com/dms-svg/payments/cards-cc_jcb.svg"
            alt=""
          />
        </div>
      </div>
      <form className="paymentmethod-form">
        <label htmlFor="">
          <span>Name on Card</span>
          <span className="form-star">*</span>
        </label>
        <input type="text" />

        <label htmlFor="">
          <span>Debit/Credit card number</span>
          <span className="form-star">*</span>
        </label>
        <input type="text" />

        <label htmlFor="">
          <span>Expiration date</span>
          <span className="form-star">*</span>
        </label>
        <div className="form-select">
          <select>
            <option value="" selected="">
              Month
            </option>
            <option value="1">01-Jan</option>
            <option value="2">02-Feb</option>
            <option value="3">03-Mar</option>
            <option value="4">04-Apr</option>
            <option value="5">05-May</option>
            <option value="6">06-Jun</option>
            <option value="7">07-Jul</option>
            <option value="8">08-Aug</option>
            <option value="9">09-Sep</option>
            <option value="10">10-Oct</option>
            <option value="11">11-Nov</option>
            <option value="12">12-Dec</option>
          </select>
          <select>
            <option value="" selected="">
              Year
            </option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031</option>
            <option value="2032">2032</option>
            <option value="2033">2033</option>
            <option value="2034">2034</option>
            <option value="2035">2035</option>
            <option value="2036">2036</option>
            <option value="2037">2037</option>
            <option value="2038">2038</option>
            <option value="2039">2039</option>
            <option value="2040">2040</option>
            <option value="2041">2041</option>
          </select>
        </div>

        <div className="formsk">
          <div style={{ width: "140px" }}>
            <p style={{ width: "120px" }}>
              Security code <span className="form-star">*</span>
            </p>
            <input className="seckey sc" type="text" />
          </div>

          <div>
            <label htmlFor="" style={{ width: "120px" }}>
              Billing ZIP code <span className="form-star">*</span>
            </label>
            <input type="text" className="formbz sc" />
          </div>
        </div>

        <div className="formcheckboc">
          <input type="checkbox" />
          <span>Remember this card for future use</span>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethod;
