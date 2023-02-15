
const alunos = [
    {
        nome: 'Alexandra',
        nota1: 8,
        nota2: 6,
    },
    {
        nome: 'Domicio',
        nota1: 6,
        nota2: 7,
    },
    {
        nome: 'Ana',
        nota1: 10,
        nota2: 10,
    },
    {
        nome: 'Juliana',
        nota1: 3,
        nota2: 2,
    },
]

function media(nota1, nota2){
    let media = (nota1 + nota2) / 2
    return media
    
}



for(let usuario of alunos){
    let resmedia = media(usuario.nota1, usuario.nota2)
    if(resmedia >= 7 ){
        alert(`${usuario.nome} sua média foi ${resmedia}.\nParabéns você passou`)
    }else{
        alert(`${usuario.nome} sua média foi ${resmedia}.\nVocê não passou, tente novamente`)
    }
}

