import { actualizarTexto } from "./funciones23.js";

const inputTexto = document.getElementById("texto");
const resultado = document.getElementById("resultado");

inputTexto.addEventListener("input", () => {

    actualizarTexto(inputTexto.value, resultado);

});