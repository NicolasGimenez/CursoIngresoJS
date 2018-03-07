/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var numeroLegajo;
 	var nacionalidad;

 	edad=prompt("Ingrese la edad :");
 	edad=parseInt(edad);
 	while(edad<18 || edad>90 || isNaN(edad))
 	{
 		edad=prompt(" error por favor Ingrese la edad :");
 		edad=parseInt(edad);
 	}
 	sexo=prompt("Ingrese el Sexo, “M” para masculino y “F” para femenino ");
 	while(sexo!="F" && sexo!="M")
 	{
 		sexo=prompt(" error por favor Ingrese el Sexo, “M” para masculino y “F” para femenino ");
 	}
 	switch(sexo)
 	{
 		case "F":
 				 sexo="femenino";
 				 break;
 		case "M":
 				 sexo="masculino";
 				 break;		 
 	}
 	estadoCivil=prompt("Ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos : ")
 	estadoCivil=parseInt(estadoCivil);
 	while(estadoCivil<1 || estadoCivil>4 || isNaN(estadoCivil))
 	{
 		estadoCivil=prompt(" error por favor Ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos : ")
 		estadoCivil=parseInt(estadoCivil);
 	}
 	switch(estadoCivil)
 	{
 		case 1:
 			   estadoCivil="soltero";
 			   break;
 		case 2:
 			   estadoCivil="casado";
 			   break;
 		case 3:
 			   estadoCivil="divorciados";
 			   break;
 		case 4:
 			   estadoCivil="viudos";
 			   break;

 	}
 	sueldoBruto=prompt("Ingrese sueldo bruto no menor a 8000 ");
 	sueldoBruto=parseInt(sueldoBruto);
 	while(sueldoBruto<8000 || isNaN(sueldoBruto))
 	{
 		sueldoBruto=prompt("error por favor, Ingrese sueldo bruto no menor a 8000 ");
 		sueldoBruto=parseInt(sueldoBruto);
 	}
 	numeroLegajo=prompt("ingrese numero de legajo numérico de 4 cifras, sin ceros a la izquierda. ");
 	numeroLegajo=parseInt(numeroLegajo);
 	while(numeroLegajo<1000 || isNaN(numeroLegajo)|| numeroLegajo>9999)
 	{
 		numeroLegajo=prompt(" error por favor ingrese numero de legajo numérico de 4 cifras, sin ceros a la izquierda. ");
 		numeroLegajo=parseInt(numeroLegajo);
 	}
 	nacionalidad=prompt("ingrese nacionalidad , “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
 	while(nacionalidad!="A" && nacionalidad!="E"&& nacionalidad!="N")
 	{
 		nacionalidad=prompt("error por favor , ingrese nacionalidad , “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
 	}
 	switch(nacionalidad)
 	{
 		case "A":
 				 nacionalidad="Argentino";
 				 break;
 		case "E":
 				 nacionalidad="Extranjero";
 				 break;
 		case "N":
 				 nacionalidad="Nacionalizados";
 				 break;		 		 
 	}
 	document.getElementById('Edad').value=edad;
 	document.getElementById('Sexo').value=sexo;
 	document.getElementById('EstadoCivil').value=estadoCivil;
 	document.getElementById('Sueldo').value=sueldoBruto;
 	document.getElementById('Legajo').value=numeroLegajo;
 	document.getElementById('Nacionalidad').value=nacionalidad;


}
