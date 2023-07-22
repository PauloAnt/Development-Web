// Bola
    let bola

// Posições
    let posRY
    let posBX, posBY
    let posROY
 
// Velocidade
    let speedBallX, speedBallY, speedOpo

// Movimentação
    let up = false
    let down = false

// Pontuação
    let pontosplayer = 0
    let pontosopon = 0
    let dif = 0

// Sons
let sound_point, sound_trilha, sound_raquete

function setup() {
    createCanvas(windowWidth, windowHeight)
    //sound_trilha.loop()
    posRY = height / 2
    posBX = width / 2
    posBY = height / 2
    posROY = height / 2
    speedBallX = 8
    speedBallY = 8
}
function draw() {
    noStroke()
    background("black")
    fill("white")

    bola = circle(posBX, posBY, 30)
    raq1 = rect(10, posRY, 10, 70)
    raq2 = rect(width - 20, posROY, 10, 70)

    fill("white")
    textSize(48)
    text(pontosplayer, 500, 100)
    text(pontosopon, 850, 100)

    moveBall()
    moveRaquete()
    colisaoRaqueteBola()
    moveOponente()
    pontuacao()
    calculadif()
    bugBolaPresa()
}
// Sons
    function preload(){
        sound_point = loadSound("/Game-Pong/sounds/ponto.mp3")
        sound_trilha = loadSound("/Game-Pong/sounds/trilha.mp3")
        sound_raquete = loadSound("/Game-Pong/sounds/raquetada.mp3")
    }

// Marcar a pontuação
    function pontuacao(){
        if (posBX > width - 15){
            pontosplayer += 1
            sound_point.play()
        }
        else if (posBX < 15){
            pontosopon += 1
            sound_point.play()
        }
    }

//Colisão da bola com a raquete
    function colisaoRaqueteBola(){
       hit1 = collideRectCircle(10, posRY, 10, 70, posBX, posBY, 70/2)
       hit2 = collideRectCircle(width - 20, posROY, 10, 70, posBX, posBY, 70/2)
       if (hit1){
        speedBallX *= -1
        sound_raquete.play()
       }
       else if (hit2){
        speedBallX *= -1
        sound_raquete.play()
       }    
    }

// Movimentação da bola
    function moveBall(){
        posBX += speedBallX
        posBY += speedBallY

        if (posBX + (30 / 2)> width || posBX - (30 / 2)< 0){
            speedBallX*= -1
        }
        if (posBY + (30 / 2) > height || posBY - + (30 / 2) < 0){
            speedBallY*= -1
        }
    }

// Movimentação da raquete
    function moveRaquete() {
        if (keyIsDown(UP_ARROW)) {
            posRY -= 10
        } 
        else if (keyIsDown(DOWN_ARROW)) {
            posRY += 10
        }
    }
    function moveOponente(){
        speedOpo = posBY - posROY - 10 / 2 - 50
        posROY += speedOpo + dif
    }

// Dificuldade
    function calculadif() {
        if (pontosopon >= pontosplayer) {
            dif += 2
        if (dif >= 69){
            dif = 70
        }
        } 
        else {
            dif -= 1
        if (dif <= 55){
            dif = 55
        }
        }
    }

// Bug
    function bugBolaPresa(){
        if (posBX - 30/2 < 0){
            posBX = 23
        }
    }
