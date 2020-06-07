var snake1;
var scl = 20;

var food;

function setup() {
  createCanvas(600, 600);
  snake1 = new Snake();
  frameRate(5);
  pickLocation()
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)))
  food.mult(scl)

}


function draw() {
  background(51);

  if (snake1.eat(food)) {
    pickLocation();
  }
  snake1.death();
  snake1.update();
  snake1.show();





  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake1.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake1.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake1.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake1.dir(-1, 0);
  }
}