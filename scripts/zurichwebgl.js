/*
Sorry für das Code Chaos!!! Aber da bin ich noch dran.
Ich habe versucht, den Code so umzuschreiben, dass der Text an sich explodiert (siehe Sketch zurichwebgl_text).
Bisher noch ohne erfolg, aber da bin ich noch dran.
Aus diesem Grund habe ich es mir erstmal einfach gemacht und das "Field" einfach versteckt. 
Font credits: https://www.fontsquirrel.com/fonts/ostrich-sans / designed by	Tyler Finck

 */
let img;
let angle = 0;
let field;
let button;
let letters = [];
let ostrich;


function preload() {
  img = loadImage('../assets/zurich.jpg');
  img1 = loadImage("../assets/shape.jpg");
  ostrich = loadFont('../assets/ostrich-regular.ttf');
}

function explodeText() {
  textSize(24);
  let text = field.value();

  let currentPos = 20;
  // makes an object for each character in the text field
  for (let i = 0; i < text.length; i++) {
    let letterObj = {
      letter: text.charAt(i),
      ypos: 10,
      xpos: currentPos,
      xdir: random(-1, 1),
      ydir: random(-0.5, 2)
    };
    letters.push(letterObj);
    currentPos += textWidth(text.charAt(i));
  }
}

function setup() {
  createCanvas(windowWidth-350, 360, WEBGL);
  textFont(ostrich);
  field = createInput("Chapter 2");
  button = createButton("Curious? Hit the Button");
  button.position(width/2, 340);
  button.mousePressed(explodeText);
}

function draw() {
  background(225);
  fill(255);
  stroke(40);
  textSize(20);
  text("Chapter 2", 21, 10);

  push();
  translate(-200, 20);
  rotateX(angle * 1);
  rotateY(angle * 0.5);
  rotateZ(angle * 0.02);
  noStroke();
  texture(img);
  box(150, 150);
  angle += 0.008;
  pop();

  push();
  // loop over each letter
  for (let i = 0; i < letters.length; i++) {
    text(letters[i].letter, letters[i].xpos, 
      letters[i].ypos);
    letters[i].xpos += letters[i].xdir;
    letters[i].ypos += letters[i].ydir;
  }
  pop();

field.hide();

  push();
  translate(300, 20);
  rotateX(angle * 1);
  rotateY(angle * 0.5);
  rotateZ(angle * 0.02);
  noStroke();
  texture(img1);
  box(150, 150);
  angle += 0.0008;
  pop();
}


