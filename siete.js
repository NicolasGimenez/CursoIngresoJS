function Mostrar()
{
	var nota;
	var respuesta=0;
	var sexo;
	var suma=0;
	var promedioNota;
	var notaBaja;
	var cantidadVaronesAprovados=0;

	while(respuesta<3)
	{	
		respuesta=respuesta+1;
		nota=prompt("ingrese la nota");
		nota=parseInt(nota);
		while(nota<1 || nota>10 || isNaN(nota))
		{
			nota=prompt("nota invalida por favor ingrese nota de 1 a 10");
			nota=parseInt(nota);
		}

		sexo=prompt("ingrese sexo f o m ");
		while(sexo!="f" && sexo !="m")
		{
			sexo=prompt("error al ingresar sexo  ingrese f(femenino) o m(masculino)");
		}

		suma=suma+nota;
		promedioNota=suma/respuesta;
		if(respuesta==1)
		{
			notaBaja=nota;
		}
		if(nota<notaBaja)
		{
			notaBaja=nota;
			sexoNotaBaja=sexo;
		}
		if(nota>5 && sexo=="m")
		{
			cantidadVaronesAprovados=cantidadVaronesAprovados+1;
		}
		
	}
		alert("El promedio de las notas totales es:"+promedioNota);
		alert("La nota mas baja es : "+notaBaja+"  y su sexo es:"+sexoNotaBaja);
		alert("La cantidad de varones que su nota fue mayor o igual a 6 es :"+cantidadVaronesAprovados);

}
