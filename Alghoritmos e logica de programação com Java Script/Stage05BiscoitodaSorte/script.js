const bisFech = document.querySelector(".imagem");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const again = document.querySelector(".again");
const frase = document.querySelector(".frase");



bisFech.addEventListener('click', biscoitoFechado);
again.addEventListener('click', dinovo);

function biscoitoFechado(){
    var sorteado = Math.floor(Math.random() * (7 - 1) + 1);
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    if(sorteado == 1){
        frase.innerText = "Somos oque sentimos"
    }else if(sorteado == 2){
        frase.innerText = "Bom dia luz do dia!"
    }else if(sorteado == 3){
        frase.innerText = "Crenças são oque sentimos"
    }else if(sorteado == 4){
        frase.innerText = "O universo está todo tempo em movimento"
    }else if(sorteado == 5){
        frase.innerText = "A obra acontece através de você e da alegria"
    }else if(sorteado == 6){
        frase.innerText = "Três coisas que não podem ficar escondidas, o sol, a lua e a verdade"
    }
}



function dinovo(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
}


