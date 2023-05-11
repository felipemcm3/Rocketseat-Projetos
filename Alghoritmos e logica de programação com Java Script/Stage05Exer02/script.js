import { Modal } from "./modal.js"
import { abaErro } from "./alerterror.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

window.addEventListener('keydown', (b) => b.key==='Enter' ? Modal.close : console.log('não é o enter'))


form.onsubmit = function(event) {
    event.preventDefault()

    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    const checar = verificarNumero(weight) || verificarNumero(height)
    console.log(checar)
    console.log(valor)

    if(checar == false){
        abaErro.open()
        return;
    }
    
    

    const result = IMC(weight,height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
    console.log(result)
}

function verificarNumero(valor){
    return isNaN(valor)
}

function IMC(weight, height) {
    return (weight / (height / 100) ** 2).toFixed(2)
}