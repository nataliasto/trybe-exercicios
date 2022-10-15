import React from 'react';
import '../styles/box.css';
import Context from '../context/Context'

class ColorBox extends React.Component {
  render() {
    const { actualBtnBgColor, handleClick } = this.context;
    return(
      <button
        type="button"
        className="box"
        style={ { backgroundColor: actualBtnBgColor } }
        onClick={handleClick}
      >
        Click me to change my color!
      </button>
    )
  }
}

ColorBox.contextType = Context;

export default ColorBox;
