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

export default function HotelData() {
  let { id } = useParams();
  const [Data, setData] = useState({});
  const val = getLocalData("searchvalue");

  function fetchData(id) {
    axios
      .get(`https://rose-repulsive-adder.cyclic.app/${val}/${id}`)
      .then((res) => {
        setData(res.data);
        setLocalDate("soloData", res.data);
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
              <C data={Data} />
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
