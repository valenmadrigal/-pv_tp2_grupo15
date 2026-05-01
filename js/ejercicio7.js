let nombres = ["Ana", "Carlos", "María", "Fernando", "Lucía", "Alejandro"];

// Mostrar nombres
let nombreMasLargo = "";

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);

    // Buscar el nombre más largo
    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i];
    }
}

console.log("Nombre más largo:", nombreMasLargo);