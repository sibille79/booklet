/*Kommentar
Vorlage von Daniel Schiffmann um Funktionalität und Textfunktionen erweitert.
Die Sketches des Chapter 1 basieren alle auf dieser Vorlage und funktionieren
mit der gleichen Engine.

Frage:
- Notwendigkeit der 2. Constructor Funktion: Wenn ich mit new Instruction
einfach eine weitere Anleitung aufrufen möchte, überschreibt es mir die erste 
Anleitung, daher habe ich eine 2. Constructor Funktion geschrieben. Dies erscheint
mir arg umständlich. Was wäre ein besserer Weg?
*/

let ring;
let instruction;
let instructionRing;

//Constructor Instruction
function Instruction(str, x, y) {

  this.pos = createVector(x, y);
  this.str = str;

  this.instruction = function() {
    noFill();
    stroke(255);
    strokeWeight(0.7);
    textSize(20);
    textFont('Courier New')
    text(this.str, this.pos.x, this.pos.y);
  }

  this.instructionMove = function() {
    this.pos.x += 1.4;
    if (this.pos.x > windowWidth-350) {
    this.pos.x = 0;
    }
  }
}

//Constructor Instruction Change Ring Color
function InstructionRing(str, x, y) {

  this.pos = createVector(x, y);
  this.str = str;

  this.instructionRing = function() {
    noFill();
    stroke(255);
    strokeWeight(0.7);
    textSize(20);
    textFont('Courier New')
    text(this.str, this.pos.x, this.pos.y);
  }

  this.instructionRingMove = function() {
    this.pos.x -= 1.4;
    if (this.pos.x < -450) {
      this.pos.x = windowWidth-350;
    }
  }
}

//Constructor Ring
function Ring(x, y, m) {

  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;
  this.clickColor = color(0, 0, 0);
  
  this.applyForce = function(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acc.add(force);
  }
  
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0); 
  }
  
  this.edges = function()  {
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }
      
    if (this.pos.x > width || this.pos.x < 0) {
      this.vel.x *= -1;
      this.pos.x = width;
    }
  }

  this.display = function() {
    stroke(255);
    strokeWeight(1.8);
    fill(this.clickColor);
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }

  this.clickRing = function() {
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    if (d < (this.mass / 2)*10){
      //console.log("clicked");
      this.clickColor = color(r, g, b);
    } 
  }
}

function setup() {
  createCanvas(windowWidth-350, 360);
  ring = new Ring(550, 50, 5);
  instruction = new Instruction('- apply force by clicking the mouse -', 100, 20);
  instructionRing = new InstructionRing('- change ring color with each click inside -', windowWidth-350, 350);
}

function draw() {
  background(0);
  
  let wind = createVector(0.1, 0);
  let gravity = createVector(0, 0.08*ring.mass);

  if (mouseIsPressed) {
  ring.applyForce(wind);
  ring.clickRing();
  }
  
  ring.applyForce(gravity);
  ring.update();
  ring.edges();
  ring.display();
  instruction.instruction();
  instruction.instructionMove();
  instructionRing.instructionRing();
  instructionRing.instructionRingMove();
}

