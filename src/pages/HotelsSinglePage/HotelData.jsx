import "./HotelData.css";
import A from "../../components/HotelsRelatedData/A";
import B from "../../components/HotelsRelatedData/B";
import C from "../../components/HotelsRelatedData/C";
import { Navbar } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { getLocalData, setLocalDate } from "../../utils/accessLocalStorage";

let data = {
  id: 1,
  city: "Delhi",
  heading1: "Le Meridien New Delhi",
  headig2: "New Delhi",
  img1: "https://images.trvl-media.com/hotels/1000000/540000/531700/531648/0be7b7bd.jpg?impolicy=resizecrop&rw=455&ra=fit",
  img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/540000/531700/531648/db6e3fdf_b.jpg",
  img3: "https://images.trvl-media.com/hotels/1000000/540000/531700/531648/8d2945d0.jpg?impolicy=resizecrop&rw=455&ra=fit",
  img4: "https://images.trvl-media.com/hotels/1000000/540000/531700/531648/55467e67.jpg?impolicy=resizecrop&rw=455&ra=fit",
  text1: "The Capital’s Only Modern Palace Hotel",
  text2:
    "In AC Hotel Genova we know what need: AC Lounge and delicious breakfast, comfy rooms, common areas and the best rates.",
  text3: "Fully refundable",
  text4: "Reserve now, pay later",
  rating: "4.3/5",
  review: "Excellent",
  no_of_reviews: "(523 reviews)",
  heading3: "We have 5 left at",
  price1: "Rs8,650",
  price2: "10207",
};

export default function HotelData() {
  let { id } = useParams();
  const [Data, setData] = useState({});
  const val = getLocalData("searchvalue");

  function fetchData(id) {
    axios
      .get(`https://rose-repulsive-adder.cyclic.app/${val}/${id}`)
      .then((res) => {
        setData(res.data);
        setLocalDate("soloData", Data);
      });
  }

  useEffect(() => {
    fetchData(id);
  }, []);

  const { img1, img2, img3, img4 } = Data;
  return (
    <>
      <div className="hotel_data_main_div">
        <div className="Hotelcarsoual"></div>
        <div style={{ background: "#fff" }}>
          <Navbar />
        </div>
        <div className="hotel_data_subMain_div">
          {/* ------------------------------------- */}
          {/* a */}
          <div className="info_section">
            <A />
            <B img1={img1} img2={img2} img3={img3} img4={img4} />
            <div>
              <C data={data} />
            </div>
          </div>
          {/* b */}
          <div className="ad_section">
            <img
              src="https://tpc.googlesyndication.com/simgad/18356432804528933170"
              alt="img"
            />
          </div>
          {/* =========================================== */}
        </div>
        {/* end */}
        <Footer />
      </div>
    </>
  );
}
