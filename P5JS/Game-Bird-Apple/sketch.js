var p1, p2, p3
var maca, posMX, posMY
let cont
let tempo
let mostrarBotao = false
let posX, posY

let up, down, left, right

let objeto1, objeto2, objeto3, objeto4
let botao

function setup() {
    createCanvas(windowWidth, windowHeight)
    posX = 0
    posY = height / 2
    posMX = random(0, width)
    posMY = random(0, height)
    cont = 0
    up = down = left = right = false
    mostrarBotao = false
    botao = createButton("Reiniciar")
    botao.position(width / 2 - 90, height/2 + 150)

    // Estilizando botão
    botao.style('background-color', '#4CAF50')
    botao.style('color', 'white')
    botao.style('font-size', '24px')
    botao.style('padding', '20px 34px')
    botao.style('border', 'none')
    botao.style('border-radius', '20px')
    botao.style('cursor', 'pointer')
    botao.mousePressed(reiniciarJogo)
}

// Carregamento dos arquivos
function preload() {
    p1 = loadImage("/Game/p1.png")
    p2 = loadImage("/Game/p2.png")
    p3 = loadImage("/Game/p3.png")
    maca = loadImage("/Game/maca.png")
    plim = loadSound("/Game/plim.mp3")
}

function draw() {
    noStroke()
    background(216, 233, 243)
    image(maca, posMX, posMY, 50, 50, 0, 0, 600, 600)
    push()
    fill("black")
    textSize(32)
    text("Pontos: " + cont, 50, 50)
    pop()
    
    fill("brown")
    objeto1 = rect(200, 200, 300, 50)
    objeto2 = rect(200, 450, 300, 50)
    objeto3 = rect(800, 200, 50, 300)
    objeto4 = rect(1100, 200, 50, 300)

    // Movimentação do pássaro
    if (up) {
        tempo = millis() % 1000
        posY -= 10
    } else if (down) {
        tempo = millis() % 1000
        posY += 10
    } else if (left) {
        tempo = millis() % 1000
        posX -= 10
    } else if (right) {
        tempo = millis() % 1000
        posX += 10
    }
    // Animação do pássaro
    let frameToDraw
    if (tempo > 400 && tempo <= 700) {
        frameToDraw = p2
    } else if (tempo > 700) {
        frameToDraw = p3
    } else {
        frameToDraw = p1
    }
    
    image(frameToDraw, posX, posY, 100, 100, 0, 0, 200, 200)
    verificarColisao()
    if (mostrarBotao) {
        botao.show();
      } else {
        botao.hide();
      }
}

// A maçã não nascer dentro do objeto
function macaSobreposta(){
    if (posMX + 50 >= 200 && posMX <= 200 + 300 && posMY + 100 >= 200 + 50 && posMY <= 200 + 50 ||
        posMX + 100 >= 200 && posMX <= 200 + 300 && posMY + 100 >= 450 && posMY <= 450 + 50 || 
        posMX + 100 >= 800 && posMX <= 800 + 50 && posMY + 100 >= 200 && posMY <= 200 + 300 || 
        posMX + 100 >= 1100 && posMX <= 1100 + 50 && posMY + 100 >= 200 && posMY <= 200 + 300){
        return true
    }
    else{
        return false
    }
}

// Colisão do pássaro com os objetos
function verificarColisao(){
    if (posX + 100 >= posMX && posX <= posMX + 50 && posY <= posMY + 50 && posY + 100 >= posMY) {
        cont += 1
        plim.play()
        posMX = random(0, width);
        posMY = random(0, height);
        while(macaSobreposta(posMX, posMY)){
            posMX = random(0, width)
            posMY = random(0, height)
        }
  }
    if (posX + 100 >= 200 && posX <= 200 + 300 && posY + 100 >= 200 + 50 && posY <= 200 + 50){
        push()
        fill("black")
        textAlign(CENTER, CENTER)
        textSize(64)
        text("Você perdeu!", width / 2, height / 2)
        noLoop()
        pop()
        mostrarBotao = true
        }
    if (posX + 100 >= 200 && posX <= 200 + 300 && posY + 100 >= 450 && posY <= 450 + 50){
        push()
        fill("black")
        textAlign(CENTER, CENTER)
        textSize(64)
        text("Você perdeu!", width / 2, height / 2)
        noLoop()
        pop()
        mostrarBotao = true
        }
    if (posX + 100 >= 800 && posX <= 800 + 50 && posY + 100 >= 200 && posY <= 200 + 300){
        push()
        fill("black")
        textAlign(CENTER, CENTER)
        textSize(64)
        text("Você perdeu!", width / 2, height / 2)
        noLoop()
        pop()
        mostrarBotao = true
        }
    if (posX + 100 >= 1100 && posX <= 1100 + 50 && posY + 100 >= 200 && posY <= 200 + 300){
        push()
        fill("black")
        textAlign(CENTER, CENTER)
        textSize(64)
        text("Você perdeu!", width / 2, height / 2)
        noLoop()
        pop()
        mostrarBotao = true
        }
}
function reiniciarJogo(){
    window.location.reload()
}
// Movimentação do passáro
function keyPressed() {
    if (keyCode === UP_ARROW) {
        up = true
    } else if (keyCode === DOWN_ARROW) {
        down = true
    } else if (keyCode === LEFT_ARROW) {
        left = true
    } else if (keyCode === RIGHT_ARROW) {
        right = true
    }
}

function keyReleased() {
    if (keyCode === UP_ARROW) {
        up = false
    } else if (keyCode === DOWN_ARROW) {
        down = false
    } else if (keyCode === LEFT_ARROW) {
        left = false
    } else if (keyCode === RIGHT_ARROW) {
        right = false
    }
}
