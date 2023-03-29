const botaoChute = document.getElementById("botaoChute")
const inputChute = document.getElementById("inputChute")
const contador = document.getElementById("contador")

let numeroAleatorio = Math.round(Math.random() * 100);
let tentativas = 0;

contador.innerText = tentativas;

botaoChute.onclick = function(){
    let chute = inputChute.value;

    if(Number(chute) == numeroAleatorio){
        alert(`Você acertou! O número era ${numeroAleatorio} e você precisou de ${tentativas} chutes.`)
        resetarValores()
    } else {
        tentativas++;
    }
    
    contador.innerText = tentativas;
}

function resetarValores(){
    numeroAleatorio = Math.round(Math.random() * 100)
    inputChute.value = ""
    tentativas = 0
}