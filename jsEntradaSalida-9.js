/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var importe;
	var aumento;
	var suma;

	importe=document.getElementById('sueldo').value;
	


	importe=parseInt(importe);// a el aumento no le pongo el parseInt por que toma el valor de la cuenta
	

	aumento=importe*10/100;
	suma=aumento+importe;
	document.getElementById('resultado').value=suma;//con el document y byid muestro con un = el resultado

}
