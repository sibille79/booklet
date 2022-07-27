/* Kommentar:
In diesem Sketch bin ich noch ein wenig am rumprobieren.
 */
let shape = {
  x: 0,
  y: 0,
  speedX: 100,
  speedY: 50,
}

function preload() {
  img = loadImage('../assets/shape.jpg');
}

function displayShape() {
  beginShape();
vertex(shape.x, shape.y);
vertex (shape.x+45, -2);
vertex (45, 54);
vertex (75, 54);
vertex (75, 115);
vertex (97, 115)
vertex (97, 219);
vertex (35, 219);
vertex (35, 118);
vertex (-2, 118);
vertex (shape.x, shape.y);
endShape();
}

/*function displayShapeSmall() {
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
}*/

function pressedButtonDeconstruct(){
  shape.x += shape.speedX;
  shape.y += shape.y + shape.speedY;
}

function pressedButtonReset(){
  shape.x = 0;
  shape.y = 0;
}

function clearEverything() {
  background(225);
  image(img, 300, 0, 250, 500);
}

function pressedButtonAdd(){
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
  createCanvas(windowWidth-350, 360);
 /* button = createButton("add");
  button.position(100, 340);
  button.style("font-family", );
  button.size(100, 20);
  button.mousePressed(displayShape);*/

  button = createButton("deconstruct");
  button.position(100, 370);
  button.style("font-family", );
  button.size(100, 20);
  button.mousePressed(pressedButtonDeconstruct);

  button = createButton("rebuilt");
  button.position(100, 400);
  button.size(100, 20);
  button.mousePressed(pressedButtonReset);

  /*button = createButton("clear");
  button.position(100, 430);
  button.size(100, 20);
  button.mousePressed(clearEverything);*/
}

function draw() {
  background(225);
  image(img, 300, 0, 250, 500);
  translate(453, 17);
  displayShape();


  /*if (button.mousePressed(pressedButtonAdd) === pressedButtonAdd) {
    displayShapeSmall();
    } */
}


