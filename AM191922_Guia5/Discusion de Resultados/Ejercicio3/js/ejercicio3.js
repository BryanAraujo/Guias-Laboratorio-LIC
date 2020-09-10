var celsius, fahrenheit, resultado;
celsius = prompt('Ingrese la temperatura en Celsius');
var resultado = document.getElementById('Resultado')
fahrenheit = (celsius * (9/5)) + 32;

resultado.innerHTML= "<p>Resultado es:\n"+ fahrenheit  + "\nen grados Fahrenheit" + "</p>"

