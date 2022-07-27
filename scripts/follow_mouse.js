let trail = [];

function setup() {
  createCanvas(300, 300);
  noStroke();
}

function draw() {
  background(50);

  // Add a point to the end of the trail at the mouse position
  trail.push(new p5.Vector(mouseX, mouseY));

  // If the trail gets too long, remove the first (oldest) point
  if (trail.length > 25) {
    trail.shift();
  }

  // Draw the trail
  for (let i = 0; i < trail.length; i++) {
    let p = trail[i];

    // The trail is smaller at the beginning,
    // and larger closer to the mouse
    let size = 50.0 * i / trail.length;
    circle(p.x, p.y, size);
  }
}