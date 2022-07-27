/*function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle/2;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}*/

function star() {
  beginShape();
    beginShape();
  vertex (-47, 100);
  vertex (-30, 100);
  vertex (-30, 154);
  vertex (-1, 154);
  vertex (-1, 237)
  vertex (36, 237);
  vertex (36, 250);
  vertex (-30, 250);
  vertex (-30, 180);
  vertex (-47, 180);
  endShape();
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0);

  push();
  translate(width * 0.25, height * 0.25);
  rotate(frameCount / -100.0);
  fill(0);
  stroke(255);
  star(0, 0, 5, 70, 5);
  pop();
  
  push();
  translate(width * 0.75, height * 0.25);
  rotate(frameCount / 100.0);
  fill(238, 238, 63)
  noStroke();
  star(0, 0, 5, 70, 6);
  pop();
  
  push();
  translate(width * 0.25, height * 0.75);
  rotate(frameCount / -100.0);
  fill(238, 63, 81);
  noStroke();
  star(0, 0, 5, 70, 7);
  pop();
  
  push();
  translate(width * 0.75, height * 0.75);
  rotate(frameCount / 100.0);
  fill(73, 79, 252);
  noStroke();
  star(0, 0, 5, 70, 8);
  pop();
}

