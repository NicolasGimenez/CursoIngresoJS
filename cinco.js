function Mostrar()
{	//act cinco.js parcial 1
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var maximo=0;
	
	numeroUno=prompt("ingrese numero :");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese numero :");
	numeroDos=parseInt(numeroDos);
	numeroTres=prompt("ingrese numero :");
	numeroTres=parseInt(numeroTres);

	if(numeroUno>maximo)
	{
		maximo=numeroUno;
	}
	if(numeroDos>maximo)
	{
		maximo=numeroDos;
	}
	if(numeroTres>maximo)
	{
		maximo=numeroTres;
	}
	alert("el numero maximo es : "+maximo);

}
