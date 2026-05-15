import { mostrarDatos } from './funciones20.js';

const btn = document.querySelector('#btnMostrar');

btn.addEventListener('click', () => {
  const nombre   = document.querySelector('#nombre').value;
  const apellido = document.querySelector('#apellido').value;
  const libreta  = document.querySelector('#libreta').value;
  mostrarDatos(nombre, apellido, libreta);
});