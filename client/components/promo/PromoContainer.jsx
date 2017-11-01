import React, { Component, PropTypes } from "react";

import { Carousel, CustomPrevArrow, CustomNextArrow } from "../carousel";

class PromoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const promoSettings = {
      height: 36,
      autoplay: true,
      autoplaySpeed: 8000,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      type: "promo"
    };

    const promoSlides = [
      {
        title: "",
        description: "Free shipping on items over $99!",
        href: "http://www.cnn.com",
        src: ''
      },
      {
        title: "",
        description: "25% off marked items this week only!",
        href: "http://www.cnn.com",
        src: ''
      },
      {
        title: "",
        description: "Sign up for the Reaction card and get 15% off your purchase",
        href: "http://www.cnn.com",
        src: ""
      }
    ];

    return (
      <div className="promo">
        <Carousel slides={promoSlides} settings={promoSettings} />
      </div>
    );
  }
}

export default PromoContainer;
