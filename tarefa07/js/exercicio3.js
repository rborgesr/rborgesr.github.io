let texto = document.getElementById("texto");
let paragrafo = document.getElementById("resultado");
let botao = document.getElementById("bt");


botao.addEventListener("click", () => {

    let frase = texto.value;
    

    let palavraList = frase.split(" ");
    console.log(palavraList);

    let vocabuloList = [];
    i=0
    
    for(palavra of palavraList){

            vocabuloList[i] = new vocabulo(palavra);
            i++;
    }

    for ( palavra of palavraList){
        for ( i=0 ; i < palavraList.length; i++){
            if(palavra == vocabuloList[i].termo){
                vocabuloList[i].frequencia++;
            }
        }
    }

    for(j=0; j < vocabuloList.length ; j++){
        paragrafo.innerHTML += "termo: " + vocabuloList[j].termo;
        paragrafo.innerHTML += "/              fraquencia: "
        paragrafo.innerHTML += vocabuloList[j].frequencia;
        paragrafo.innerHTML += "<br>"
    }

})

function vocabulo(termo){
    this.termo = termo;
    this.frequencia = 0;
}