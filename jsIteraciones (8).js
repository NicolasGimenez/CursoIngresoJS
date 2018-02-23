function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;
	while(respuesta!="no")
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
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN