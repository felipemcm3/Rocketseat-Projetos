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
            if(lista.length === 0){
                console.log('Não existem nenhum item cadastrado.')
            }else{
                console.log('Itens da lista:')
            
                for(let item of lista){
                    console.log(`\n${item}`)
                }
            }
            break
        case 3:
            alert('Obrigado por usar o programa.')
            repete = false
            break
        default:
            console.log('Opção invalida')
    }
}

