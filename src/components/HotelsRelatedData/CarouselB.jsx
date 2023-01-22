import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";
import "./CarouselB.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
export default function CarouselB({ img1, img2, img3, img4 }) {
  return (
    <CarouselProvider
      className="carousel_main"
      naturalSlideWidth={100}
      naturalSlideHeight={67}
      totalSlides={4}
      infinite={true}
    >
      <Slider>
        <Slide index={0}>
          <img
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
            src={img1}
            alt="img"
          />
        </Slide>
        <Slide index={1}>
          <img
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
            src={img2}
            alt="img"
          />
        </Slide>
        <Slide index={2}>
          <img
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
            src={img3}
            alt="img"
          />
        </Slide>
        <Slide index={3}>
          <img
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
            src={img4}
            alt="img"
          />
        </Slide>
      </Slider>
      <ButtonBack className="carousel_prev_btn">
        <FontAwesomeIcon icon={faChevronLeft} />
      </ButtonBack>
      <ButtonNext className="carousel_next_btn">
        <FontAwesomeIcon icon={faChevronRight} />
      </ButtonNext>
    </CarouselProvider>
  );
}
