/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;
var numeroIngresado;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	numeroSecreto=Math.floor(Math.random()*100)+1;
	
	alert(numeroSecreto);
	contadorIntentos=0;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
}

function verificar()

{	if(contadorIntentos>10)
	{
		alert("fin del juego supero intentos");//esto es un extra para que cuando supero 10 intentos el juego se pare
		return;
	}


	contadorIntentos=contadorIntentos+1
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado= parseInt(numeroIngresado);
	
	if(contadorIntentos==1 && numeroIngresado==numeroSecreto )//otro extra si quiero que si acierta en el primer intento cambiar y hacer que siga jugando (una trampa)
	{
		alert("fallo seguir ..");
		numeroSecreto=numeroSecreto+1;
		document.getElementById('intentos').value=contadorIntentos;
		return;

	}



	if(numeroIngresado==numeroSecreto)
	{
		alert("usted es un ganador y en solo  "+contadorIntentos+" intentos");
		document.getElementById('intentos').value=contadorIntentos;
		
	}
	else
	{
		if(numeroIngresado>numeroSecreto)
		{
			alert("se paso");
			document.getElementById('intentos').value=contadorIntentos;
		}
		else
		{
			alert("te falto");
			document.getElementById('intentos').value=contadorIntentos;
		}
	}
}