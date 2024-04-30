//*1.Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la
//*transforme a grados Kelvin y Fahrenheit.Se debe considerar la siguiente información respecto a la equivalencia de las
//*escalas de temperatura:
//*0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
//*es 0 °C + 273.15 = 273.15 K
//*0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos
//*es (0 °C × 9/5) + 32 = 32 °F

alert("Ingrese su cálculo de temperatura");

let celsius;
do {
  celsius = parseFloat(prompt("Ingrese grados Celsius:"));

  if (isNaN(celsius)) {
    alert("Por favor, solo puedes ingresar números.");
  }
} while (isNaN(celsius));

// Convertir a Fahrenheit
let gradosFahrenheit = (celsius * 9 / 5) + 32;

// Convertir directamente de Celsius a Kelvin
let kelvin = celsius + 273.15;

alert(celsius + "ºC es igual a " + gradosFahrenheit.toFixed(2) + "ºF y " +
  celsius + "ºC convertidos a Kelvin son: " + kelvin.toFixed(2) + "K");
