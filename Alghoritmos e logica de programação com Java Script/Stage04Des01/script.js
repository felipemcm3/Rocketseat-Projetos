let num1 = Number(prompt('Informe o primeiro número'))
let num2 = Number(prompt('Informe o segundo número'))
let num3 = num1 + num2
let resposta
let igual

if(num3 % 2 == 0) {
    resposta = 'par'
}
else{
    resposta = 'impar'
}

if(num1 == num2){
    igual = 'iguais'
}else{
    igual = 'diferentes'
}

alert(`A soma dos dois número é ${num1 + num2}`)
alert(`A subtração dos dois números é ${num1 - num2}`)
alert(`A multiplicação dos dois número é ${num1 * num2}`)
alert(`A divisão dos dois número é ${(num1 / num2).toFixed(2)}`)
alert(`O resto da divisão dos dois número é ${num1 % num2}`)
alert(`A soma dos dois número é ${resposta}`)
alert(`Os dois números são ${igual}`)

