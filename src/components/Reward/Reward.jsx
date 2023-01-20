import reward from "./Reward.module.css";

import React from "react";

export const Reward = () => {
  return (
    <div className={reward.rewardMaincon}>
      <figure className={reward.reward}>
        <img
          src="https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg"
          alt=""
        />

        <div className={reward.textContainer}>
          <div>
            <div className={reward.rewardTextContainerChildren}>
              <div className={reward.Reawardheadline}>
                <h2>Save instantly with Expedia Rewards</h2>
              </div>
              <div></div>
              <div></div>
            </div>

            <div className={reward.rewardTextContainerChildren}>
              <div className={reward.ReawarPara}>
                You can enjoy access to perks like Member Prices, saving an
                average of 15% on thousands of hotels. Terms may apply.
              </div>
              <div></div>
              <div></div>
            </div>

            <div className={reward.RewardBtn}>
              <p>See Member Prices</p>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </figure>
      <figure className={reward.Reward600}>
        <img
          src="https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-M-327x436.jpg"
          alt=""
        />

        <div className={reward.reward600TextContainer}>
          <div>
            <h2>Save instantly with Expedia Rewards</h2>
          </div>

          <div>
            You can enjoy access to perks like Member Prices, saving an average
            of 15% on thousands of hotels. Terms may apply.
          </div>
          <div>
            <p>See Member Prices</p>
          </div>
        </div>
      </figure>
    </div>
  );
};
