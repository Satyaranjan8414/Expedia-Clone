import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import RoomCard from "./RoomCard";

export default function Rooms({ city }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://rose-repulsive-adder.cyclic.app/${city}?_limit=3&sort=price1&order=desc`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log("shvhcv", data);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px",
        backgroundColor: "transparent",
      }}
    >
      {data.map((room) => (
        <RoomCard key={room.id} data={room} />
      ))}
    </div>
  );
}
