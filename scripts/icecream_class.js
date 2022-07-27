/*Kommentar: 
Sound Funktion funktioniert noch nicht. Es hat wohl etwas mit dem automatischen Abspielen zu tun,
aber das habe noch nicht ganz verstanden. 
Sound credits: https://freesound.org/s/155457/by Zwecker
Die Slider habe ich auskommentiert, weil der Sketch sie nicht unbedingt benötigt. Werde mir noch einen sinnvolleren
Einsatz für sie überlegen als die Hintergrundfarbe.
*/

/*let mySound;
function preload() {
  soundFormats('mp3', "ogg", "wav");
  mySound = loadSound('../assets/drips.mp3');
}*/

/*let rSlider;
let gSlider;
let bSlider;*/
let icecream = [];

class Icecream {
  constructor() {
  this.iceX = 300
  this.iceY = 200
  this.iceDW = 100
  this.iceDH = 100
  this.coneX = 270
  this.coneY = 240
  this.coneX1 = 330
  this.coneY1 = 240
  this.coneX2 = 350
  this.coneY2 = 400
  this.dripX = 265
  this.dripY = 200
  this.meltX = 0
  this.meltY = height
  this.meltWidth = width
  this.meltHeight = -2
  }

  //Methoden initiieren
  show() {
  //Eiskugel
  fill(255,192,203)
  ellipse(this.iceX, this.iceY, this.iceDW, this.iceDH)

  //Eiswaffel
  fill(255, 204, 0)
  beginShape(TRIANGLES);
  vertex(this.coneX, this.coneY);
  vertex(this.coneX1, this.coneY1);
  vertex(this.coneX2, this.coneY2);
  endShape(CLOSE); 

  //Eistropfen
  fill(255,192,203)
  ellipse(this.dripX, this.dripY, 8, 10)

  //geschmolzenes Eis
  fill(255,192,203)
  rect(this.meltX, this.meltY, this.meltWidth, this.meltHeight)
  } 

  move() {
    this.dripY += 1.4;
  }

  repeat() {
    if (this.dripY >= height){
    this.dripY = 200 + 25;
    }
  }

  meltdown() {
    if (this.dripY >= this.meltHeight){
    this.meltHeight -= 0.01;
    this.iceDH -= 0.014;
    this.iceDW -= 0.01;
    this.iceY += 0.008;
    this.dripX += 0.005;
    }
  }
  
  meltingstopdrip() {
    if (this.iceDH < 39) {
    this.dripY = height;
    }
  }

  meltingstopice() {
    if (this.iceDH === this.coneY) {
    this.meltY = height/2;
    }
  }
}
  
  function setup() {
  createCanvas(windowWidth-350, 360);
  

  /*// create sliders
   rSlider = createSlider(0, 255, 100);
   rSlider.position(20, 370);
   gSlider = createSlider(0, 255, 0);
   gSlider.position(20, 400);
   bSlider = createSlider(0, 255, 255);
   bSlider.position(20, 430);*/
  
  //neue Instanz (Icecream) wird hinzugefügt
    for (let i = 0; i < 1; i += 1) {
    icecream.push(new Icecream())
    }
  }
  
  function draw() {
    /*let r = rSlider.value();
    let g = gSlider.value();
    let b = bSlider.value();*/

    background(240);
    stroke(255);
    strokeWeight(1.5)
    
    textSize(22);
    text('- turn on your volume and chill -', width / 2, (height / 2)+20);

    //Methode aufrufen
    for (let i = 0; i < icecream.length; i += 1) {
    icecream[i].show();
    icecream[i].move();
    icecream[i].repeat();
    icecream[i].meltdown();
    icecream[i].meltingstopdrip();
    icecream[i].meltingstopice();
    }
    //mySound.play();
  }







  
  
  