import Eap from "./ExpediaApp.module.css";

import React from "react";

export const ExpediaApp = () => {
  return (
    <div className={Eap.ExpediaApp}>
      <div className={Eap.ExpediaAppWrapper}>
        <div className={Eap.ExpediaAppImg}>
          <img
            src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg"
            alt=""
          />
        </div>
        <div className={Eap.ExpediaAppText}>
          <div className={Eap.ExpediaAppTextHead}>
            <h2>Go further with the Expedia app</h2>
          </div>
          <div className={Eap.ExpediaAppTextPoints}>
            <p>
              Save even more - get up to 20% on select hotels and earn double
              the points when you book on the app. Our app deals help you to
              save on trips so you can travel more and manage it all on the go.
            </p>
          </div>
          <div>
            <div className={Eap.ExpediaAppTextDownloadText}>
              <p>Text yourself a download link for easy access</p>
            </div>
            <div className={Eap.ExpediaAppTextLinkSender}>
              <div className={Eap.ExpediaAppPhoneNubSelecter}>
                <label htmlFor="">Country Code</label>
                <select>
                  <option value="+91,India">India +91</option>
                </select>
              </div>
              <input type="text" placeholder="Phone number" />
              <button>Get the App</button>
            </div>
          </div>
          <div className={Eap.lastExpediaDiv}>
            <span>
              By providing your number, you agree to receive a one-time
              automated text message with a link to get the app. Standard text
              message rates may apply.
            </span>
          </div>
        </div>

        <div className={Eap.ExpediaAppQrCode}>
          <img
            src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/personaRelaunch/BEX-HP-PERSONA-DEFAULT-TEST-27.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
