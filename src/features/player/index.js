import React from "react";
import walk from "./images/pl.png";
import { connect } from "react-redux";
import handleMovement from './movement'

function Player(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${walk}')`,
        backgroundPosition: "0 0",
        width: "40px",
        height: "40px"
      }}
    ></div>
  );
}

const mapStateToProps = state => {
  return {
    ...state.player
  };
};

export default connect(mapStateToProps)(handleMovement(Player));
