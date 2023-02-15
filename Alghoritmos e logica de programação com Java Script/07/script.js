let usuarios = [
    {
        nome: 'Felipe',
        idade: 28,
        peso: 120,
        altura: 1.80,
    },
    {
        nome: 'Alexandra',
        idade: 47,
        peso: 70,
        altura: 1.70,
    },
    {
        nome: 'Domicio',
        idade: 50,
        peso: 90,
        altura: 1.80,
    },
]

for(let usuario of usuarios){
    alert(usuario.nome)
}


/*for(let index = 0; index < usuarios.length; index++){
    alert(usuarios[index].nome)
}*/


/*Faça o IMC dos paciente, IMC = peso / altura * altura*/

const IMC = (altura, peso) => {
    return (peso / altura ** 2).toFixed(2)
}

for(let usuario of usuarios){
    let calcIMC = IMC(usuario.altura, usuario.peso)
    alert(`O paciente ${usuario.nome} tem o IMC de ${calcIMC}`)
}
