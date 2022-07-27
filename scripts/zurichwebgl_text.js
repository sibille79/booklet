let button;

let chapter;
let letters = []; // array to store letter objects

//Constructor Instruction
function Chapter(str, x, y) {
    this.pos = createVector(x, y);
    this.str = str;
  
    this.display = function() {
      noFill();
      stroke(255);
      strokeWeight(0.7);
      textSize(18);
      textAlign(CENTER);
      textFont('Courier New')
      text(this.str, this.pos.x, this.pos.y);
    }
  
    this.explodeText = function() {
    textSize(24);
    let str = this.str;
    let currentPos = random(width/2);
    // make an object for each character in
    // the text field
    for (let i = 0; i < this.text.length; i++) {
      let letterObj = {
        letter: this.text.charAt(i),
        ypos: 50,
        xpos: this.currentPos,
        xdir: random(-1, 1),
        ydir: random(-0.5, 2)
      };
      letters.push(letterObj);
      currentPos += textWidth(text.charAt(i));
    }
  }
}

function setup() {
createCanvas(windowWidth-350, 360);
chapter = new Chapter('Chapter 2', width / 2, height / 2);
button = createButton("Explode!!");
button.mousePressed(chapter.explodeText);


}

function draw() {
  background(50);
  chapter.display();
  chapter.explodeText();
  text("Chapter 2", width/2, height/2)
  // loop over each letter
  for (let i = 0; i < letters.length; i++) {
    text(letters[i].letter, letters[i].xpos, 
      letters[i].ypos);
    letters[i].xpos += letters[i].xdir;
    letters[i].ypos += letters[i].ydir;
  }
}

