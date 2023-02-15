let escolha

let lista = []
let repete = true
while(repete){
    escolha = Number(prompt('Escolha sua opção\n1-Cadastrar um item na lista\n2-Mostrar itens cadastrados\n3-Sair do Programa'))
    switch(escolha){
        case 1:
            lista.push(prompt('Informe oque deseja guardar na lista.'))
            break
        case 2:
            if(lista.length == 0){
                alert('Não existem nenhum item cadastrado.')
            }else{
                alert(lista)
            }
            break
        case 3:
            alert('Obrigado por usar o programa.')
            repete = false
            break
        default:
            console.log('Opção invalida')
            break
    }
}

