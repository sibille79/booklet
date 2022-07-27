//array: storage for balls
let balls = [];

function setup() {
  createCanvas(windowWidth-200, 360);
  //loop: creating balls (adding one ball at a time until end of loop - in this case 10)
  for (let i=0; i<5; i++) {
  balls[i] = new Balls(random(width), 50, random(2, 5));
}
  }

function draw() {
  background(0);
  
 
  let wind = createVector(0.1, 0);
  
   for (let i=0; i<balls.length; i++) {
  let gravity = createVector(0, 0.1*balls[i].mass);
  balls[i].applyForce(gravity);
 
  if (mouseIsPressed) {
  balls[i].applyForce(wind);
  } 
  
  balls[i].update();
  balls[i].edges();
  balls[i].display();

}
 }
//Constructor
function Balls(x, y, m) {

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
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }
}