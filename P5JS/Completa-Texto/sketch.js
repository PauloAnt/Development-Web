function setup() {
    createCanvas(1366, 625)
}

function draw() {
    background("white")
    fill("black")
    textAlign(CENTER, CENTER)
    textSize(128)

    let palavra = "Olá, mundo"
    let quantidade = map(mouseX, 0, width, 1, palavra.length + 1)
    let completa = palavra.substring(0, quantidade)
    text(completa, 683, 312)
    textFont("IMPACT")
}