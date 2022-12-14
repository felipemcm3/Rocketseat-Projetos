function sorteando(){
    let nivel = prompt('Informe o nível de dificuldade que deseja\n1-0 a 10\n2-0 a 100\n3-0 a 1000')
    nivel = Number(nivel)
    if(nivel == 1){
        nivel = 10
    }else if(nivel == 2){
        nivel = 100
    }else if(nivel == 3){
        nivel = 1000
    }

return Math.round(Math.random() * nivel)
}

const sorteado = sorteando()

let num = prompt('Informe um valor para descobrir o sorteado')
num = Number(num)
let tentativa = 1

while(num != sorteado){
    num = prompt('O número informado está errado. Tente novamente')
    tentativa++
}
alert(`Parabéns! Você acertou o número ${sorteado} em ${tentativa} tentativas`)

