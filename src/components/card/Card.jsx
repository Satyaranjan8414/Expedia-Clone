
import React, { useState } from "react";

import { Center, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import CardCarousel from "./CardCarousel";
import Style from "./Card.module.css";
import { useNavigate } from "react-router";

export default function Card({ hotel }) {
  const navigate=useNavigate();
  const handleCardClick = () => {
    navigate(`/singlepage/${hotel.id}`)
  };
  const price2 = hotel.price2.split("");
  price2.splice(price2.length - 3,0,",")

  //for discount
  function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}
  const discountArray=[10,20,30,40,50];
  const result = getRandomItem(discountArray);

  return (
    <Center py={2}>
      <Stack
        backgroundColor={"white"}
        border="1px solid lightgrey"
        borderRadius={"10px"}
        cursor="pointer"
       
        direction={"row"}
      >
        <Stack
          direction={"row"}
          
          backgroundColor={"teal.100"}
          borderRadius="10px"
          height={"180px"}
        >
          <CardCarousel key={hotel.id} prop={hotel} />
        </Stack>

        <Stack lineHeight={"normal"}  onClick={handleCardClick}>
          <h1 className={Style.heading1}>{hotel.heading1}</h1>
          <h1 className={Style.heading2}>{hotel.heading2}</h1>
         <div>
         <h1 className={Style.text1}> {hotel.text1.length>0? hotel.text1:`The price was Rs${+(hotel.price2)+2000}` } </h1>
          <h1 className={Style.text2}>
            {hotel.text2.length < 10 || hotel.text==="In AC Hotel Genova we know what need: AC Lounge and delicious breakfast, comfy rooms, common areas and the best rates."
              ? hotel.text2
              : `${hotel.text2}. Limited Time Offer - Start your day sunny side up with Complimentary Breakfast, Wi-Fi, Gym & Pool access.`}
          </h1>
         </div>
         <div className={Style.text3}>
          <p>{hotel.text3}</p>
          <p>{hotel.text4}</p>
         </div>

         <div className={Style.rating}>
              <p>{hotel.rating}</p>
              <p>{hotel.review}</p>
              <p>{hotel.no_of_reviews}</p>
         </div>
        </Stack>

        <Stack  width="25%" paddingRight={'0.6%'} className={Style.price}>
          <div>
          <h1 className={Style.leftRooms}> {hotel.heading3.length>0?hotel.heading3:`${result}% off`}</h1>
          <h1 className={Style.price1}> {hotel.price1}</h1>
          <h1 className={Style.price2}> Rs{price2.join("")} total</h1>
          <p className={Style.taxesBanner}>includes taxes & fees</p>
          </div>
        </Stack>
      </Stack>
    </Center>
    
  );
}

