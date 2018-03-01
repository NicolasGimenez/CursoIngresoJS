//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("ingrese el primer numero :");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese otro numero :");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
		document.write(resultado);
	}else
	{
		if(numeroUno>numeroDos)
		{
			resultado=numeroUno - numeroDos;
			document.write(resultado);
		}else
		{
			resultado=numeroUno+numeroDos;
			document.write(resultado);
		}
	}
	
}

