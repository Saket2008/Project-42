var hr, min, sec;
var add, hm, time;

function setup() 
{
  createCanvas(400,400);
}

function draw() {
  background(0);
  
  hr = hour();
  min = minute();
  sec = second();

  if (hr < 12)
  {
    time = "am";
  }
  else
  {
    time = "pm";
  }

  switch(hr % 12)
  {
    case 0: hm = 0;
    break;
    case 1: hm = 5;
    break;
    case 2: hm = 10;
    break;
    case 3: hm = 15;
    break;
    case 4: hm = 20;
    break;
    case 5: hm = 25;
    break;
    case 6: hm = 30;
    break;
    case 7: hm = 35;
    break;
    case 8: hm = 40;
    break;
    case 9: hm = 45;
    break;
    case 10: hm = 50;
    break;
    case 11: hm = 55;
    break;
    default: hm = 0;
  }

  if(min === 0)
  {
    add = 0;
  }
  else if (min < 12)
  {
    add = 1;
  }
  else if (min < 24)
  {
    add = 2;
  }
  else if (min < 36)
  {
    add = 3;
  }
  else if (min < 48)
  {
    add = 4;
  }

  angleMode(DEGREES);
  hrAng = map(60, 0, 60, 0, 360);
  minAng = map(min, 0, 60, 0, 360);
  secAng = map(sec, 0, 60, 0, 360);

  camera.position.y = 0;
  camera.position.x = 0;
  
  noFill();
  stroke(255, 0, 0)
  strokeWeight(7);
  arc(0, 0, 360, 360, -90, secAng - 90);

  stroke(255, 100, 0)
  strokeWeight(7);
  arc(0, 0, 340, 340, -90, minAng - 90);

  stroke(255, 255, 0)
  strokeWeight(7);
  arc(0, 0, 320, 320, -90, hrAng - 90);

  fill("white");
  strokeWeight(0);
  textSize(30);
  text(12, -17, -125);
  text(6, -9, 145);
  text(3, 130, 10);
  text(9, -145, 10);
  text(1, 55, -105);
  text(2, 110, -60);
  text(4, 110, 80);
  text(5, 60, 125);
  text(7, -75, 125);
  text(8, -125, 80);
  text(10, -130, -55);
  text(11, -80, -105);
  
  push()
  rotate(secAng);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 0, -140);
  pop()

  push()
  rotate(minAng);
  stroke(255, 100, 0);
  strokeWeight(7);
  line(0, 0, 0, -130);
  pop()

  push()
  rotate(hrAng);
  stroke(255, 255, 0);
  strokeWeight(7);
  line(0, 0, 0, -90);
  pop()

  fill("white");
  textSize(25);
  strokeWeight(0);

  if (hr === 12)
  {
    text(hr + ":" + min + ":" + sec + " " + time, -60, 40)
  }
  else
  {
    text(hr % 12 + ":" + min + ":" + sec + " " + time, -60, 40)
  }

  drawSprites();
}