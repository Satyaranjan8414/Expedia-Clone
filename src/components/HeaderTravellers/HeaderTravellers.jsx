import travel from "./HeaderTravellers.module.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HiMinus, HiPlus } from "react-icons/hi";
import {
  addAdult,
  addChild,
  addRoom,
  reduceAdult,
  reduceChild,
  reduceRoom,
} from "../../Redux/familyDrop/action";
import { memo } from "react";

export const HeaderTravellers = memo(({ traTrigger }) => {
  const { Room, Child, Adult } = useSelector((value) => {
    return {
      Room: value.FamilyReducer.Room,
      Child: value.FamilyReducer.Child,
      Adult: value.FamilyReducer.Adult,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  function toggleReduceRoom(e) {
    e.preventDefault();
    dispatch(reduceRoom(1));
  }

  function toggleAddRoom(e) {
    e.preventDefault();
    dispatch(addRoom(1));
  }

  function toggleReduceAdult(e) {
    e.preventDefault();
    dispatch(reduceAdult(1));
  }

  function toggleAddAdult(e) {
    e.preventDefault();
    dispatch(addAdult(1));
  }

  function toggleReduceChild(e) {
    e.preventDefault();
    dispatch(reduceChild(1));
  }

  function toggleAddChild(e) {
    e.preventDefault();
    dispatch(addChild(1));
  }

  return (
    <div className={travel.headerTravellrs}>
      <div className={travel.staticd}></div>
      <div>Travellers</div>
      <div className={travel.headerTravellrsOption}>
        <div>
          <span>Room</span>
          <div className={travel.HeaderTravellersController}>
            <button
              onClick={toggleReduceRoom}
              disabled={Room > 0 ? false : true}
              className={travel.HeaderTravellersIncreaseNumber}
            >
              <HiMinus />
            </button>
            <span className={travel.travelCounterNumber}>{Room}</span>
            <button
              onClick={toggleAddRoom}
              className={travel.HeaderTravellersIncreaseNumber}
            >
              <HiPlus />
            </button>
          </div>
        </div>

        <div>
          <span>Adult</span>
          <div className={travel.HeaderTravellersController}>
            <button
              onClick={toggleReduceAdult}
              disabled={Adult > 0 ? false : true}
              className={travel.HeaderTravellersIncreaseNumber}
            >
              <HiMinus />
            </button>
            <span className={travel.travelCounterNumber}>{Adult}</span>
            <button
              onClick={toggleAddAdult}
              className={travel.HeaderTravellersIncreaseNumber}
            >
              <HiPlus />
            </button>
          </div>
        </div>

        <div>
          <span>Children</span>
          <div className={travel.HeaderTravellersController}>
            <button
              onClick={toggleReduceChild}
              disabled={Child > 0 ? false : true}
              className={travel.HeaderTravellersIncreaseNumber}
            >
              <HiMinus />
            </button>
            <span className={travel.travelCounterNumber}>{Child}</span>
            <button
              onClick={toggleAddChild}
              className={travel.HeaderTravellersIncreaseNumber}
            >
              <HiPlus />
            </button>
          </div>
        </div>
      </div>
      <div className={travel.headerTravellrsBtnDone}>
        <button onClick={traTrigger}>Done</button>
      </div>
    </div>
  );
});
