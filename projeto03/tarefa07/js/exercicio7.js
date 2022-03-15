let texto = document.getElementById("texto");
let paragrafo = document.getElementById("resultado");
let botao = document.getElementById("bt");


botao.addEventListener("click", () => {

    let data = new Date(texto.value);
    let mes = " "

    console.log(data.getDate());

    switch(data.getMonth()){
        case 0:
            mes = "Janeiro"; 
            break;

        case 1:
            mes = "Fervereiro"; 
            break;

        case 2:
            mes = "Marco"; 
            break;

        case 3:
            mes = "Abril";
            break;
        
        case 4: 
            mes = "Maio";
            break;
        
        case 5: 
            mes = "Junho";
            break;
        
        case 6:
            mes = "Julho";
            break;
        
        case 7:
            mes = "Agost0";
            break;
        
        case 8:
            mes = "Setembro";
            break;

        case 9:
            mes = "Outubro"
            break;
        
        case 10:
            mes = "Novembro"
            break;

        case 11:
            mes = "Dezembro"
            break;
    }

    paragrafo.innerHTML = (data.getDate()+1)+ " de "+ mes +" de "+ data.getFullYear(); 


})