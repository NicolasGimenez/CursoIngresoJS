function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	while(sexo!="f" && sexo!="m")
	 {
	 	sexo = prompt("ingrese f ó m .");
	 }
	 if(sexo=="f")
	 {
	 	sexo="Femenino";
	 }else
	 {
	 	sexo="Masculino";
	 }
		document.getElementById('Sexo').value="Su sexo es :"+sexo;// aca despues del igual puedo agregar texto y con el + el resultado

}//FIN DE LA FUNCIÓN