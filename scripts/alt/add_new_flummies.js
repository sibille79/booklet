//array: storage for balls
let bubble = [];

function setup() {
  createCanvas(windowWidth-200, 360);
  /*for (let i=0; i<10; i++) {
  particle[i] = new Particle(random(width), 100, random(2, 4));
}*/
  }
  function mousePressed() {
    let b = new Bubble(mouseX, mouseY, random(2, 5));
    bubble.push(b);
  }

function draw() {
  //Hintergrund schwarz
  background(25);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  
  let wind = createVector(0.1, 0);
  
  for (let i=0; i<bubble.length; i++) {
  let gravity = createVector(0, 0.1*bubble[i].mass);
  bubble[i].applyForce(gravity);
 
  if (mouseIsPressed) {
  bubble[i].applyForce(wind);
  } 
  
  bubble[i].update();
  bubble[i].edges();
  bubble[i].display();

}
 }
//Constructor
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
  
  this.edges = function()  {
  if (this.pos.y > height) {
    this.vel.y *=-1;
    this.pos.y = height;
  }
    
    if (this.pos.x > width) {
    this.vel.x *=-1;
    this.pos.x = width;
    }
  }

  this.display = function() {
    fill(r, g, b, 227);
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }
}