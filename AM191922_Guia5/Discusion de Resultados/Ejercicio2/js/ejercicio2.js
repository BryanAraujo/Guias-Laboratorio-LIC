var conversion = prompt('Introduzca la cantidad a convertir en metros: ',' ');
var operaciones = document.getElementById('operaciones');
var resultado = document.getElementById('resultado');
var contenido = "<header>\n";
contenido += "\t<h1></h1>\n";
contenido += "</header>\n";
contenido += "<nav class='menu'>\n";
contenido += "<ul>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pies</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pulgadas</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Yardas</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";

operaciones.innerHTML = contenido;
var opciones = document.getElementsByTagName('a');
for(var i=0; i<opciones.length;i++){
    switch(i){
        case 0:
            //Convertir a Pies
            opciones[i].onclick = function(){
                resultado.innerHTML = "<p class=\"letterpress\">" + conversion + " * " + 3.281 +
                " = " + (parseFloat(conversion) * 3.281) +"<hr>Pies" +"</p>\n";
            }
            case 1:
                //Convertir a Pulgadas
                opciones[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" + conversion + " * " + 39.37 +
                    " = " + (parseFloat(conversion) * 39.37) +"<hr>Pulgadas" +"</p>\n";
                }
                case 2:
                    //Convertir a Yardas
                    opciones[i].onclick = function(){
                        resultado.innerHTML = "<p class=\"letterpress\">" + conversion + " * " + 1.094 +
                        " = " + (parseFloat(conversion) * 1.094) +"<hr>Yardas" +"</p>\n";
                    }
    }
}
window.onload = init;