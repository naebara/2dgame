import { getCtx, getCanvas } from "./canvas.js";
export {
  showPaddle,
  updatePaddlePosition,
  getPaddleWidth,
  getPaddleX,
  setPaddleX,
};

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (getCanvas().width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

function showPaddle() {
  getCtx().beginPath();
  getCtx().rect(
    paddleX,
    getCanvas().height - paddleHeight,
    paddleWidth,
    paddleHeight
  );
  getCtx().fillStyle = "#0095DD";
  getCtx().fill();
  getCtx().closePath();
}

function updatePaddlePosition() {
  if (rightPressed && paddleX < getCanvas().width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }
}

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - getCanvas().offsetLeft;
  if (relativeX > 0 && relativeX < getCanvas().width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function getPaddleHeight() {
  return paddleHeight;
}

function setPaddleHeight(number) {
  paddleHeight = number;
}

function getPaddleWidth() {
  return paddleWidth;
}

function setPaddleWidth(number) {
  paddleWidth = number;
}

function getPaddleX() {
  return paddleX;
}

function setPaddleX(number) {
  paddleX = number;
}
