export const cambiarTexto = (elemento) => {
  const textoNuevo = "¡El texto fue cambiado! Ahora estás manipulando el DOM con JavaScript usando eventos y módulos.";
  elemento.textContent = textoNuevo;
  elemento.classList.add('cambiado');
};