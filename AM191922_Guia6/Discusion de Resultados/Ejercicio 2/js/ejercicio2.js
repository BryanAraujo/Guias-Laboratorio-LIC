var Datos=[];
var opcion=true;
var total = 0;
var table = "<table>";
while(opcion==true){
  var Nproducto = prompt('Nombre del producto','');
  var Pprecio = parseFloat(prompt('Precio del producto',''));
    dato= [Nproducto,Pprecio];
    Datos.push(dato);
     total = total + Pprecio;
    opcion = confirm('¿Desea continuar s/n?');
}
table += "<tr>";
   table += "<td>"+"Producto </td>"+"<td> Precio </td>";
    table+= "<tr>";
for(var i =0; i < Datos.length;i++){
   
    table+= "<td>"+ Datos[i][0] +"</td>"
    table+= "<td>"+ Datos[i][1] +"</td>"
    table+= "</tr>"
    
    }

    table+= "<tr>"
    table+= "<td>"+"Total:</td> "+"<td>"+ total +"</td>"
    table+= "</tr>"
table+= "</table>"
document.getElementById("arreglo").innerHTML= table;

