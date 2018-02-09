/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1;
	var num2;
	var resultado;

	num1=document.getElementById('numeroUno').value;
	num2=document.getElementById('numeroDos').value;

	num1=parseInt(num1);// parseInt "I"mayuscula
	num2=parseInt(num2);

	resultado=num1+num2;// la variable a la que le tengo que asignar un resultado va a la izquierda 

	

	alert("La suma es "+resultado);//revisar
}

