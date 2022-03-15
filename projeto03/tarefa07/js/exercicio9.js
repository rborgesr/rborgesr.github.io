let texto = document.getElementById("texto");
let paragrafo = document.getElementById("resultado");
let botao = document.getElementById("bt");


botao.addEventListener("click", () => {

    let senha = texto.value;
    let classe = 1;


    for (let i=0; i <= senha.length; i++){
        let cod = senha.charCodeAt(i);
        if(cod >= 65 && cod <= 90 || cod >= 97 && cod <= 122){
            classe *= 2;
        }
        if( cod >= 48 && cod <= 57 ){
            classe *= 3;
        }
        if( cod >= 33 && cod <= 47 || cod >= 58 && cod <= 64 || cod >= 91 && cod <= 96 || cod >= 123 && cod <= 126 ){
            classe *= 5;
        } 
    }

   if(classe % 2 == 0 && classe % 3 == 0 && classe % 5 ==0){
       paragrafo.innerHTML = "Senha FORTE";
       paragrafo.style.color = "green";
   } else if(classe % 2 == 0 && classe % 3 == 0){
       paragrafo.innerHTML = "Senha MODERADA"; 
       paragrafo.style.color = "orange";
   } else if(classe % 2 ==0){
        paragrafo.innerHTML = "Senha FRACA";
        paragrafo.style.color = "red";
    }

})  