function produtos() {

   
    var input = document.querySelector("#qtdeBolinha");
    var bolinha = input.value;
    var bolinha = parseInt(bolinha) * 4;

    var input = document.querySelector("#qtdcoxinha");
    var coxinha = input.value;
    var coxinha = parseInt(coxinha) * 5;

    var input = document.querySelector("#qtdenrolado");
    var enrolado = input.value;
    var enrolado = parseInt(enrolado) * 3;

    var input = document.querySelector("#qtdcoca");
    var coca = input.value;
    var coca = parseFloat(coca) * 4.5;

    var input = document.querySelector("#qtdcafe");
    var cafe = input.value;
    var cafe = parseInt(cafe) * 3;

    var input = document.querySelector("#qtdagua");
    var agua = input.value;
    var agua = parseInt(agua) * 2;

    

    var soma = parseInt(bolinha) + parseInt(coxinha) + parseInt(enrolado) + parseFloat(coca) + parseInt(cafe) + parseInt(agua);
    alert(soma);


    
}

