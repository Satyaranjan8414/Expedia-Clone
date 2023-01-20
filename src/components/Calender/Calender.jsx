import React from "react";
import { useState } from "react";

export const Calender = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return <div>Calender</div>;
};
