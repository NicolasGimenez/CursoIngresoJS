function Mostrar()
{
	//tomo la edad  
	var edad;
	var estadoc;
	

	edad=document.getElementById('edad').value;
	estadoc=document.getElementById('estadoCivil').value;

	edad=parseInt(edad);

	if(edad<18 && estadoc != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.'")
	}


	// esto es una forma
	//if (estadoc=="Casado" || estadoc=="Divorciado")// la variable es estadoc y lo que puede ser la variable es soltero,divorciado o casado 
	//{
	//	if(edad<18)//para poder poner una de esas opciones doble comilla y lo pongo copiado del html
	//	{
	//		alert("'Es muy pequeño para NO ser soltero.'");
	//	}
	//}


	

		
		 
		
}//FIN DE LA FUNCIÓN