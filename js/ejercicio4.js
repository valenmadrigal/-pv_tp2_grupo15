/*4. Declare las variables necesarias para almacenar valores numéricos que representan los
lados de un rectángulo. Calcular el área y el perímetro del rectángulo y mostrar los
resultados por consola. La unidad de medida es cm. */

const base = 10;
const altura = 5;

const area = base * altura;
const perimetro = 2 * (base + altura);

console.log(`Base: ${base} cm`);
console.log(`Altura: ${altura} cm`);
console.log(`Área: ${area} cm²`);
console.log(`Perímetro: ${perimetro} cm`);