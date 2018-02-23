function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;

	
	while(respuesta==`si`)//nunca olvidar de las "" comillas
	{
		contador=contador+1;
		numero=prompt("ingrese un numero ya sea positivo o negativo :");//y el numero se lo tengo que pedir detro del while prestar atencion 
		numero=parseInt(numero);

		if(numero>0)
		{
			positivo=positivo+numero;
		}
		if(numero<0)
		{
			negativo=negativo*numero;			
		}	
		respuesta=prompt("para continuar ingrese si");
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN