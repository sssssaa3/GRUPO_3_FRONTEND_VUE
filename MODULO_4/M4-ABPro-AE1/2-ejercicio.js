/*2.Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
El resultado debe ser 1 año, 1 semana y 1 día.
Se debe considerar lo siguiente:
1 año tiene 365 días
1 semana tiene 7 días
Se recomienda usar la función Math.floor para obtener la parte entera de un número decimal.

*/
const YEAR = 365;
const WEEK = 7;
let totalDays;
do {
  totalDays = parseFloat(prompt("Introduce la cantidad de días (números enteros solamente):"));
  if (!Number.isInteger(totalDays)) {
    alert("Error: Solo puedes ingresar números enteros. Por favor, intenta de nuevo.");
  }
} while (!Number.isInteger(totalDays));

let equivalente_años = Math.floor(totalDays / YEAR);
let diasRestantes = totalDays % YEAR;
let semanas = Math.floor(diasRestantes / WEEK);
let dias = diasRestantes % WEEK;

function pluralize(count, singular, plural) {
  return count === 1 ? `1 ${singular}` : `${count} ${plural}`;
}

alert(`${totalDays} días son: ${pluralize(equivalente_años, 'año', 'años')}, ${pluralize(semanas, 'semana', 'semanas')} y ${pluralize(dias, 'día', 'días')}.`);
