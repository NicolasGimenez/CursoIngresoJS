/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var suma;
	var descuento;

	importe=document.getElementById('importe').value;//importante siempre usar el id del que corresponda
	
	importe=parseInt(importe);

	descuento=importe*25/100;
	suma=descuento-importe;

	document.getElementById('resultado').value=suma;//recordar que este es el metodo de salida a traves del cuadro de texto 

}

	
