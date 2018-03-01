//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var alambre;

	largo=document.getElementById('ancho').value;
	ancho=document.getElementById('largo').value;

	perimetro=2*largo + ancho*2;
	alambre=perimetro*6;
	document.write("los metros de alambre que necesitas son :<br> "+alambre);


}

