import React, { Component } from "react";
import "./Die.css";
import '@fortawesome/fontawesome-free/css/all.css'

class Die extends Component {

  static defaultProps = {
    numberNames : ['one', 'two', 'three', 'four', 'five', 'six']
  }

  render() {
    const {locked, val, idx, numberNames, handleClick, disabled} = this.props;
    return (
      <i
        className={`Die fa-5x fas fa-dice-${numberNames[val - 1]} ${locked && 'Die-locked'}`}
        onClick={ () => {handleClick(idx)}}
        disabled = {disabled}
      >
      </i>
    );
  }
}

export default Die;
