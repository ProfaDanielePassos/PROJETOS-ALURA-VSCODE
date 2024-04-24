let nomeUsuário = "";
let elemento = document.querySelector("#nomeUsuário");

while(nomeUsuário ==""){
    nomeUsuário = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){
    Element.textContent = "Seja muito bem-vindo";
}else{elemento.textContent = nomeUsuário;
}
