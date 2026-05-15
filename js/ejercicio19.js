import { cambiarTexto } from './funciones19.js';

const btn = document.getElementById('btnCambiar');
const parrafo = document.getElementById('parrafo');

btn.addEventListener('click', () => {
  cambiarTexto(parrafo);
});