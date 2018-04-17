import React, { Component } from "react";
import PropTypes from "prop-types";

class CarouselItem extends Component {
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  }

  static defaultProps = {
    item: {
      title: "",
      description: "",
      href: "",
      src: ""
    },
    type: "",
    height: 600,
    backgroundColor: ""
  };

  static propTypes = {
    item: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    height: PropTypes.number
  };

  onItemClick = (e) => {
    e.preventDefault();
    location.replace(this.props.item.href);
  };

  renderContents(type) {
    const { cta, description, href, title } = this.props.item;

    if (type === "hero") {
      return (
        <div className="carouselitem__link">
          <div className="carouselitem__link__content">
            <h2 className="carouselitem__link__content__heading">{title}</h2>
            <p>{description}</p>
            {cta && href &&
              <a
                type="button"
                className="btn btn-hero"
                href={href}
              >
                {cta}
              </a>
            }
          </div>
        </div>
      );
    }

    return (
      <div onClick={this.onItemClick} className="carouselitem__link">
        <p className="carouselitem__link__promo">{this.props.item.description}</p>
      </div>
    );
  }

  render() {
    const { height, type, item, backgroundColor} = this.props;

    const divStyle = {
      height: height + "px"
    };

    if (item.hasOwnProperty("src") && item.src !== "") {
      divStyle.backgroundImage = 'url(' + this.props.item.src + ')';
    }

    if (backgroundColor !== "") {
      divStyle.backgroundColor = backgroundColor;
    }

    return (
      <div className="carouselitem" style={divStyle}>
        {this.renderContents(type)}
      </div>
    );
  }
}

export default CarouselItem;
