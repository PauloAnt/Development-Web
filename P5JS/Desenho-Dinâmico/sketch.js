let posX = []
let posY = []
let cor
let cod = 1

function setup() {
  createCanvas(1366, 625)
  background("white")
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posX = [0, 0, 0]
  posY = [312, 600, 50]
}

function draw() {
  fill(cor)
  
  for (let i = 0; i < posX.length; i++) {
    posX[i] += random(0, 6)
    posY[i] += random(-6, 6)
    circle(posX[0], posY[0], 50)
    circle(posX[1], posY[1], 50)
    circle(posX[2], posY[2], 50)
    if (posX[0] >= 1366){
        posX = [0, 0, 0]
    }
  }
  if (mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255))
  }
}
