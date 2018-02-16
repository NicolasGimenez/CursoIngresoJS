function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	var resta;
	var suma;

	numeroUno=prompt("Ingrese primer numero");
	numeroDos=prompt("Ingrese segundo numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		multiplicacion = numeroUno*numeroDos;
		document.write(multiplicacion);//con el document write es otra forma de mostrar el resultado
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resta= numeroUno - numeroDos;
			document.write(resta);

		}
		else
		{
			suma= numeroUno + numeroDos;
			document.write(suma);

		}
	}

}
