const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const numeroSorteado = Math.round(Math.random() * 10)
let tentativas = 1
console.log(numeroSorteado)

function apertarbotao(event) {
    

    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == numeroSorteado){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = 
        `Parabéns você acertou em ${tentativas}` 
    }
    

    tentativas ++
    
}

const btnTry = document.querySelector("#btnTry")
const btnReset = documento.querySelector("#btnReset")

btnTry.addEventListener('click', apertarbotao)
btnReset.addEventListener('click', function(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    tentativas = 1
})
