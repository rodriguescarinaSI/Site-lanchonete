function produtos(el) {

   
    var input = document.querySelector("#qtdeBolinha");
    var bolinha = input.value;
    var bolinha = parseFloat(bolinha) * 4.00;

    var input = document.querySelector("#qtdcoxinha");
    var coxinha = input.value;
    var coxinha = parseFloat(coxinha) * 5.00;

    var input = document.querySelector("#qtdenrolado");
    var enrolado = input.value;
    var enrolado = parseFloat(enrolado) * 3.00;

    var input = document.querySelector("#qtdcoca");
    var coca = input.value;
    var coca = parseFloat(coca) * 4.50;

    var input = document.querySelector("#qtdcafe");
    var cafe = input.value;
    var cafe = parseFloat(cafe) * 3.00;

    var input = document.querySelector("#qtdagua");
    var agua = input.value;
    var agua = parseFloat(agua) * 2.00;

    

    var soma = parseFloat(bolinha) + parseFloat(coxinha) + parseFloat(enrolado) + parseFloat(coca) + parseFloat(cafe) + parseFloat(agua);

    if(document.getElementById("estudante").value == "Sim") {
        desconto = parseFloat(soma) * 0.05;
        soma = soma - desconto;
        console.log(soma);
    } else {
        console.log(soma);
    }



    if(document.getElementById("viagem").value == "Sim") {
        soma = parseFloat(soma) + 1.50;
        console.log(soma);
    } else {
        console.log(soma);
    }



    document.getElementById("campo1").innerHTML = 'R$: '+soma;
    
    var display = document.getElementById(el).style.display;
    if (display == "none")
      document.getElementById(el).style.display = 'block';
    else
      document.getElementById(el).style.display = 'none';

}




