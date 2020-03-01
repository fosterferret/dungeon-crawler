import store from "../../config/store";
import { SPRITE_SIZE } from "../../config/constants";

export default function handleMovement(player) {
  function getNewPosition(direction) {
    const oldPos = store.getState().player.position;
    switch (direction) {
      case "WEST":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "EAST":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "NORTH":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case "SOUTH":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
      default:
        console.log(oldPos);
    }
  }

  function directionMove(direction) {
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: getNewPosition(direction)
      }
    });
  }

  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return directionMove("WEST");
      case 38:
        return directionMove("NORTH");
      case 39:
        return directionMove("EAST");
      case 40:
        return directionMove("SOUTH");
      default:
        console.log(e.keyCode);
    }
  }

  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });

  return player;
}
