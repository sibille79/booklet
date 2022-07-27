/* 
Font credits: https://www.fontsquirrel.com/fonts/ostrich-sans / designed by	Tyler Finck
 */
let img;
let angle = 0;
let ostrich;

function preload() {
  img = loadImage('../assets/zurich.jpg');
  img1 = loadImage("../assets/shape.jpg");
  ostrich = loadFont('../assets/ostrich-regular.ttf');
}

/*function changeDirection() {
    angle -= 0.5;
}*/

function setup() {
  createCanvas(windowWidth-350, 360, WEBGL);
  textFont(ostrich);

  if ((mouseX == texture(img)) && (mouseY == texture(img))) {
    angle -= 5;
    }
}

function draw() {
  background(225);
  fill(255);
  stroke(40);

  push();
  translate(-180, 20);
  rotateX(angle * 1);
  rotateY(angle * 0.5);
  rotateZ(angle * 0.02);
  noStroke();
  texture(img);
  box(150, 150);
  angle += 0.008;
  pop();

  push();
  translate(280, 20);
  rotateX(angle * 1);
  rotateY(angle * 0.5);
  rotateZ(angle * 0.02);
  noStroke();
  texture(img1);
  box(150, 150);
  angle += 0.0008;
  pop();

 

}



