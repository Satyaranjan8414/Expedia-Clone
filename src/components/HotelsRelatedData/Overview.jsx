import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBowlFood,
  faCoffee,
  faDumbbell,
  faPaw,
  faSnowflake,
  faStar,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdFlight } from "react-icons/md";
import "./Overview.css";
export default function Overview({ data }) {
  return (
    <div className="overview">
      <div className="overviewHotelDetails">
        <h2 className="overviewHotelDetailsHeading">{data.heading1}</h2>
        <div className="overviewStarts">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <h4>Ratings : {data.rating}</h4>
        <p className="overviewHotelDetailsReviwes">
          <span> See all {data.no_of_reviews}</span>
          <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faArrowRight} />
        </p>
        {/*  */}
        <div>
          <div className="overviewHotelProvideHeading">Popular amenities</div>
          <div className="overviewHotelProvide">
            <div className="overviewHotesprovideContainer">
              <div className="overviewHotesprovideDiv">
                <FontAwesomeIcon icon={faWifi} />
                <p>Free WiFi</p>
              </div>
              <div className="overviewHotesprovideDiv">
                <FontAwesomeIcon icon={faBowlFood} />
                <p>Restaurant</p>
              </div>
            </div>
            <div className="overviewHotesprovideContainer">
              <div className="overviewHotesprovideDiv">
                <FontAwesomeIcon icon={faPaw} />
                <p>Pet Friendly</p>
              </div>
              <div className="overviewHotesprovideDiv">
                <FontAwesomeIcon icon={faDumbbell} />
                <p>Gym</p>
              </div>
            </div>
            <div className="overviewHotesprovideContainer">
              <div className="overviewHotesprovideDiv">
                <FontAwesomeIcon icon={faSnowflake} />
                <p>Air conditioning</p>
              </div>
              <div className="overviewHotesprovideDiv">
                <FontAwesomeIcon icon={faCoffee} />
                <p>Breakfast available</p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/payment">
          <div className="overviewRevserveBookBtn">
            <button>Reserve a room</button>
          </div>
        </Link>
      </div>
      {/*  */}

      {/*  */}
      <div className="overviewHotelAdressDetailsContainer">
        <img
          style={{ width: "100%", borderRadius: "10px" }}
          src="https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=13&scale=&size=375x250&map_id=3b266eb50d2997c6&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker.png%7C44.3949,9.00185&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=s7ltwp_Io6uBV9tAuDfQbBT5MO0="
          alt="img"
        />
        <div className="overviewHotelAdressDetailsHeading">
          <h3>Explore the area</h3>
        </div>
        <div>
          <div>
            <div className="overviewAdressDiv">
              <div className="overviewDp">
                <div>
                  <IoLocationSharp className="overviewDpFont" />
                </div>
                <p>Gaslini hospital</p>
              </div>
              <p>15 min drive</p>
            </div>
            <div className="overviewAdressDiv">
              <div className="overviewDp">
                <div>
                  <IoLocationSharp className="overviewDpFont" />
                </div>
                <p>Passeggiata di Anita Garibaldi</p>
              </div>
              <p>4 min drive</p>
            </div>
            <div className="overviewAdressDiv">
              <div className="overviewDp">
                <div>
                  <IoLocationSharp className="overviewDpFont" />
                </div>
                <p>San Martino Polyclinic Hospital</p>
              </div>
              <p>8 min drive</p>
            </div>
            <div className="overviewAdressDiv">
              <div className="overviewDp">
                <div>
                  <MdFlight className="overviewDpFont" />
                </div>
                <p>Genoa (GOA-Cristoforo Colombo)</p>
              </div>
              <p>25 min drive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
