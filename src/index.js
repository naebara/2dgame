import "./index.css";
import { clearCanvas } from "./canvas.js";
import { showBall, updateBallPosition } from "./ball.js";
import { showPaddle, updatePaddlePosition } from "./paddle.js";
import { showLives } from "./lives.js";
import { showScore } from "./score.js";
import { collisionDetection, showBricks } from "./bricks.js";

function show() {
  clearCanvas();
  showBricks();
  showLives();
  showPaddle();
  showScore();
  showBall();
  collisionDetection();
  updatePaddlePosition();
  updateBallPosition();
  requestAnimationFrame(show);
}

show();
