var headX = 250;
var headY = 100;
var headDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var rightarmX = 300;
var rightarmY = 195;
var rightarmDirection = 4;

var leftarmX = 150;
var leftarmY = 195;
var leftarmDirection = 2;

var leftlegX = 200;
var leftlegY = 335;
var leftlegDirection = 6;
var leftlegDirection2 = 6;

var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(220);
    textSize(textSize)
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-4;
        count = 0;
    }
    text("Good morning!", 10,80);

    // head
    fill(211, 182, 156);
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

    // eyes
    strokeWeight(10);
    fill(0);
    point(200,75);
    point(285,75);

    // nose
    point(245,90);
    
    // mouth
    ellipse(245, 135, 30, 45)

    // hair
    line(130,175,175,50);
    line(325,50,360,175);
    // body
    fill(81, 65, 79);
    rect(200,bodyY,100,150);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }
    // decoration
    fill(120, 81, 169);
    triangle(220,320,250,220,280,320)

    // right arm
    fill(10, 24, 120);
    rect(rightarmX,rightarmY,50,10);
    rightarmX += rightarmDirection;
    if(rightarmX >= 400 || rightarmX <= 100)
    {
        rightarmDirection *= -1;
    }

    // left arm
    rect(150,leftarmY,50,10);
    leftarmY += leftarmDirection;
    if(leftarmY <= 0 || leftarmY >= 450)
    {
        leftarmDirection *= -1;
    }

    // left leg
    rect(leftlegX,leftlegY,10,50);
    leftlegX += leftlegDirection;
    leftlegY += leftlegDirection;
    if(leftlegX >= 400 || leftlegX <= 100)
    {
        leftlegDirection *= -1;
    }
    if(leftlegY >= 0 || leftlegY <= 145)
    {
        leftlegDirection2 *= -1;
    }

    // right leg
    rect(290,335,10,50);
    
    fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Jenn Reynolds",270,500 );


}