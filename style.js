function salgadinho{
    var selecionar = document.getElementById("salgado").value;
    
    
    if(selecionar == "coxinha"){
        var n1 = parseInt(document.getElementById("v1").value);
        var n2 = parseInt(document.getElementById("v2").value);
        var res = (n1 + n2);
        alert(res);
        alert("a operação foi de soma");
    }
    
    

    
}