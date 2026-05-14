// Variable para guardar el último color
let ultimoColor = "";

// Función flecha para cambiar color
export const cambiarColor = () => {

    const colores = [
        "skyblue",
        "lightgreen",
        "lightpink",
        "lightyellow",
        "lavender",
        "orange"
    ];

    let color;

    // Evitar repetir el mismo color
    do {
        const indice = Math.floor(Math.random() * colores.length);
        color = colores[indice];

    } while (color === ultimoColor);

    // Guardar color actual
    ultimoColor = color;

    // Cambiar fondo
    document.body.style.backgroundColor = color;

    // Mostrar en consola
    console.log(`Color cambiado a: ${color}`);

};