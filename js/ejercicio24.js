// Importar función
import { mostrarLenguaje } from "./funciones24.js";

// Obtener todos los radio buttons
const radios = document.querySelectorAll('input[name="lenguaje"]');

// Recorrer radios
radios.forEach((radio) => {

    // Evento change
    radio.addEventListener("change", (event) => {

        // Mostrar resultado
        mostrarLenguaje(event.target.value);

    });

});