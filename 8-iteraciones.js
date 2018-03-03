//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var respuesta="no";
	var contadorPares=0;
	var contadorNumero=0;
	var sumadorNumero=0;
	var promedioNumero;

	while(respuesta!="si")
	{	
		contadorNumero=contadorNumero+1;
		numero=prompt("ingrese un numero positivo : ");
		numero=parseInt(numero);
		while(numero<=0 || isNaN(numero))
		{
			numero=prompt("error por favor ingrese un numero positivo : ");
			numero=parseInt(numero);
		}
		if(numero%2==0)//en este caso no niego el 0 por que sino no hubiera salido del while anterior 
		{
			contadorPares=contadorPares+1;
		}
		sumadorNumero=sumadorNumero+numero;
		promedioNumero=sumadorNumero/contadorNumero;
		if(contadorNumero==1)
		{
			numeroMaximo=numero;
			numeroMinimo=numero;
		}
		if(numero>numeroMaximo)
		{
			numeroMaximo=numero;
		}
		if (numero<numeroMinimo)
		{
			numeroMinimo=numero;
		}

		respuesta=prompt("desea salir ingrese si ");
	}
	document.write("la cantidad de numeros pares es : "+contadorPares);
	document.write("<br>el promedio de todos los numeros es : "+promedioNumero);
	document.write("<br>la suma de todos los numeros es : "+sumadorNumero);
	document.write("<br> el numero maximo es : "+numeroMaximo+"  el numero numero Minimo es : "+numeroMinimo);
	
}

