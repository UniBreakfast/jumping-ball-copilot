const ballDiv = document.querySelector('.ball');

const ball = {
  x: innerWidth / 2 - 50,
  y: 400,
  vx: 0,
  vy: 0,
  radius: 100,
  acceleration: -0.0001,
};

const ground = {
  x: 0,
  y: 0,
}

const log = [];

let lastTimestamp = 0;



requestAnimationFrame(render);

function render(timestamp) {
  const deltaTime = timestamp - lastTimestamp;

  lastTimestamp = timestamp;

  ball.vy += ball.acceleration * deltaTime;

  ball.x += ball.vx * deltaTime;
  ball.y += ball.vy * deltaTime;

  if (ball.y - ball.radius < ground.y) {
    ball.y = ground.y + ball.radius;
    ball.vy = -ball.vy * 0.8;
  }

  ballDiv.style.left = ball.x + 'px';
  ballDiv.style.bottom = ball.y - ball.radius + 'px';

  logY();

  requestAnimationFrame(render);

}

function logY() {
  const {y, vy} = ball;

  if (log.length < 1000) {
    log.push( {y, vy} );
  }
}
