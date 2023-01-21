import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export const Cartdata = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const getData = (place) => {
    axios
      .get(`https://rose-repulsive-adder.cyclic.app/${place}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchHandler = () => {
    console.log(search);
    getData(search);
  };
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchHandler}>Submit</button>
      </div>

      <div>
        {data.length > 0 &&
          data.map((ele, ind) => {
            return (
              <CardWrapper key={ind}>
                <img
                  src={ele.img1}
                  alt="/"
                  style={{ width: "200px", borderRadius: "30%" ,height:"120px"}}
                />
                <div>
                  {/* <h3>City:{ele.city}</h3>
                  <h3>Place : {ele.heading1}</h3>
                  <h3>rating : {ele.rating}</h3> */}
                  <div>
                    <p>{ele.heading1}</p>
                    <p>{ele.city}</p>
                    <div>
                      <p>Pool</p>
                      <p>Hot Tub </p>
                    </div>
                    <p>{ele.text1}</p>
                    <p>{ele.text2}</p>
                    <div>
                    <p>{ele.rating}</p>
                    <p>{ele.review}</p>
                    <p>{ele.no_of_reviews}</p>
                    </div>
                    <div>
                      <p>{ele.price1}</p>
                      <p>{ele.price2}</p>
                    </div>
                  </div>
                  
                </div>
              </CardWrapper>
            );
          })}
      </div>
    </div>
  );
};


const CardWrapper = styled.button`
  margin: 20px;
  display: flex;
  column-gap: 10px;
  row-gap: 40px;
  border-radius: 20%;
  padding: 10px;
  border: none;
  background-color: lightgreen;
  color: white;
  width: 600px;
`;

