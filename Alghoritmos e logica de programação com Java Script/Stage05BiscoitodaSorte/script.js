const bisFech = document.querySelector(".imagem");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const again = document.querySelector(".again");




bisFech.addEventListener('click', biscoitoFechado);
again.addEventListener('click', dinovo);

function biscoitoFechado(){
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    console.log(screen1.classList)
    console.log(screen2.classList)
}



function dinovo(){
    console.log("entrou")
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    console.log(screen1.classList)
    console.log(screen2.classList)
}

