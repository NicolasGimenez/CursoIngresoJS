function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(!(numero>0 && numero<11))// niego lo que es verdadero
	 {
		numero = prompt("error, ingrese un número entre 0 y 10.");
	 }
	 	document.getElementById('Numero').value=numero;



 }//FIN DE LA FUNCIÓN