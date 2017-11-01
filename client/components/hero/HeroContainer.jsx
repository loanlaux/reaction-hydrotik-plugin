import React, { Component, PropTypes } from "react";

import { Carousel, CustomPrevArrow, CustomNextArrow } from "../carousel";

class HeroContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const heroSettings = {
      height: 500,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      type: "hero",
      backgroundColor: "#545454"
    };

    const heroSlides = [
      {
        title: "Slide 1",
        href: "http://www.google.com",
        src: 'images/hero/model-600238_1920.jpg',
        cta: "Shop Now"
      },
      {
        title: "Slide 2",
        description: "Slide 2 Description",
        // href: "http://www.google.com",
        src: 'images/hero/fashion-1636872_1920.jpg',
        cta: ""
      },
      {
        description: "Slide 3 Description",
        // href: "http://www.google.com",
        src: 'images/hero/fashion-1636868_1920.jpg',
        cta: "Shop Now"
      }
    ];

    return (
      <div className="carousel">
        <Carousel slides={heroSlides} settings={heroSettings} />
      </div>
    );
  }
}

export default HeroContainer;
