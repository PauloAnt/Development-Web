let posY
var info
function setup() {
    createCanvas(1366, 625)
    posY = 150
}
function draw() {
    background("Lightblue")
    noStroke()

    fill("yellow")
    circle(683, posY, 300)

    if(mouseIsPressed){
        posY += 1
    }

    if(posY > 480){
        background("black")
        info = document.getElementById("info")
        info.innerHTML = "Boa noite!"
    }

    fill("blue")
    rect(0, 300, 1366, 300)

    fill("khaki")
    rect(0, 450, 1366, 200)
}