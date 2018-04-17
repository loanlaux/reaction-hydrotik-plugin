import React, { Component } from "react";
import PropTypes from "prop-types";

import CarouselItem from "./CarouselItem.jsx";
import Slider from "react-slick";

class Carousel extends Component {
  static defaultProps = {
    slides: [],
    settings: {}
  };

  static propTypes = {
    slides: PropTypes.array.isRequired,
    settings: PropTypes.object
  };

  renderSlides() {
    const { slides, settings } = this.props;

    const carouselStyle = {
      height: settings.height + "px"
    };

    return slides.map((item, i) => (
      <CarouselItem
        key={i}
        item={item}
        type={settings.type}
        style={carouselStyle}
        height={settings.height}
        backgroundColor={settings.backgroundColor}
      />
    ));
  }

  render() {
    const { settings } = this.props;

    const carouselStyle = {
      height: settings.height + "px"
    };

    return (
      <div className="carousel" style={carouselStyle}>
        <Slider {...settings}>
          {this.renderSlides()}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
