let inputTexto = document.getElementById("texto");
let resultado = document.getElementById("resultado");

inputTexto.addEventListener("input", function(){

    resultado.textContent = inputTexto.value;

});