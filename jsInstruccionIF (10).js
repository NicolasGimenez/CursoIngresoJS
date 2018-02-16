function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor(Math.random()*11);//si le pondria un 10 y un mas uno seria lo mismo pero no arrancaria del 0 

		alert(nota);

	if (nota==9 || nota== 10)
	{
		alert("EXELENTE");
	}
	if (nota>3 && nota<9)
	{
		alert("APROBO");
	}
	if (nota<4)
	{
		alert("Vamos,la proxima se puede");
	}

}//FIN DE LA FUNCIÓN