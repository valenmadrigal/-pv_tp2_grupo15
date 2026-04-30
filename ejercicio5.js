// Variables
const horas = 2;
const minutos = 30;

// Función flecha para convertir a segundos
const convertirASegundos = (h, m) => {
    const segundosHoras = h * 3600;
    const segundosMinutos = m * 60;
    return segundosHoras + segundosMinutos;
};

// Cálculo
const totalSegundos = convertirASegundos(horas, minutos);

// Salida por consola
console.log(`Horas: ${horas}`);
console.log(`Minutos: ${minutos}`);
console.log(`Total en segundos: ${totalSegundos}`);