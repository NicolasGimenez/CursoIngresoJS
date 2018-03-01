//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var mayorImporte;
	var menorImporte;
	var contador=0;

	while(contador<7)
	{
		contador=contador+1
		importe=prompt("ingrese importe : ");
		importe=parseInt(importe);
		if(importe<=0)
		{
			importe=prompt("Error ingrese un importe valido");
			importe=parseInt(importe);
		}
		if(contador==1)
		{
			mayorImporte=importe;
			menorImporte=importe;
		}
		if(importe>mayorImporte)
		{
			mayorImporte=importe;
		}
		if(importe<menorImporte)
		{
			menorImporte=importe;
		}
	}
		document.write("El mayor importe es : "+mayorImporte);
		document.write("<br>El menor importe es : "+menorImporte);
}

