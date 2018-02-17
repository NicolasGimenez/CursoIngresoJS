function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch(mesDelAño)
{	//esta es una forma mas rrapida de hacer el mismo ejercicio
				
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":	
	case "Mayo":		
	case "Junio":
				alert("falta para el invierno");
				break;
	case "Julio":
	case "Agosto":
				alert("Abrigate que hace frio");
				break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
				alert("Ya pasamos el frio, ahora calor");
				break;									



	/*case "Enero":
				alert("falta para el invierno");
				break;

	case "Febrero":
				alert("falta para el invierno");
				break;
	case "Marzo":
				alert("falta para el invierno");
				break;
	case "Abril":
				alert("falta para el invierno");
				break;
	case "Mayo":
				alert("falta para el invierno");
				break;
	case "Junio":
				alert("falta para el invierno");
				break;
	case "Julio":
				alert("Abrigate que hace frio");
				break;
	case "Agosto":
				alert("Abrigate que hace frio");
				break;
	case "Septiembre":
				alert("Ya pasamos el frio, ahora calor");
				break;
	case "Octubre":
				alert("Ya pasamos el frio, ahora calor");
				break;
	case "Noviembre":
				alert("Ya pasamos el frio, ahora calor");
				break;
	case "Diciembre":
				alert("Ya pasamos el frio, ahora calor");
				break;*/																													 
}			 



}//FIN DE LA FUNCIÓN