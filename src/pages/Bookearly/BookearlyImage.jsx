import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BookearlyImage.css";

const BookearlyImage = () => {
  const navigate = useNavigate();
  return (
    <Link to="/bookearly">
      <div
        className=" rounded-xl relative bg-cover bg-no-repeat m-auto bg-center my-[30px] w-[95%] h-[300px]"
        style={{
          backgroundImage:
            "url(https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg)",
          maxWidth: "1247px",
        }}
      >
        <div className=" font-bold text-slate-50 absolute bottom-0 left-0 py-2 inline-block px-4 justify-self-end">
          <p>Plan ahead and save</p>
          <p>Book 60 days in advance for 20% off select stays.</p>
        </div>
      </div>
    </Link>
  );
};

export default BookearlyImage;
