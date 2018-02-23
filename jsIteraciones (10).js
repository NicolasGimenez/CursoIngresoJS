function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var respuesta="si";
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciasPYN;

	while(respuesta!="no")
	{
		contador=contador+1;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero<0)
		{
			sumaNegativos=sumaNegativos+numero;
			cantidadNegativos=cantidadNegativos+1;
			promedioNegativos=sumaNegativos/cantidadNegativos;
		}else
		{
			if(numero>0)
			{
				sumaPositivos=sumaPositivos+numero;
				cantidadPositivos=cantidadPositivos+1;
				promedioPositivos=sumaPositivos/cantidadPositivos;
			}else
			{
				cantidadCeros=cantidadCeros+1;
			}
		}
		if(numero%2==0)
		{
			cantidadPares=cantidadPares+1;
		}
		diferenciasPYN=sumaNegativos+sumaPositivos;
		respuesta=prompt("para salir ingrese no para continuar precione cualqier tecla ");
	}
	document.write("<br> La suma de negativos es :"+sumaNegativos);
	document.write("<br> La suma de positivos es :"+sumaPositivos);
	document.write("<br>La cantidad de numeros positivos es :"+cantidadPositivos);
	document.write("<br>La cantidad de numeros negativos es :"+cantidadNegativos);
	document.write("<br>La cantidad de ceros ingresados es :"+cantidadCeros);
	document.write("<br>La cantidad de numeros pares es :"+cantidadPares);
	document.write("<br>El promedio de numeros positivos es :"+promedioPositivos);
	document.write("<br>El promedio de numeros negativos es :"+promedioNegativos);
	document.write("<br>La diferencia entre positivos y negativos es :"+diferenciasPYN);
}//FIN DE LA FUNCIÓN