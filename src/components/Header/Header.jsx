import head from "./Header.css";
import { useState } from "react";
import Stays from "../Stays/Stays";
import { Tabs } from "../Tabs/Tabs";

export const Header = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="header">
      <div className="tabsContainer">
        <div className="blockTabsContainer">
          <div className="blockTabs">
            <p
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Stays
            </p>
            <p
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Flights
            </p>
            <p
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Cars
            </p>
          </div>
        </div>

        <div className="containerTabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div>
              <Stays />
            </div>
          </div>
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Stays />
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <Stays />
          </div>
        </div>
      </div>
    </div>
  );
};
