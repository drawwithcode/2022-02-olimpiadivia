let dots = [];
let colint = 0;
let coloretext = "red"; 
//make a colorlist for random function
const colorList = [
  '#F42f03',
  '#3634d6',
  '#6da062',
  '#f4da5c',
  '#000000',
  '#Ffffff' ];

function setup() {
  createCanvas(windowWidth, windowHeight);

  dots.push (new Pallina (width / 2, height / 2))
}

function draw() {
background("white");
frameRate (30)
 //recall the actions of the class
 for (el of dots) {
  el.move()
  el.show()
}

//define the FIXED dots
for(let x = windowWidth/20; x < windowWidth; x += windowWidth/10)
{ for(let y = windowHeight/16; y < windowHeight; y += windowHeight/8)
//define movement together with the mouse
{force = pow (1-constrain(dist(x,y,mouseX,mouseY)/dist(0, 0, windowWidth, windowHeight), 0, 0.5), 10 + sin (frameCount/50) );

//desgin fixed dots
noStroke ();
fill (colint);
circle(x+(x-mouseX)*force, y+(y-mouseY)*force, (windowWidth * windowHeight)/25000)
}
 }

 //create a centered text with a font
 push()
 let messaggio = "drag your mouse to create worms!";
textFont("Fredoka One");
textAlign(CENTER);
textSize((windowHeight*windowWidth)/25000);
stroke (coloretext);
strokeWeight (1)
noFill();
text(messaggio, width/2, height/1.9);
pop()

}

//the mouse changes text and dots color
function mousePressed() { 
  if (colint === 0) {
    colint = colorList[1];
  } else {
    colint = 0;
  }

  if (coloretext === "red") {
    coloretext = colorList[1];
  } else {
    coloretext = "red";
  }
  }

//introduce function with mouse for the worms
function mouseDragged () {
  dots.push (new Pallina (mouseX, mouseY, (windowWidth*windowHeight)/25000))
}


class Pallina {
  // define constructor 
  constructor (xpos, ypos, radius) {
    //parameters of my instances
    this.x = xpos; 
    this.y = ypos; 
    this.r = radius;
    this.color = random (colorList)
    //direction x and y
    this.dx = 15;
    this.dy= 8;
  }

// Now the methods, the actions my class can perform: I want to translate the dots in diagonal
move () {
  //update position x and y
  this.x += this.dx;
  this.y += this.dy;
  // to change direction for x
  if (this.x > windowWidth || this.x < 0) 
  this.dx = -this.dx
  // to change direction for y 
  if (this.y > windowHeight || this.y < 0)
  this.dy = -this.dy
 }

// i want to visually see the result
show (){
// circle showed taking references from class
noStroke ();
fill (this.color);
ellipse (this.x, this.y, this.r); 

}
}
function windowResized () {
resizeCanvas (windowWidth, windowHeight);
}

