/*Kommenar: Vorlage Daniel Schiffmann um array und Mousefunktionen erweitert.
Frage: Würde man in diesem Fall für den Cursor ebenfalls eine display-function schreiben?
*/

//array: storage for balls
let bubble = [];
let instruction;

//Constructor Instruction
function Instruction(str, x, y) {
  this.pos = createVector(x, y);
  this.str = str;

  this.instruction = function() {
    noFill();
    stroke(255);
    strokeWeight(0.7);
    textSize(18);
    textAlign(CENTER);
    textFont('Courier New')
    text(this.str, this.pos.x, this.pos.y);
  }
}

//Constructor Instruction2
function Instruction2(str, x, y) {
  this.pos = createVector(x, y);
  this.str = str;

  this.instruction2 = function() {
    noFill();
    stroke(255);
    strokeWeight(0.7);
    textSize(18);
    textAlign(CENTER);
    textFont('Courier New')
    text(this.str, this.pos.x, this.pos.y);  
  }
}

//Constructor Bubbles
function Bubble(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;
  
  this.applyForce = function(force)  {
    let f = force.copy();
    f.div(this.mass);
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0); 
  }

  this.display = function(r, g, b) {
     // Pick bubble colors randomly
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    fill(this.r, this.g, this.b, 200);
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }
}

function setup() {
  createCanvas(windowWidth-350, 360);
  instruction = new Instruction('- create soapy bubbles by clicking the mouse over canvas -', width / 2, height / 2);
  instruction2 = new Instruction2('- apply wind by keeping the mouse pressed -', width / 2, (height / 2) + 30);
} 
  
function mousePressed() {
    let b = new Bubble(mouseX, mouseY, random(2, 14));
    bubble.push(b);
}

function draw() {
  background(10);
 
  //Cursor and instruction
  noCursor();
  stroke(255);
  strokeWeight(2);
  noFill();
  ellipse(mouseX, mouseY, 60, 60);
  strokeWeight(2);
  line(mouseX, mouseY+30, mouseX, mouseY+100);

  instruction.instruction();
  instruction2.instruction2();
  
  let wind = createVector(0.1, 0);
  for (let i=0; i<bubble.length; i++) {
  let gravity = createVector(0, -0.00009*bubble[i].mass);
  bubble[i].applyForce(gravity);

  if (mouseIsPressed) {
  bubble[i].applyForce(wind);
  } 
  bubble[i].update();
  bubble[i].display();
  }
}


