import React, { useEffect, useState } from "react";
import Style from "./Filter.module.css";
import SearchByName from "./SearchByName";
import { Divider ,Stack} from '@chakra-ui/react'
// import {
//   RangeSlider,
//   RangeSliderTrack,
//   RangeSliderFilledTrack,
//   RangeSliderThumb,
//   Stack,
// } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import {useSearchParams} from "react-router-dom";

const Filter = () => {
  
  const [searchParams,setSearchParams]= useSearchParams();
  const initialState=searchParams.getAll("rating");
  const [review,setreview] = useState(initialState || []);

  //checkbox handling function 
  const triGgerCheckBox=(e)=>{
   const NewReview=[...review]
      if(NewReview.includes(e.target.value))
      {
        NewReview.splice(NewReview.indexOf(e.target.value),1);
      }else{
        NewReview.push(e.target.value)
      }
      setreview(NewReview);
  }

  //when render
  useEffect(()=>{
    const params={
      review
    }
    // test1&&(params.text1=text1)
    setSearchParams(params)

  },[review])

  return (
    <div>
      <div className={Style.container}>
        <SearchByName />
        <h1 className={Style.Headings}>Filter By</h1>

        {/* <div>
          <h1 className={Style.subHeading}>Price per night</h1>

          <div className={Style.SliderContainer}>
            <RangeSlider
              defaultValue={[0, 11000]}
              min={0}
              max={11000}
              step={1100}
            >
              <RangeSliderTrack bg="blue.200">
                <RangeSliderFilledTrack bg="blue" />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={4} index={0} bg="blue" />
              <RangeSliderThumb boxSize={4} index={1} bg="blue" />
            </RangeSlider>
          </div>
        </div> */}
        <Divider/>
        
        <div>
          <h1 className={Style.subHeading}>Guest rating</h1>
          <div className={Style.CHeckBoxContainer}>
            <Stack spacing={2} direction="column" >
            {/* <Checkbox colorScheme="blue" size='sm' onChange={triGgerCheckBox}  value="Any">Any</Checkbox> */}
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Exceptional")} onChange={triGgerCheckBox} value="Exceptional">Exceptional</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Wonderful")} onChange={triGgerCheckBox} value="Wonderful">Wonderful</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Excellent")} onChange={triGgerCheckBox} value="Excellent">Excellent</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Very good")} onChange={triGgerCheckBox} value="Very good">Very good</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Good")} onChange={triGgerCheckBox} value="Good">Good</Checkbox>
            </Stack>
          </div>
        </div>
        <Divider />
        <div>
          <h1 className={Style.subHeading}>Payment type</h1>
          <div className={Style.CHeckBoxContainer}>
            <Stack spacing={2} direction="column" >
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Fully refundable")} onChange={triGgerCheckBox} value="Fully refundable">Fully refundable</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Reserve now, pay later")} onChange={triGgerCheckBox} value="Reserve now, pay later">Reserve now, pay later</Checkbox>
            </Stack>
          </div>
        </div>
        
        <Divider />

        <div>
          <h1 className={Style.subHeading}>Payment type</h1>
          <div className={Style.CHeckBoxContainer}>
            <Stack spacing={2} direction="column" >
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Pune")} onChange={triGgerCheckBox} value="Pune">Pune</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Model Colony")} onChange={triGgerCheckBox} value="Model Colony">Model Colony</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Yerawada")} onChange={triGgerCheckBox} value="Yerawada">Yerawada</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Mundhwa")} onChange={triGgerCheckBox} value="Mundhwa">Mundhwa</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Shivajinagar")} onChange={triGgerCheckBox} value="Shivajinagar">Shivajinagar</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Kharadi")} onChange={triGgerCheckBox} value="Kharadi">Kharadi</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Pimpri - Chinchwad")} onChange={triGgerCheckBox} value="Pimpri - Chinchwad">Pimpri - Chinchwad</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Erandwane")} onChange={triGgerCheckBox} value="Erandwane">Erandwane</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Kalyani Nagar")} onChange={triGgerCheckBox} value="Kalyani Nagar">Kalyani Nagar</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Central Pune")} onChange={triGgerCheckBox} value="Central Pune">Central Pune</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Sadashiv Peth")} onChange={triGgerCheckBox} value="Sadashiv Peth">Sadashiv Peth</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Kharadi")} onChange={triGgerCheckBox} value="Kharadi">Kharadi</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Koregaon Park")} onChange={triGgerCheckBox} value="Koregaon Park">Koregaon Park</Checkbox>
              <Checkbox colorScheme="blue" size='sm' isChecked={review.includes("Baner")} onChange={triGgerCheckBox} value="Baner">Baner</Checkbox>
            </Stack>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Filter;
