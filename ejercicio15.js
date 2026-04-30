// Importar readline
const readline = require("readline");

// Crear interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función flecha para preguntar (promesa)
const preguntar = (texto) => {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => resolve(respuesta));
    });
};

// Función flecha para retornar el mes
const retornarMes = (numero) => {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril",
        "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    if (numero >= 1 && numero <= 12) {
        return meses[numero - 1];
    } else {
        return "Este mes no existe";
    }
};

// Función principal
const main = async () => {
    const input = await preguntar("Ingresá un número (1-12): ");
    const numero = parseInt(input);

    const resultado = retornarMes(numero);

    console.log(`Número ingresado: ${numero}`);
    console.log(`Resultado: ${resultado}`);

    rl.close();
};

// Ejecutar
main();