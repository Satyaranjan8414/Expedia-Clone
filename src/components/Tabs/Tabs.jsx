import "./Tabs.css";
import { useState } from "react";

export const Tabs = () => {
  const [insideToggle, setinsideToggle] = useState(1);
  const innerToggleTab = (index) => {
    setinsideToggle(index);
  };
  return (
    <div>
      {" "}
      <div className="inerTabsContainer">
        <div className="innerBlockTabs">
          <h1>click</h1>
          <p
            className={
              insideToggle === 1 ? "innertabs active-innertabs" : "innertabs"
            }
            onClick={() => setinsideToggle(1)}
          >
            click
          </p>
          <p
            className={
              insideToggle === 2 ? "innertabs active-innertabs" : "innertabs"
            }
            onClick={() => setinsideToggle(2)}
          >
            setclick
          </p>
          <p
            className={
              insideToggle === 3 ? "innertabs active-innertabs" : "innertabs"
            }
            onClick={() => setinsideToggle(3)}
          >
            returnclick
          </p>
        </div>

        <div className="innerContainerTabs">
          <div
            className={
              insideToggle === 1
                ? "innercontent  active-innercontent"
                : "innercontent"
            }
          >
            <p>stage1</p>
          </div>
          <div
            className={
              insideToggle === 2
                ? "innercontent  active-innercontent"
                : "innercontent"
            }
          >
            <p>stage2</p>
          </div>
          <div
            className={
              insideToggle === 3
                ? "innercontent  active-innercontent"
                : "innercontent"
            }
          >
            <p>
              Illum fuga incidunt repellat quidem quaerat, veniam expedita eius
              accusamus, veritatis eos ad quia? Vero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
