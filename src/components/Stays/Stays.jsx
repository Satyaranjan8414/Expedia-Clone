import stay from "./Stays.module.css";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { BiCalendarEvent } from "react-icons/bi";
import { shallowEqual, useSelector } from "react-redux";
import { HeaderTravellers } from "../HeaderTravellers/HeaderTravellers";

const Stays = () => {
  const { Room, Child, Adult } = useSelector((value) => {
    return {
      Room: value.FamilyReducer.Room,
      Child: value.FamilyReducer.Child,
      Adult: value.FamilyReducer.Adult,
    };
  }, shallowEqual);

  return (
    <div className={stay.Stays}>
      <div className={stay.staysContainer}>
        <form className={stay.staysForm}>
          <div className={stay.staysFormsWrapper}>
            <div className={stay.fistdiv}>
              <div className={stay.staysLogo1}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <input
                  style={{ color: "#343b53" }}
                  type="text"
                  className={stay.staysinput}
                  placeholder="Going to"
                />
              </div>
            </div>
            <div className={stay.staysBtn2}>
              <div className={stay.staysdivinput}>
                <div className={stay.staysLogo}>
                  <BiCalendarEvent />
                </div>
                <div className={stay.staysBtn}>
                  <h6>Check-in</h6>
                  <div>
                    <h1>hello</h1>
                  </div>
                </div>
              </div>
              <div className={stay.staysdivinput}>
                <div className={stay.staysLogo}>
                  <BiCalendarEvent />
                </div>
                <div className={stay.staysBtn}>
                  <h6>Check-out</h6>
                  <div>
                    <h1>cal</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={stay.staysdivinput}>
              <div className={stay.staysLogo1}>
                <FaUserAlt />
              </div>
              <div className={stay.staysBtn}>
                <h6>Travellers</h6>
                <div>1room.2tarvellers</div>
              </div>
              <HeaderTravellers />
            </div>
          </div>
          <div className={stay.staysCheckbox}>
            <div className={stay.staysExtraAddUp}>
              <input type="checkbox" />
              <p>Add a flight</p>
            </div>

            <div className={stay.staysExtraAddUp}>
              <input type="checkbox" />
              <p>Add a car</p>
            </div>
          </div>

          <div className={stay.staysFormSearch}>
            <button>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Stays;
