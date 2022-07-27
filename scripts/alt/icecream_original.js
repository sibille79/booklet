function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    icecream(300, 200, 100, 270, 240, 330, 240, 350, 400, 270, 245);
  }
  
  function icecream(iceX, iceY, iceD, coneX, coneY, coneX1, coneY1, coneX2, coneY2, dripX, dripY, dripD) {
    
    fill(255,192,203)
    ellipse(iceX, iceY, iceD)
    
    fill(255, 204, 0)
    beginShape(TRIANGLES);
    vertex(coneX, coneY);
    vertex(coneX1, coneY1);
    vertex(coneX2, coneY2);
    endShape(CLOSE); 
    
    fill(255,192,203)
    ellipse(dripX, dripY, 8, 10)
  }
