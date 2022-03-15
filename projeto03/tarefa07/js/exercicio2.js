let texto = document.getElementById("texto");
let paragrafo = document.getElementById("resultado");
let botao = document.getElementById("bt");


botao.addEventListener("click", () => { 
    var frase = texto.value;
        
    let fraseNegrito ="";

for (let i=0; i<frase.length;i++) {

    if('aeiouAEIOU'.indexOf(frase[i]) != -1) {

        fraseNegrito += frase[i].bold();

    }    else fraseNegrito += frase[i];
    console.log(fraseNegrito);
}
        
    paragrafo.innerHTML = fraseNegrito;
})