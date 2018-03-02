function Mostrar()
{
	var nombreAnimal;
	var pesoAnimal;
	var temperaturaAnimal;
	var respuesta = "si";
	var pesoAnimalMaximo=0;
	var nombreAnimalPesado;
	var nombreAnimalTemperaturaBaja;
	var cantidadTemperaturapar=0;
	var cantidadAnimales=0;
	var temperaturaMaxima;
	var temperaturaMinima;
	var temperaturaAnimalBaja;
	var sumaPeso=0;
	while(respuesta!="no")
	{	
		cantidadAnimales=cantidadAnimales+1
		nombreAnimal=prompt("ingrese nombre de animal :");
		pesoAnimal=prompt("ingrese peso del animal :");
		pesoAnimal=parseInt(pesoAnimal);
		while(pesoAnimal<=0 || isNaN(pesoAnimal) )
		{
			pesoAnimal=prompt("error por favor ingrese el peso del animal : ");
			pesoAnimal=parseInt(pesoAnimal);
		}
		temperaturaAnimal=prompt("ingrese la temperatura del habitat del animal :");
		temperaturaAnimal=parseInt(temperaturaAnimal);
		while( isNaN(temperaturaAnimal)|| temperaturaAnimal<-40|| temperaturaAnimal>40)
		{
			temperaturaAnimal=prompt(" error por favor ingrese la temperatura del habitat del animal(-40 a 40+) :");
			temperaturaAnimal=parseInt(temperaturaAnimal);
		}
		if(pesoAnimal>pesoAnimalMaximo)
		{
			pesoAnimalMaximo=pesoAnimal;
			nombreAnimalPesado=nombreAnimal;
		}
		if(cantidadAnimales==1)
		{
			temperaturaAnimalBaja=temperaturaAnimal;
		}
		if(temperaturaAnimal<temperaturaAnimalBaja)
		{
			temperaturaAnimalBaja=temperaturaAnimal;
			nombreAnimalTemperaturaBaja=nombreAnimal;
		}
		if(temperaturaAnimal%2 ==0 && temperaturaAnimal!=0)
		{
			cantidadTemperaturapar=cantidadTemperaturapar+1;
		}
		sumaPeso=pesoAnimal+sumaPeso;
		promedioPesos=sumaPeso/cantidadAnimales;
		if(cantidadAnimales==1)
		{
			temperaturaMaxima=temperaturaAnimal;
			temperaturaMinima=temperaturaAnimal;
		}
		if(temperaturaAnimal>temperaturaMaxima)
		{
			temperaturaMaxima=temperaturaAnimal;
		}
		if(temperaturaAnimal<temperaturaMinima)
		{
			temperaturaMinima=temperaturaAnimal;
		}

		respuesta=prompt("desea salir ingrese : no");

	}
	document.write("el nombre del animal mas pesado es : "+nombreAnimalPesado);
	document.write("<br> el nombre del animal de la temperatura mas baja es "+temperaturaAnimalBaja);
	document.write("<br> la cantidad de temperaturas pares es : "+cantidadTemperaturapar);
	document.write("<br> el promedio de todos los pesos es : "+promedioPesos);
	document.write("<br> la temperatura maxima es :"+temperaturaMaxima);
	document.write("<br> la temperatura minima es :"+temperaturaMinima);

}
