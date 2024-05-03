let r0 = 0;
let g0 = 120;
let b0 = 255;
let cx = 300; 
let cy = 180;
let n = 4;
let a = 40; //amount of cloud 0-200

function setup() {
  createCanvas(windowWidth, windowHeight); // Set canvas size to fill the entire window
  colorMode(RGB);
}

function draw() {
  background(r0, b0, g0);
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let t = noise(x / cx, y / cy);
      if (t < 1 - a / 100) {
        t = pow(t, n) / pow(1 - a / 100, n - 1);
      } else {
        t = 1 - pow(1 - t, n) / pow(a / 100, n - 1);
      }
      let r = r0 * (1 - t) + 255 * t;
      let g = g0 * (1 - t) + 255 * t;
      let b = b0 * (1 - t) + 255 * t;
      let col = color(r, g, b);
      set(x, y, col);
    }
  }
  updatePixels();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize canvas when window size changes
}
