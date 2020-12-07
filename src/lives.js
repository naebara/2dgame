import { getCtx, getCanvas } from "./canvas.js";

export { showLives, getLives, setLives };

var lives = 3;

function showLives() {
  getCtx().font = "16px Arial";
  getCtx().fillStyle = "#0095DD";
  getCtx().fillText("Lives: " + lives, getCanvas().width - 65, 20);
}

function getLives() {
  return lives;
}

function setLives(number) {
  lives = number;
}
