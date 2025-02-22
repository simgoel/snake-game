// 1. Press Play at the top
// 2. Click on canvas (before snake hit the wall)
// 3. Use key arrows to move snake

let mySound;

function preload() {
  soundFormats('mp3','ogg');
  mySound = loadSound('song.mp3');
}

var s;
var scl = 30;
var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10); 
	food = createVector(random(width), random(height));
	pickLocation(); 
  
  console.log(s);

}


function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);

}

function draw() {
  background(249, 220, 252);
  
  //if snake eat food, pick location
  if (s.eat(food)) {
  	pickLocation();
  }
  s.death();
  s.update();
  s.show();
	
  //drawing snake food
  fill(237, 5, 132);
  rect(food.x, food.y, scl, scl);
  
  if(s.x > width || s.x < 0 || s.y > height || s.y < 0){
    s.death();
  }
  
  
  

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1); //moves 0 along x and -1 (up) along y axis
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}

function mousePressed(){
  console.log(mySound.file)
  if(mySound.isPlaying()){
    mySound.stop();
  }
  else{
    mySound.play();
  }
}
