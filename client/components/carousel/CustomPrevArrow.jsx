import React, { Component, PropTypes } from "react";

class CustomPrevArrow extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    const { className, dataRole, onClick } = this.props

    return (
      <div
        className={className}
        data-role={dataRole}
        onClick={onClick}
        style={{display: 'block'}}
      />
    );
  }
}

export default CustomPrevArrow;
