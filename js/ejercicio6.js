const edades = [15, 23, 34, 47, 8, 62, 19, 31];

console.log("Edades en el array:");
edades.forEach((edad, i) => console.log(`  [${i}]: ${edad} años`));

const promedio = edades.reduce((suma, edad) => suma + edad, 0) / edades.length;
console.log(`Promedio de edades: ${promedio.toFixed(2)} años`);