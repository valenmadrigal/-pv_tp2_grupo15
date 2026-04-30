// Importar readline
const readline = require("readline");

// Crear interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función flecha para preguntar 
const preguntar = (texto) => {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => resolve(respuesta));
    });
};

// Función principal
const main = async () => {
    const cantidad = parseInt(await preguntar("¿Cuántos números querés ingresar? "));

    const numeros = [];

    for (let i = 0; i < cantidad; i++) {
        const num = parseInt(await preguntar(`Ingresá el número ${i + 1}: `));
        numeros.push(num);
    }

    // Calcular promedio
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    const promedio = suma / cantidad;

    // Mostrar resultados{
    console.log(`\nNúmeros ingresados: ${numeros.join(", ")}`);
    console.log(`Promedio: ${promedio}`);

    rl.close();
};

// Ejecutar
main();