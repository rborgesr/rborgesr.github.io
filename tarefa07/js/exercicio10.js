let texto = document.getElementById("texto");
let paragrafo = document.getElementById("resultado");
let botao = document.getElementById("bt");


botao.addEventListener("click", () => {
    let frase = texto.value;

    let senha = "TENIStenis";
    let contra = "POLARpolar";
    let fraseCodificada = "";

    for (let i = 0 ; i < frase.length ; i++){
        letra = frase.charAt(i);
        if(senha.indexOf(letra) != -1){
            fraseCodificada += contra.charAt((senha.indexOf(letra)));
        }else if(contra.indexOf(letra) != -1){
            fraseCodificada += senha.charAt((contra.indexOf(letra)));
        }else {
            fraseCodificada += letra;
        }
    }
    paragrafo.innerHTML = fraseCodificada;


})