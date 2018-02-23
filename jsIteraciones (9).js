function Mostrar()
{

	var contador=0;
	// declarar variables
	var respuesta='si';
	var numero;

	while(respuesta!='no')
	{
		contador=contador+1;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<maximo)
			{
				minimo=numero;
			}
		}
		respuesta=prompt("desea salir igrese.. no ..de lo contrario cualquier tecla");
	
	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN