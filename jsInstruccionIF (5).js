function Mostrar()
{
//tomo la edad  
var edad;

edad=document.getElementById('edad').value;
edad=parseInt(edad);

 if (edad<13 || edad>17)
 {

 	alert("usted no es adolecente");
 }

}//FIN DE LA FUNCIÓN