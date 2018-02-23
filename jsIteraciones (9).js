function Mostrar()
{

	var contador=0;
	// declarar variables
	//revisar y terminar
	
	var respuesta='si';

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
	
	}




}//FIN DE LA FUNCIÓN