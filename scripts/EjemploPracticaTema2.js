// Joaquín Sánchez Miravalles
//

// Solicitar un número al usuario
const input = prompt("Ingrese un número:");
const numero = parseFloat(input);

// Verificar si el número es un número válido
if (isNaN(numero)) { //isNaN, sirve para cubrir la opción de no poner un número
  console.log("No has ingresado un número válido.");
  alert("No has ingresado un número válido.");
} else if (numero > 0) {
  console.log("El número ingresado es positivo.");
  alert("El número ingresado es positivo.");
} else if (numero < 0) {
  console.log("El número ingresado es negativo.");
  alert("El número ingresado es negativo.");
} else {
  console.log("El número ingresado es igual a cero.");
  alert("El número ingresado es igual a cero.");
}