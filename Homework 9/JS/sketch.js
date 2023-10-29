sketch.js
function setup()
{
    createCanvas(500,600);
}
function draw()
{
    background(220);
    textSize(22);
    text("Good Night!", 10,80);

    //head
    fill(211, 182, 156);
    circle(250,100,175);

    //eyes
    strokeWeight(11);
    fill(0);
    point(200,75);
    point(285,75);

    //nose
    point(245,90);

    //mouth
    ellipse(245,135,30,45);

    //hair
    line(130,175,175,50);
    line(325,50,360,175);

    //body
    fill(81, 65, 79);
    rect(200,185,100,150);

    //decoration
    fill(120, 81, 169);
    triangle(220,320,250,220,280,320);

    //right arm
    fill(10, 24, 120);
    rect(300,195,50,10);

    //left arm
    rect(150,195,50,10);

    //left leg
    rect(200,335,10,50);

    //right leg
    rect(290,335,10,50);

    fill(120);
    textSize(22);
    text("Jenn Reynolds",270,500 );

}