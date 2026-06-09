function calcular(){

    let litros = Number(document.getElementById("litros").value);

    if(litros <= 0 || isNaN(litros)){
        document.getElementById("resultado").innerHTML =
        "Digite um valor válido.";
        return;
    }

    let anual = litros * 365;

    document.getElementById("resultado").innerHTML =
    "Economia anual: " +
    anual.toLocaleString("pt-BR") +
    " litros de água.";
}
