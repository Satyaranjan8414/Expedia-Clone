import stay from "./Stays.module.css";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { BiCalendarEvent } from "react-icons/bi";
import { shallowEqual, useSelector } from "react-redux";
import { HeaderTravellers } from "../HeaderTravellers/HeaderTravellers";
import { memo, useState } from "react";
import { useRef } from "react";
import { Calendar, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css fil
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { setLocalDate } from "../../utils/accessLocalStorage";

const Stays = memo(() => {
  const [text, settext] = useState("");

  let navigate = useNavigate();

  function redirect() {
    navigate("/hotels", { state: { text } });
    setLocalDate("searchvalue", text);
  }

  const [openStartDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [endTrip, setendTrip] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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

  const triggerStartDate = () => {
    setStartDate((prev) => !prev);
  };

  const triggerendDate = () => {
    setEndDate((prev) => !prev);
  };

  const triggerText = (e) => {
    settext(e.target.value);
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
                  onChange={triggerText}
                />
              </div>
            </div>
            <div className={stay.staysBtn2}>
              <div className={stay.staysdivinput}>
                <div className={stay.staysLogo}>
                  <BiCalendarEvent />
                </div>
                <div className={stay.staysBtn} onClick={triggerStartDate}>
                  <h6>Check-in</h6>
                  <div>
                    <h1>{`${format(state[0].startDate, "dd LLL")}`}</h1>
                  </div>
                </div>

                {openStartDate && (
                  <div className={stay.staysCalender}>
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setState([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
                    />
                  </div>
                )}
              </div>
              <div className={stay.staysdivinput}>
                <div className={stay.staysLogo}>
                  <BiCalendarEvent />
                </div>
                <div className={stay.staysBtn} onClick={triggerendDate}>
                  <h6>Check-out</h6>
                  <div>
                    <h1>{`${format(endTrip[0].startDate, "dd LLL")}`}</h1>
                  </div>
                </div>
                {endDate && (
                  <div className={stay.staysCalender1}>
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setendTrip([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={endTrip}
                    />
                  </div>
                )}
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
            <button onClick={redirect}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Stays;
