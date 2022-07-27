/*Kommentar
Habe noch nicht herausgefunden, warum das Scaling nicht über die Funktion geht?
Font credits: https://www.fontsquirrel.com/fonts/ostrich-sans / designed by	Tyler Finck
*/

let ostrich;
let rectangle;
let img;
let a = 0;
let s = 0;

function preload() {
  img = loadImage('../assets/zurich.jpg');
  ostrich = loadFont('../assets/ostrich-regular.ttf');
}

function Picture(img, x, y, w, h) {
  this.pos = createVector(x, y);
  this.img = img;
  this.w = w;
  this.h = h;
}

function Rectangle(x, y, w, h) {
  this.pos = createVector(x, y);
  this.w = w;
  this.h = h;

  this.display = function() {
    scale(s);
    noFill();
    stroke(85);
    strokeWeight(0.8);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }

  /*this.scaling = function() {
    this.a = this.a + 0.008;
    this.s = cos(this.a) * 2;
    scale(s);
  }*/
}

function setup() {
  createCanvas(windowWidth-350, 360);
  rectMode(CENTER);
  rectangle = new Rectangle(0, 0, 120, 50);
  picture = new Picture(img, 50, 0, 250, 500);
}

function draw() {
  background(225);
  image(img, 50, 0, 250, 500);
  translate(172, (height/2)+14);

  rectangle.display();
  //rectangle.scaling();

  a = a + 0.008;
  s = cos(a) * 2;
  scale(s);
}


