// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeX2 = 20;
var shapeY2 = 40;
var shapeXSpeed;
var shapeYSpeed;
var shapeX2Speed;
var shapeY2Speed;
var shapeX3 = 40;
var shapeY3 = 60;
var shapeX3Speed;
var shapeY3Speed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(600, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(250,350);
}

function draw()
{
    background(115,79,150);
    stroke(0);
    fill(0);
    
    // call createBorders function
    createBorders(10);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // potential enemy
    fill(207,12,12);
    // draw the shape
    circle(shapeX, shapeY, 50);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

         // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 2;
    }
    if(shapeX < 2)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 2;
    }
    if(shapeY < 2)
    {
        shapeY = height;
    }

    //potential enemy 2
     fill(38,176,233);
     // draw the shape
     circle(shapeX2, shapeY2, 25);
 
      // get a random speed when the it first starts
      shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
      shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);

    // move the shape
    shapeX2 += shapeX2Speed;
    shapeY2 += shapeY2Speed;
    // check to see if the shape has gone out of bounds
    if(shapeX2 > width)
    {
        shapeX2 = 0;
    }
    if(shapeX2 < 0)
    {
        shapeX2 = width;
    }
    if(shapeY2 > height)
    {
        shapeY2 = 0;
    }
    if(shapeY2 < 0)
    {
        shapeY2 = height;
    }

    //potential enemy 3
    fill(59,255,0);
    circle(shapeX3, shapeY3, 40);
        shapeX3Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
        shapeY3Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);

    shapeX3 += shapeX3Speed;
    shapeY3 += shapeY3Speed;
    if(shapeX3 > width)
    {
        shapeX3 = 1;
    }
    if(shapeX3 < 1)
    {
        shapeX3 = width;
    }
    if(shapeY3 > height)
    {
        shapeY3 = 1;
    }
    if(shapeY3 < 1)
    {
        shapeY3 = height;
    }

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 40);
}

function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 2;   
    }
    if (keyIsDown(LEFT_ARROW)) {
        characterX -= 2;
    } 
    else if (keyIsDown(RIGHT_ARROW)) {
        characterX += 2;
    }
    else if (keyIsDown(UP_ARROW)) {
        characterY -= 2;
    }
    else if (keyIsDown(DOWN_ARROW)) {
        characterY += 2;
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharacter()
{
    fill(250,255,0);
    circle(characterX,characterY,25);
}
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function mousePressed()
{
        mousex = mouseX
        mousey = mouseY
}
*/
/*
function keyPressed()
{
    if (keyCode === LEFT_ARROW) {
        characterX -= 45;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 45;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 45;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 45;
    }
  }
*/
/*
function mouseMoved()
{
    mousex = mouseX
    mousey = mouseY
}
*/
