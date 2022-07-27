let rSlider;
let gSlider;
let bSlider;

function setup() {
  createCanvas(2000, 500);
  textSize(15);
  noStroke();

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 300);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 330);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 360);
}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);
}