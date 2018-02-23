function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	//iteraciones en mi caso es el numero 5 pero lo puedo definir en un var iteraciones y a ese le asigno un numero 
	// no pido antes del while los numeros por que si no ,me pide mas de lo que quiero
	while(contador<5)
	{
	 	contador= contador+1;
	 	numero=prompt("ingrese un numero");
	 	numero=parseInt(numero);
	 	acumulador=acumulador+numero;
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN