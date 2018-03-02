function Mostrar()
{	// es el parcial 1 act 8
	var numero;
	var respuesta="si";
	var cantidadPares=0;
	var suma=0;
	var numerosIngresados=0;
	var contador=0;
	var maximo;
	var minimo;
	
	while(respuesta=="si")
	{	
		contador=contador+1;
		numero=prompt("ingrese un numero positivo");
		numero=parseInt(numero);
		numerosIngresados=numerosIngresados+1;// el isNaN(numero) mientras no sea un numero no sale de ahi oy mientras que no sea positivo tampoco sale
	while(isNaN(numero) || numero<0 )//esto es validar que hasta que no me de un numero no salis del while
	{	
		numero=prompt("error ingresar numero positivo");
		numero=parseInt(numero);
	}
	if(numero%2==0 && numero!=0)//le tengo que poner el distinto de 0 por que sino me toma al cero como par 
		{
			cantidadPares=cantidadPares+1;
		}
	 suma=suma+numero;
	 promedioIngresados=suma/numerosIngresados;
	 if(contador==1)
	 {
	 	maximo=numero;
	 	minimo=numero;
	 }
	 if(numero>maximo)
	 {
	 	maximo=numero;
	 }
	 if (numero<minimo)
	 {
	 	minimo=numero;
	 }
	 respuesta=prompt("si desea continuar ingrese si");
	}
	document.write("<br>La cantidad de numero pares es  "+cantidadPares);
	document.write("<br>El promedio de los numero ingresados es  "+promedioIngresados);
	document.write("<br>La suma de todos los numero es  "+suma);
	document.write("<br>El numero maximo es"+maximo+"  y el minimo es "+minimo);
}
