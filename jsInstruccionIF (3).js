function Mostrar()
{
//tomo la edad 
var edad;

edad=document.getElementById('edad').value;
edad=parseInt(edad);

if(edad>=18)//si es verdadera entra en el if sino lo salta y sigue de  largo 
{
	alert("usted es mayor de edad");
}
else{

	alert("usted es menor de edad");//con el else es el sino entra en el if entra al else
}


}//FIN DE LA FUNCIÓN