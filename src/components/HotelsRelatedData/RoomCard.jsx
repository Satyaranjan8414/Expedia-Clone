import {
  faArrowRight,
  faBed,
  faRuler,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarouselB from "./CarouselB";
import { getLocalData } from "../../utils/accessLocalStorage";
export default function RoomCard({ data }) {
  const handleReserve = () => {
    getLocalData("soloData", data);
  };
  const img5 =
    "https://images.trvl-media.com/hotels/3000000/2710000/2703400/2703358/00a8ece2.jpg?impolicy=resizecrop&rw=455&ra=fit";
  return (
    <div
      className="room_cards"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        paddingBottom: "25px",
        borderRadius: "10px",
      }}
    >
      <div>
        <CarouselB
          img1={data.img1}
          img2={data.img2}
          img3={data.img3}
          img4={data.img4}
          img5={img5}
        />
      </div>
      <div className="other_room_info">
        <h3
          style={{
            marginBottom: "0.9rem",
            marginTop: "0.4rem",
            color: "#242c33",
            fontWeight: "400",
          }}
        >
          {data.heading1}
        </h3>
        <p
          style={{
            // border: "1px solid green",
            fontSize: "0.9rem",
            marginBottom: "0.2rem",
          }}
        >
          {data.rating} guest room rating
        </p>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              // border: "1px solid red",
            }}
          >
            <FontAwesomeIcon icon={faRuler} />
            269 sq feet
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faUserFriends} />
            Sleeps {data.id}
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faBed} />
            {data.id} Twin Beds
          </p>
          <p
            style={{
              color: "#3498db",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              paddingBottom: "1rem",
            }}
          >
            More details
            <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </div>
      </div>
      <hr />

      <div
        style={{
          width: "100%",
          paddingTop: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3 style={{ marginTop: "15px" }}>{data.price1}</h3>
          <p style={{ marginTop: "5px" }}>includes taxes & fees</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <p style={{ color: "red", fontSize: "x-small", padding: "0.5rem 0" }}>
            {data.heading3}
          </p>
          <div
            style={{
              background: "#3498db ",
              padding: "0.4rem 0.5rem",
              textAlign: "center",
              borderRadius: "5px",
              width: "120px",
              color: "#fff",
              fontWeight: "500",
            }}
            className="reserve_btn"
            onClick={handleReserve}
          >
            <NavLink to={"/payment"}>Reserve</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
