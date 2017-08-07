// Code Product Component Here
import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <p>Hi</p>
    )
  }
}

Product.defaultProps = { hasWatermark: false }
Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    if((props.weight < 80) || (props.weight > 300)) {
      return new Error("Weight out of range")
    }
    if(typeof props.weight == 'undefined') {
      return new Error("Weight is required")
    }
    if(typeof props.weight != 'number'){
      return new Error("Weight must be present ")
    }
  }
}
