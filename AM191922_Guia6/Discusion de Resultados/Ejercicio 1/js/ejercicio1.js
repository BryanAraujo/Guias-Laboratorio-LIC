//Declaración de las variables a utilizar
var cadnum, size, sumP, sumI, mayor, menor;
//Captura de la cantidad de notas que se ingresarán
cadnum = prompt("Ingrese un número entero:", "");
let countPares = 0
let countImpar = 0;

//Definiendo un valor de inicialización para la variable que almacenará el promedio
nota = 0;
header = "<header class=\"masked\">";
header += "<h1>Discusión 1</h1>";
header += "</haeder>";
document.write(header);

document.write("<section>");
document.write("<article>");

size = cadnum.length;

document.write("<h3>Número ingresado:" + cadnum + "</h3>");
document.write("<h3>La cantidad de cifras es:" + size + "</h3>");
sumP = 0;
sumI = 0;
mayor = 0;
menor = parseInt(cadnum.charAt(0));
for (i = 0; i < size; i++) {
    if (parseInt(cadnum.charAt(i)) < menor) {
        menor = parseInt(cadnum.charAt(i));
    }

    if (parseInt(cadnum.charAt(i)) >= mayor) {
        mayor = parseInt(cadnum.charAt(i));
    }

    if (!esPar(parseInt(cadnum.charAt(i)))) {
        countPares = countPares + 1;
        sumP = sumP + parseInt(cadnum.charAt(i));
    } else {
        countImpar = countImpar + 1;
        sumI = sumI + parseInt(cadnum.charAt(i));
    }
}
document.write("<h3>La cantidad de cifras pares es:" + countPares + "</h3>");
document.write("<h3>La cantidad de cifras impares es:" + countImpar + "</h3>");
document.write("<h3>Suma de Pares:" + sumP + "</h3>");
document.write("<h3>Suma de Impares:" + sumI + "</h3>");
document.write("<h3>Número mayor:" + mayor + "</h3>");
document.write("<h3>Número menor:" + menor + "</h3>");
document.write("<h3>Suma total:" + (sumP + sumI) + "</h3>");
document.write("</article>");
document.write("</section>");


function esPar(num) { return num % 2; }