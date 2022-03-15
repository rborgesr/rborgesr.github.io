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
    let maisCitado = " ";
    let mais = 0;
    for(j=0; j < vocabuloList.length ; j++){
        if(vocabuloList[j].frequencia > mais);
        mais = vocabuloList[j].frequencia;
        maisCitado = vocabuloList[j].termo;
    }

    paragrafo.innerHTML += "A palavra mais citada foi:"+ maisCitado;
    paragrafo.innerHTML += "<br>"
    paragrafo.innerHTML += mais+"Citacoes"


})

function vocabulo(termo){
    this.termo = termo;
    this.frequencia = 0;
}