
/**
 *5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se
piden a continuación.
La suma de todos los números.
El promedio de los 5 números ingresados.
 */


let numeros = new Array(5);

for (let index = 0; index < numeros.length; index++) {
  let number;
  do {
    number = parseFloat(prompt(`Ingrese el número ${index + 1}:`));

    if (isNaN(number)) {
      alert("Error: Solo puedes ingresar números. Por favor, intenta de nuevo.");
    } else {
      numeros[index] = number;
    }
  } while (isNaN(number));
}

let suma = numeros.reduce((acc, value) => acc + value, 0);

let promedio = suma / numeros.length;

alert(`La suma de los 5 números es: ${suma}\nEl promedio de los 5 números es: ${promedio.toFixed(1)}`);

