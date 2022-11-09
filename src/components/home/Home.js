import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./home.css";

const Home = () => {
  const [cars, setCars] = useState([]);
  const getData = async () => {
    const response = await fetch("api/cars.json");
    const data = await response.json();
    setCars(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40, // this is optional if you are not using partialVisible props
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
    },
  };
  return (
    <Carousel
      arrows={false}
      containerClass="container-padding-bottom"
      responsive={responsive}
      customButtonGroup={<CustomButtonGroup cars={cars} />}
    >
      {cars.map((car) => {
        return <Card key={car.id} car={car} />;
      })}
    </Carousel>
  );
};

const CustomButtonGroup = ({
  next,
  previous,
  goToSlide,
  carouselState,
  ...rest
}) => {
  const { totalItems, currentSlide, slidesToShow } = carouselState;
  const { cars } = rest;
  const next1 = () => {
    if (currentSlide > cars.length - slidesToShow - 1) {
      return;
    }
    goToSlide(currentSlide + 1);
  };

  const previous1 = () => {
    if (currentSlide < 1) {
      return;
    }
    goToSlide(currentSlide - 1);
  };
  return (
    <div className="custom-button-group">
      <button className="btn" onClick={() => previous1()}>
        &lt;
      </button>
      <button className="btn" onClick={() => next1()}>
        &gt;
      </button>
      {/* <button
        onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
      >
        Go to a random slide
      </button> */}
    </div>
  );
};

export default Home;
