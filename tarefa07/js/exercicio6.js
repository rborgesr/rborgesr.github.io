let texto = document.getElementById("texto");
let paragrafo = document.getElementById("resultado");
let botao = document.getElementById("bt");


botao.addEventListener("click", () => {

    let dataAtual = new Date();
    let data = new Date(texto.value);
    let dataEmMilis = Math.abs(dataAtual.getTime() - data.getTime());
    let diasDeDiferenca = Math.ceil(dataEmMilis / (1000 * 60 * 60 * 24));
    paragrafo.innerHTML = "Desde essa data até a data atual passaram : "+diasDeDiferenca+"dias"
})