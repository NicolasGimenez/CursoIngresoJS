function Mostrar()
{	// act dos.js parcial 1 ···
  var importe;
  var porcentaje;
  var resultado;

  porcentaje=prompt("ingrese  el porcentaje : ");
  porcentaje=parseInt(porcentaje);
  importe=prompt("ingrese el importe deseado : ");
  importe=parseInt(importe);
  resultado=(importe*porcentaje)/100;
  resultado=importe - resultado;
  document.getElementById('importeFinal').value=resultado;


}
