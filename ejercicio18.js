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

// Función flecha para calcular el mayor
const calcularMayor = (numero1, numero2) => {
    if (numero1 > numero2) {
        console.log(`El número mayor es: ${numero1}`);
    } else if (numero2 > numero1) {
        console.log(`El número mayor es: ${numero2}`);
    } else {
        console.log(`Ambos números son iguales: ${numero1}`);
    }
};

// Función principal
const main = async () => {
    const input1 = await preguntar("Ingresá el primer número: ");
    const input2 = await preguntar("Ingresá el segundo número: ");

    const numero1 = parseFloat(input1);
    const numero2 = parseFloat(input2);

    console.log(`\nNúmero 1: ${numero1}`);
    console.log(`Número 2: ${numero2}`);

    calcularMayor(numero1, numero2);

    rl.close();
};

// Ejecutar
main();