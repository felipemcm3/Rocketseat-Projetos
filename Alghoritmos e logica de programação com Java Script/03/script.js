let nome = prompt('Informe seu nome')
let nota = []
let media = 0

for(let i = 0; i < 3; i++){
    nota.push(Number(prompt('Informe a nota')))
    media += nota[i]
}

if(media >= 25){
    console.log(`Parabéns ${nome} seu total foi ${media} voçê conseguiu a nota máxima no bimestre`)
}else if(media >= 15){
    console.log(`Parabéns ${nome} seu total foi ${media} voçê conseguiu a média`)
}else{
    console.log(`${nome} sua nota foi ${media} você está de recuperação de o seu melhor`)
}
