const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let numeroSorteado = Math.round(Math.random() * 10)
console.log(numeroSorteado)
let tentativas = 1

function apertarbotao(event) {
    

    
    
    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) == numeroSorteado){
        console.log(inputNumber.value)
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = 
        `Parabéns você acertou em ${tentativas} tentativa` 
    }
    

    tentativas ++
    
}

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', apertarbotao)
btnReset.addEventListener('click', function(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    tentativas = 1
    numeroSorteado = Math.round(Math.random() * 10)
    console.log(numeroSorteado)
})
