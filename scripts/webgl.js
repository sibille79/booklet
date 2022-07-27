/*Kommenar
Vorlage Daniel Schiffmann um webgl und Fontfunktion erweitert.
Font credits: https://www.fontsquirrel.com/fonts/moonless-sc by Franzi Draws
*/

//array: storage for balls
let coin = [];
let moonless;
function preload() {
  moonless = loadFont('../assets/moonless.otf');
}

//Constructor Bubbles
function Coin(x, y, m) {
  this.pos = createVector(x, y);
  //this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;
  
  this.applyForce = function(force)  {
    let f = force.copy();
    f.div(this.mass);
    this.acc.add(force);
  }

  this.update = function() {
    //this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0); 
  }

  this.move = function() {
    let time = millis();
    rotateX(time / 1000);
    rotateZ(time / 1234);
  }

  this.display = function(r, g, b) {
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    fill(this.r, this.g, this.b, 200);
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }
}

function setup() {
  createCanvas(windowWidth-350, 360, WEBGL);
  textFont(moonless);
  }
  function mousePressed() {
    let b = new Coin(mouseX, mouseY, random(2, 14));
    coin.push(b);
  }

function draw() {
  background(10);
  //Cursor
  noCursor();
  textSize(30);
  text("create cosmic coins by clicking the mouse", mouseX-width/2, mouseY-height/2);
  
  let wind = createVector(0.00001, 0);
  
  for (let i=0; i<coin.length; i++) {
  let gravity = createVector(0, -0.00009*coin[i].mass);
  coin[i].applyForce(gravity);

  if (mouseIsPressed) {
  coin[i].applyForce(wind);
  } 

  coin[i].move();
  coin[i].update();
  coin[i].display();
  }
}


