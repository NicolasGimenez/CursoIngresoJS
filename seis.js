function Mostrar()
{
	var importe;
	var contador=0;
	var mayorImporte;
	var menorImporte;

	while(contador<24)
	{	contador=contador+1;
		importe=prompt("Ingrese el importe del dia");
		importe=parseInt(importe);
		while(importe<0 || isNaN(importe))
		{
			importe=prompt(" error al ingresar por favor ingrese el importe del del dia");
			importe=parseInt(importe);
		}

		if(contador==1)
		{
			mayorImporte=importe;
			menorImporte=importe;
		}
		if(importe>mayorImporte)
		{
			mayorImporte=importe;
		}
		if(importe<menorImporte)
		{
			menorImporte=importe;
		}
	}
	document.write("<br>El mayo importe es :" +mayorImporte+ " y el menorImporte es :"+menorImporte);
}
