function Mostrar()
{
	//tomo la edad  

	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	
	if (edad >=18)
	{	
		alert("usted es mayor de edad");
	}
 
	if (edad>=13 && edad<=17)//con el && si las 2 son verdaderas entra al if
	 {

	 	alert("usted es adolecente");
	 }
	if(edad<13)
	 {
	 	alert("usted es un niño");
	 }

}//FIN DE LA FUNCIÓN