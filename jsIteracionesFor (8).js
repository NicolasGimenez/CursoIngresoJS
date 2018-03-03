function Mostrar()
{	//numero primo tiene 2 divisores 1 y si mismo 
	var numero;
	var contador=0;
	numero=prompt("escriba un numero y te diremos si es primo ");
	for(i=0;i<=numero;i++)
	{
		if(numero%i==0)
		{
			contador=contador+1;
		}
		if(contador>2)
		{
			break;
		}
		
	}
	if(contador==2)
		{
			alert("es primo");
		}else
		{
			alert("no es primo");
		}


}//FIN DE LA FUNCIÓN