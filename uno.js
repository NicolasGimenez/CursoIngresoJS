
function Mostrar()
{	//act uno.js  parcial 1 ..
	var base;
	var altura;
	var perimetro;
	var superficie;

	base=document.getElementById('laBase').value;
	base=parseInt(base);
	altura=prompt("ingrese la altura");
	altura=parseInt(altura);
	perimetro=base*3;
	superficie=(base*altura)/2;

	alert("El perimetro es :"+perimetro);
	alert("La superficie es : "+superficie);
}
