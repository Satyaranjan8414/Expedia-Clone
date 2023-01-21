import React from "react";
import Style from "./Filter.module.css";
import SearchByName from "./SearchByName";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Stack,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

const Filter = () => {
  return (
    <div>
      <div className={Style.container}>
        <SearchByName />
        <h1 className={Style.Headings}>Filter By</h1>

        <div>
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
        </div>

        <div>
          <h1 className={Style.subHeading}>Guest rating</h1>
          <div className={Style.RadioBTNContainer}>
            <RadioGroup defaultValue="1">
              <Stack spacing={4} direction="column">
                <Radio colorScheme="blue" value="1">
                  Any
                </Radio>
                <Radio colorScheme="blue" value="2">
                  Wonderful 9+
                </Radio>
                <Radio colorScheme="blue" value="3">
                  Very good 8+
                </Radio>
                <Radio colorScheme="blue" value="4">
                  Good 7+
                </Radio>
              </Stack>
            </RadioGroup>
          </div>
        </div>

        <div>
          <h1 className={Style.subHeading}>Payment type</h1>
          <div className={Style.CHeckBoxContainer}>
            <Stack spacing={5} direction="column">
              <Checkbox colorScheme="blue">Checkbox</Checkbox>
              <Checkbox colorScheme="blue">Checkbox</Checkbox>
            </Stack>
          </div>
        </div>

        <div>
          <h1 className={Style.subHeading}>Area</h1>
          <div className={Style.RadioBTNContainer}>
            <RadioGroup defaultValue="1">
              <Stack spacing={4} direction="column">
                <Radio colorScheme="blue" value="1">
               Pune
                </Radio>
                <Radio colorScheme="blue" value="2">
                Model Colony
                </Radio>
                <Radio colorScheme="blue" value="3">
                Yerawada
                </Radio>
                <Radio colorScheme="blue" value="4">
                Mundhwa
                </Radio>
                <Radio colorScheme="blue" value="5">
                Shivajinagar
                </Radio>
                <Radio colorScheme="blue" value="6">
                Kharadi
                </Radio>
                <Radio colorScheme="blue" value="7">
                Pimpri - Chinchwad
                </Radio>
                <Radio colorScheme="blue" value="8">
                Erandwane
                </Radio>
                <Radio colorScheme="blue" value="9">
                Kalyani Nagar
                </Radio>
                <Radio colorScheme="blue" value="10">
                Central Pune
                </Radio>
                <Radio colorScheme="blue" value="11">
                Sadashiv Peth
                </Radio>
                <Radio colorScheme="blue" value="12">
                Kharadi
                </Radio>
                <Radio colorScheme="blue" value="13">
                Koregaon Park
                </Radio>
                <Radio colorScheme="blue" value="14">
                Baner
                </Radio>
              </Stack>
            </RadioGroup>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Filter;
