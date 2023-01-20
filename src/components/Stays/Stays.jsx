import stay from "./Stays.module.css";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { BiCalendarEvent } from "react-icons/bi";
import { shallowEqual, useSelector } from "react-redux";
import { HeaderTravellers } from "../HeaderTravellers/HeaderTravellers";
import { memo, useState } from "react";
import { useRef } from "react";

const Stays = memo(() => {
  const triggerTravel = useRef(false);

  const { Room, Child, Adult } = useSelector((value) => {
    return {
      Room: value.FamilyReducer.Room,
      Child: value.FamilyReducer.Child,
      Adult: value.FamilyReducer.Adult,
    };
  }, shallowEqual);

  const [triggerTravellers, setTravellers] = useState(false);

  const traTrigger = (e) => {
    e.preventDefault();
    setTravellers((prev) => !prev);
  };

  return (
    <div className={stay.Stays}>
      <div className={stay.staysContainer}>
        <div className={stay.staysForm}>
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
              <div onClick={traTrigger} className={stay.staysBtn}>
                <h6>Travellers</h6>
                {`Room ${Room} Adults ${Adult} children ${Child}`}
              </div>
              <div>
                {triggerTravellers && (
                  <HeaderTravellers traTrigger={traTrigger} />
                )}
              </div>
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
        </div>
      </div>
    </div>
  );
});

export default Stays;
