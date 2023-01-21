import { useState } from "react";

let lsData1 = {
  id: 1,
  city: "Delhi",
  heading1: "Hotel Smart Plaza Delhi Airport",
  headig2: "New Delhi",
  img1: "https://cf.bstatic.com/xdata/images/hotel/square200/277752827.webp?k=8c40a98919e19c728c73b4e9fa0f2d6b06d8517f3f8264fc7a8541ab8f73781b&o=&s=1",
  img2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/277752827.jpg?k=574d2eaf5e5412890cffebffbe788bd7b907d802313e882f4ad438cbcb8b360b&o=&hp=1",
  img3: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330281468.jpg?k=9e80746ac3af9eebd847ef33d47428d48595849b4a79834a6c3c876c6fac9765&o=&hp=1",
  img4: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330281469.jpg?k=7d753fdc296e3fbbe0d5b59dd38374a0450c9b32ad137a3bc0dabe75aabff582&o=&hp=1",
  img5: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330281475.jpg?k=8a8327ac1d4e38831b091c30085c5ee3951f0827073a79269a3fee5462a8112c&o=&hp=1",
  img6: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330281478.jpg?k=b666f98a5f6c1464d167ae3b852e12d2299579394f86bf38ecb5c5b36d3875ad&o=&hp=1",
  img7: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/385463673.jpg?k=cba532679ca56283c45d524fb3be7283967ee116efac6ea9b26e6a1eb29e7cb2&o=&hp=1",
  text1: "The Capital’s Only Modern Palace Hotel",
  text2:
    "Located in the Mahipalpur area of New Delhi, Hotel Smart Plaza Delhi Airport is a 10-minute drive from Indira Gandhi International Airport.",
  text3: "Fully refundable",
  text4: "Travel Sustainable property",
  rating: "4.3/5",
  review: "Excellent",
  no_of_reviews: "(3,246 reviews)",
  location:
    "A Block, Near Indira Gandhi International Airport, National Highway -8, Mahipalpur, 110037 New Delhi, India",
  location1: "Great location",
  price1: "Rs8,650",
  price2: "10207",
};

export default function Hoteldetail() {
  //   const lsData1 = JSON.parse(localStorage.getItem("Hoteldata")) || [];
  function convert(price) {
    let str = "";
    price = price.split("");
    let count = 0;
    for (let i = 0; i < price.length; i++) {
      if (price[i] == "R" || price[i] == "s" || price[i] == ",") {
        count++;
      } else {
        str += price[i];
      }
    }
    return Number(str);
  }

  //
  let price = convert(lsData1.price1);
  const [amount, setAmount] = useState(price);

  //
  const [coupon, setCoupon] = useState("");
  const handleCouponSubmit = (event) => {
    event.preventDefault();
    if (coupon == "NEWUSER30") {
      price = price - (price * 30) / 100;
      setAmount(price);
      alert("COUPON APPLIED !");
      setCoupon("");
      document.getElementsByClassName("couponField").placeholder =
        "Coupon applied";
    } else {
      alert("INVALID COUPON !");
    }
  };
  //
  return (
    <>
      <div>
        <div
          style={{
            width: "100%",
            marginTop: "22px",
          }}
        >
          <div style={{ background: "#fff" }}>
            <div
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "150px",
                  marginBottom: "10px",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(70%)",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    marginBottom: "5px",
                  }}
                  src={lsData1.img2}
                  alt="img"
                />
                <h3
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "10px",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  {lsData1.heading1}
                </h3>
              </div>
            </div>

            {/*  */}
            <div
              style={{
                width: "100%",
                margin: "auto",
                backgroundColor: "rgb(255,255,255)",
                padding: "4% 5%",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p>
                {lsData1.rating} {lsData1.review} {lsData1.no_of_reviews}
              </p>
              <p style={{ color: "green", fontSize: "small" }}>
                Guests rated this property 8.8/10 for cleanliness
              </p>
              <p style={{ color: "grey", fontSize: "small" }}>
                1 Room: Standard Room, 1 King Bed, Non Smoking
              </p>
              <p style={{ color: "green", fontSize: "small" }}>
                {lsData1.text3}
              </p>
              <p style={{ color: "#000", fontSize: "small" }}>
                {/* Check in : {checkIn} */}
              </p>
              <p style={{ color: "#000", fontSize: "small" }}>
                {/* Check out : {checkOut} */}
              </p>
            </div>
          </div>
        </div>
        {/* Price Details */}
        <div
          style={{
            backgroundColor: "rgb(255,255,255)",
            padding: "2% 0",
            marginTop: "20px",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ width: "90%", margin: "auto" }}>
            <h3>Price details</h3>
          </div>
          <hr />
          <div
            style={{
              width: "90%",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>1 room x 1 night</p>
            <p>{`₹ ${amount}`}</p>
          </div>
          <div
            style={{
              width: "90%",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>Taxes and fees</p>
            <p>{`₹ ${Math.floor((amount * 5) / 100)}`}</p>
          </div>
          <div
            style={{
              width: "90%",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>Local tax</p>
            <p>{`₹ ${Math.floor((amount * 2) / 100)}`}</p>
          </div>
          <hr style={{ width: "90%", margin: "auto" }} />
          <div
            style={{
              width: "90%",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h4>Total</h4>
            {`₹${
              convert(lsData1.price1) +
              Math.floor((amount * 5) / 100) +
              Math.floor((price * 2) / 100)
            }`}
          </div>
          {/*  */}
          <div
            style={{
              width: "90%",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "grey",
            }}
          >
            <p>Pay now</p>
            <p>{`₹${
              ((convert(lsData1.price1) +
                Math.floor((price * 5) / 100) +
                Math.floor((price * 2) / 100)) *
                60) /
              100
            }`}</p>
          </div>
          {/*  */}
          <div
            style={{
              width: "90%",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "grey",
            }}
          >
            <p>Pay at property</p>
            <p>{`₹${
              ((convert(lsData1.price1) +
                Math.floor((price * 5) / 100) +
                Math.floor((price * 2) / 100)) *
                40) /
              100
            }`}</p>
          </div>
          {/*  */}
          <form
            onSubmit={handleCouponSubmit}
            style={{ width: "90%", margin: "auto" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "90%",
                margin: "auto",
              }}
            >
              <p style={{ fontSize: "x-small", color: "#003580" }}>
                Apply coupon (If Any)
              </p>
              <span style={{ color: "red" }}>*</span>
            </div>
            <div
              style={{
                width: "100%",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <input
                className="couponField"
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                style={{
                  height: "30px",
                  border: "3px solid #003580",
                  borderRadius: "10px",
                  padding: "0 3%",
                  width: "60%",
                }}
              />
              <input
                style={{
                  height: "35px",
                  width: "30%",
                  border: "none",
                  backgroundColor: "#003580",
                  borderRadius: "10px",
                  color: "rgb(255,255,255)",
                  cursor: "pointer",
                }}
                type="submit"
              />
            </div>
          </form>
          {/*  */}
          <div
            style={{
              width: "90%",
              margin: "auto",
              fontSize: "x-small",
              marginTop: "20px",
              marginBottom: "20px",
              textAlign: "justify",
            }}
          >
            Rates are quoted in Indian Rupees. Taxes and/or property-imposed
            fees of 5% will be collected by the property in Rupees. Taxes and/or
            fees due at the property are based on current exchange rates, which
            may vary at the time of travel.
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}
