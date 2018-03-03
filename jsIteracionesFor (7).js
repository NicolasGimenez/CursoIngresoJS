function Mostrar()
{	
	var numero;
	var contador=0;
	numero=prompt("ingrese numero : ");
	numero=parseInt(numero);
	for(i=2;i<numero;i++)//le pongo un dos por que sino me toma el 1 como divisor 
	{ 
		if(numero%i ==0)
		{
			contador=contador+1;
			document.write("<br>"+i);
		}
	}
	alert("la cantidad de  divisores es :"+contador+"y los numero son : ");


}//FIN DE LA FUNCIÓN