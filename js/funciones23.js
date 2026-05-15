export function actualizarTexto(texto, elemento) {

    console.log("Actualizando Texto...")
    elemento.textContent = texto;

    if (texto.length > 20) {
        elemento.style.backgroundColor = "red";
    } else {
        elemento.style.backgroundColor = "lightgray";
    }
}