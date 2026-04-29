let notas = [7, 5, 8, 6, 4, 9, 10, 3, 6, 2];

let suma = 0;
let aprobadas = 0;

for (let i = 0; i < notas.length; i++) {
    console.log("Nota:", notas[i]);

    suma += notas[i];

    if (notas[i] >= 6) {
        console.log("Aprobada:", notas[i]);
        aprobadas++;
    } else {
        console.log("Desaprobada:", notas[i]);
    }
}

// Promedio
let promedio = suma / notas.length;

console.log("Promedio general:", promedio);
console.log("Cantidad de aprobadas:", aprobadas);