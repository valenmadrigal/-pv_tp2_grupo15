// Función flecha para mostrar el lenguaje seleccionado
export const mostrarLenguaje = (lenguaje) => {

    const resultado = document.querySelector("#resultado");

    resultado.textContent = `Lenguaje seleccionado: ${lenguaje}`;

    console.log(`Lenguaje seleccionado: ${lenguaje}`);

};