//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var alumno=0;
	var sumaNotas=0;
	var notaBaja;
	var varoneMayoresSeis=0;

	while(alumno<6)
	{	
		alumno=alumno+1
		nota=prompt("Escriba la nota del alumno : ");
		nota=parseInt(nota);
		while(nota<1 || nota>10 || isNaN(nota))
		{
			nota=prompt("error al ingresar la nota, por favor igrese nota 1 al 10 : ");
			nota=parseInt(nota);
		}
		sexo=prompt("Escriba el sexo del alumno");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt(" error por favor Escriba el sexo del alumno (f o m)");
		}
		sumaNotas=sumaNotas+nota;
		promedioNotas=sumaNotas/6;
		if(alumno==1)
		{
			notaBaja=nota;
		}
		if(nota<notaBaja)
		{
			notaBaja=nota;
		}
		if(nota>=6 && sexo=="m")
		{
			varoneMayoresSeis=varoneMayoresSeis+1;
		}


	}
	alert("el promedio de las notas es : "+promedioNotas);
	alert("la nota mas baja es :"+notaBaja);
	alert("la cantidad de varones cuales sus notas fueron mayores o iguales a 6 son  :"+varoneMayoresSeis);
	
}

