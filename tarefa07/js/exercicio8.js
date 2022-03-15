let texto = document.getElementById("texto");
let texto2 = document.getElementById("texto2");
let paragrafo = document.getElementById("resultado");
let botao = document.getElementById("bt");


botao.addEventListener("click", () => {

    let data2 = new Date(texto2.value);
    let data1 = new Date(texto.value);
    let dataEmMilis = Math.abs(data2.getTime() - data1.getTime());
    let diasDeDiferenca = Math.ceil(dataEmMilis / (1000 * 60 * 60 * 24 * 7));
    paragrafo.innerHTML = "A distancia entre datas é de: "+diasDeDiferenca+" semana(s)"
})