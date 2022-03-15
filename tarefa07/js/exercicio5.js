let caixa = document.getElementById("texto");
let procura = document.getElementById("procurar")
let novo = document.getElementById("substituir");
let paragrafo = document.getElementById("resultado");
let procurar = document.getElementById("bt");

procurar.addEventListener("click", () => {
    let termo = procura.value;
    let texto = caixa.value;
    let nova = novo.value;
    texto = texto.replaceAll(termo, nova);
    paragrafo.innerHTML = texto;


})