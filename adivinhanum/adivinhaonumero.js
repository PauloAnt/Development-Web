const num_random = Math.floor(Math.random() * (100) + 1)
function resposta(){
    alert(num_random)
}
function tentativa(){
    const num_chute = prompt("Informe seu chute:")
    if (num_chute > num_random){
        alert("Menor")
    }
    if (num_chute < num_random){
        alert("Maior")
    }
    if (num_chute == num_random){
        alert("Acertou!!")
    }
}