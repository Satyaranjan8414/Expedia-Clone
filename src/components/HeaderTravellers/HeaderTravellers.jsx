import travel from "./HeaderTravellers.module.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HiMinus, HiPlus } from "react-icons/hi";
import { AddRoom } from "../../Redux/familyDrop/actionType";

export const HeaderTravellers = () => {
  const { Room, Child, Adult } = useSelector((value) => {
    return {
      Room: value.FamilyReducer.Room,
      Child: value.FamilyReducer.Child,
      Adult: value.FamilyReducer.Adult,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  function toggleAddRoom(e) {
    e.preventDefault();
    dispatch(AddRoom());
  }

  return (
    <div className={travel.headerTravellrs}>
      <div>Travellers</div>
      <div className={travel.headerTravellrsOption}>
        <div>
          <span>Room</span>
          <div className={travel.HeaderTravellersController}>
            <button className={travel.HeaderTravellersIncreaseNumber}>
              <HiMinus />
            </button>
            <span className={travel.travelCounterNumber}>{Adult}</span>
            <button className={travel.HeaderTravellersIncreaseNumber}>
              <HiPlus />
            </button>
          </div>
        </div>

        <div>
          <span>Adult</span>
          <div className={travel.HeaderTravellersController}>
            <button className={travel.HeaderTravellersIncreaseNumber}>
              <HiMinus />
            </button>
            <span className={travel.travelCounterNumber}>{Adult}</span>
            <button className={travel.HeaderTravellersIncreaseNumber}>
              {" "}
              <HiPlus />
            </button>
          </div>
        </div>

        <div>
          <span>Children</span>
          <div className={travel.HeaderTravellersController}>
            <button className={travel.HeaderTravellersIncreaseNumber}>
              <HiMinus />
            </button>
            <span className={travel.travelCounterNumber}>{Adult}</span>
            <button className={travel.HeaderTravellersIncreaseNumber}>
              {" "}
              <HiPlus />
            </button>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
