export const mostrarDatos = (nombre, apellido, libreta) => {
  if (!nombre || !apellido || !libreta) {
    alert('Por favor completá todos los campos.');
    return;
  }

  alert(
    `Los datos ingresados son:\n\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`
  );
};