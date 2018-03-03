function Mostrar()
{
	var numero;
	var resultado=0;
	var cantidadPares=0;

	numero=prompt("escriba un numero : ");
	numero=parseInt(numero);

	for(var i=1; i<numero;i++)
	{
		if(i%2==0 && i!=0)
		{
			cantidadPares=cantidadPares+1;
			document.write("<br>"+i);
			
		}
		

	}
	document.write("esos son los numero pares y <br>la cantidad de pares es : "+cantidadPares);
	//document.write("los numero pares son :"+i);
	//document.write("son "+resultado);
	

}//FIN DE LA FUNCIÓN