//x and y for character
var characterX = 90;
var characterY = 90;

//defining key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//x and y for shapes
var shapeX = 35;
var shapeY = 55;
var shapeX2 = 50;
var shapeY2 = 70;
var shapeX3 = 20;
var shapeY3 = 40;
var shapeX4 = 30;
var shapeY4 = 50;
var shapeX5 = 40;
var shapeY5 = 60;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];
var shapeX2Speeds = [];
var shapeY2Speeds = [];
var shapeX3Speeds = [];
var shapeY3Speeds = [];
var shapeX4Speeds = [];
var shapeY4Speeds = [];
var shapeX5Speeds = [];
var shapeY5Speeds = [];

//creates a shape when the mouse is clicked/moved
var mouseShapeX;
var mouseShapeY;
var mousex = 0;
var mousey = 0;

function setup()
{
  createCanvas(500,500);
  //sets a random speed when first starts
  for(var i = 0; i < 75; i++) {
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
    shapeXs[i] = getRandomNumber(475);
    shapeYs[i] = getRandomNumber(575);
    diameters[i] = getRandomNumber(27);
  }
  createCharacter(179, 344);
}

function draw() {
  background(230, 230, 250);
  stroke(0);
  fill(0);

  //calls createBorders function
  createBorders(9);

  // the exit message
  textSize(20);
  text("EXIT", width - 50, height - 50)

  //createCharacter(179,344)
  drawCharacter();
  characterMovement();

  //a potential enemy 1
  fill(58, 25, 130);
  //draws the shape
  for(var i = 0; i < shapeXs.length; i++) {
    circle(shapeXs[i], shapeYs[i], diameters[i]);
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
    //moves the shape
    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];
    //looks to see if shape has gone outta bounds
    if(shapeXs[i] > width) {
      shapeXs[i] = 0;
    }
    if(shapeXs[i] < 0) {
      shapeXs[i] = width;
    }
    if(shapeYs[i] > height) {
      shapeYs[i] = 0;
    }
    if(shapeYs[i] < 0) {
      shapeYs[i] = height;
    }
  }

  //a potential enemy 2
       fill(13, 0, 255);
    // draw the shape
     circle(shapeX2, shapeY2, 100);
    // get a random speed when the it first starts
      shapeX2Speeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      shapeY2Speeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    // move the shape
    shapeX2 += shapeX2Speeds;
    shapeY2 += shapeY2Speeds;
    // check to see if the shape has gone out of bounds
    if(shapeX2 > width) {
        shapeX2 = 1;
    }
    if(shapeX2 < 1) {
        shapeX2 = width;
    }
    if(shapeY2 > height) {
        shapeY2 = 1;
    }
    if(shapeY2 < 1) {
        shapeY2 = height;
    }

      //a potential enemy 3
      fill(196, 255, 46);
      // draw the shape
      circle(shapeX3, shapeY3, 50);
       // get a random speed when the it first starts
       shapeX3Speeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 3);
       shapeY3Speeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 3);
      // move the shape
      shapeX3 += shapeX3Speeds;
      shapeY3 += shapeY3Speeds;
      // check to see if the shape has gone out of bounds
      if(shapeX3 > width) {
          shapeX3 = 4;
      }
      if(shapeX3 < 4) {
          shapeX3 = width;
      }
      if(shapeY3 > height) {
          shapeY3 = 4;
      }
      if(shapeY3 < 4) {
          shapeY3 = height;
      }

      //a potential enemy 4
      fill(15,208,242);
      // draw the shape
      circle(shapeX4, shapeY4, 75);
       // get a random speed when the it first starts
       shapeX4Speeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 4);
       shapeY4Speeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 4);
       // move the shape
      shapeX4 += shapeX4Speeds;
      shapeY4 += shapeY4Speeds;
      // check to see if the shape has gone out of bounds
      if(shapeX4 > width) {
          shapeX4 = 2;
      }
      if(shapeX4 < 2) {
          shapeX4 = width;
      }
      if(shapeY4 > height) {
          shapeY4 = 2;
      }
      if(shapeY4 < 2) {
          shapeY4 = height;
      }

      //a potential enemy 5
      fill(242,60,15);
      // draw the shape
      circle(shapeX5, shapeY5, 60);
       // get a random speed when the it first starts
       shapeX5Speeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);
       shapeY5Speeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);
           // move the shape
      shapeX5 += shapeX5Speeds;
      shapeY5 += shapeY5Speeds;
      // check to see if the shape has gone out of bounds
      if(shapeX5 > width) {
          shapeX5 = 3;
      }
      if(shapeX5 < 3) {
          shapeX5 = width;
      }
      if(shapeY5 > height) {
          shapeY5 = 3;
      }
      if(shapeY5 < 3) {
          shapeY5 = height;
      }

  //checks to see if character has exited
  if(characterX > width && characterY > width - 50) {
    fill(2);
    stroke(6);
    textSize(25);
    text("You Win!", width / 2 - 50, height / 2 - 50);
  }

  //creates mouse clicked shape
  fill(232, 224, 70);
  ellipse(mouseShapeX, mouseShapeY, 10, 55);
}

function characterMovement() {
  if (keyIsDown(w)) {
    characterY -= 15;
  }
  if(keyIsDown(s)) {
    characterY += 15;
  }
  if(keyIsDown(a)) {
    characterX -= 15;
    console.log("movement: " + characterX);
  }
  if(keyIsDown(d)) {
    characterX += 15;
  }
}

function createCharacter(x, y) {
  characterX = x;
  characterY = y;
}

function drawCharacter() {
  fill(252, 46, 255);
  circle(characterX, characterY, 30);
}

function createBorders(thickness) {
  rect(0, 0, width, thickness);
  rect(0, 0, thickness, height);
  rect(0, height - thickness, width, thickness);
  rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}

function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 15;
}