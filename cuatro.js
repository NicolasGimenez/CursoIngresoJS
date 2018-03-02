function Mostrar()
{	// act cuatro.js parcial 1...
	var numeroUno;
	var numeroDos;

	numeroUno=prompt("ingrese un numero :");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese otro numero :");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno+""+numeroDos;
	}else
	{
		if(numeroUno>numeroDos)
		{
			resultado=numeroUno*numeroDos;
		}
		if(numeroUno<numeroDos)
		{
			resultado=numeroUno - numeroDos
		}
	}
	if (resultado%2 ==0 && resultado !=0)
	{
		document.write("es par");
	}
	document.write(resultado);
}
