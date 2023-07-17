var r1,r2,r3,r4
var l1
var opções_respostas = ["leao", "lobo", "rosa", "vaca", "fita"]
var resposta = opções_respostas[Math.floor(Math.random() * opções_respostas.length)]
var letras_erradas = []

function pegarLetras(){
    l1 = document.getElementById("letra1").value
    verificarLetra()
    limparInput()
}

function mostrarResposta(){
    document.getElementById("text_answer").textContent = resposta
}


function verificarLetra() {  
    let letraEncontrada = false;
    for (let i = 0; i < resposta.length; i++) {
        if (resposta[i] === l1) {
            letraEncontrada = true;
            if (i === 0) {
                r1 = document.getElementById("r1").value = l1;
            }
            if (i === 1) {
                r2 = document.getElementById("r2").value = l1;
            }
            if (i === 2) {
                r3 = document.getElementById("r3").value = l1;
            }
            if (i === 3) {
                r4 = document.getElementById("r4").value = l1;
            }
        }
    }
    if (!letraEncontrada && !letras_erradas.includes(l1)) {
        letras_erradas.push(l1);
    }
    document.getElementById("erradas").innerHTML = "Letras erradas: " + letras_erradas
}

function limparInput(){
    document.getElementById("letra1").value = ""

}

document.getElementById("submit").addEventListener("click", pegarLetras)
document.getElementById("showanswer").addEventListener("click", mostrarResposta)

document.getElementById("letra1").addEventListener("input", function(event){
    if (event.target.value.length > 1){
        event.target.value = event.target.value.slice(0, 1);
    }
});
