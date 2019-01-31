// Purple rain
// rain - (138, 43, 226)
// background - (230, 230, 250)


let drops = [];


function setup() {
  createCanvas(640, 660);
  for(let i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for(let i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
