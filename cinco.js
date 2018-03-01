function Mostrar()
{
	var dia;
	dia=prompt("ingrese dia :");


	switch(dia)
	{
		case "sabado":
		case "domingo":
					  alert("es fin de semana");
					  break;
		default:
				alert("a trabajar");
				break;
	}
}
