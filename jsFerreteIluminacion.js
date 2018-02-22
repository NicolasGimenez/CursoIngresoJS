/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 *//*var cantidadLaparas;
	 var precioDescuento;
	 var marca;
	 var precio;
	 var precioFinal;*/
function CalcularPrecio () 
{
	 var cantidadLaparas;
	 var precioDescuento;
	 var marca;
	 var precio;
	 var precioFinal;


	 cantidadLaparas= document.getElementById('Cantidad').value;
 	 marca=document.getElementById('Marca').value;
	 precio=35;


	 if (cantidadLaparas>5)
	 {
	 	precio=cantidadLaparas*precio;
	 	precioFinal=precio*0.5;
	 	precioDescuento=precio - precioFinal;

	 	document.getElementById('precioDescuento').value=precioDescuento;
	 }else
	 {
	 	if(cantidadLaparas==5 && marca== "ArgentinaLuz")
	 	{
	 		precio=cantidadLaparas*precio;
	 		precioFinal=precio*0.4;
	 		precioDescuento=precio - precioFinal;

	 		document.getElementById('precioDescuento').value=precioDescuento;
	 	}else
	 	{
	 		if(cantidadLaparas==5)
	 		{
	 			precio=cantidadLaparas*precio;
	 			precioFinal=precio*0.3;
	 			precioDescuento=precio - precioFinal;

	 			document.getElementById('precioDescuento').value=precioDescuento;
	 		}else
	 		{
	 			if (cantidadLaparas==4)
	 			{
	 				switch(marca)
	 				{
	 					case "ArgentinaLuz" :
	 									   precio=cantidadLaparas*precio;
	 									   precioFinal=precio*0.25;
	 									   precioDescuento=precio - precioFinal;

	 									   document.getElementById('precioDescuento').value=precioDescuento;
	 									   break;
	 					case "FelipeLamparas":
	 									    precio=cantidadLaparas*precio;
	 									    precioFinal=precio*0.25;
	 									    precioDescuento=precio - precioFinal;

	 									    document.getElementById('precioDescuento').value=precioDescuento;
	 									    break;
	 					default:
	 							precio=cantidadLaparas*precio;
	 							precioFinal=precio*0.2;
	 							precioDescuento=precio - precioFinal;

	 							document.getElementById('precioDescuento').value=precioDescuento;
	 							break;
					}
	 			}else
	 			{
	 				if(cantidadLaparas==3)
	 				{
	 					switch(marca)
	 					{
	 						case "ArgentinaLuz":
	 										  precio=cantidadLaparas*precio;
	 										  precioFinal=precio*0.15;
	 										  precioDescuento=precio - precioFinal;

	 										  document.getElementById('precioDescuento').value=precioDescuento;
	 										  break;
	 						case "FelipeLamparas":
	 										  precio=cantidadLaparas*precio;
	 										  precioFinal=precio*0.1;
	 										  precioDescuento=precio - precioFinal;

	 										  document.getElementById('precioDescuento').value=precioDescuento;
	 										  break;

	 					    default :
	 					    		 precio=cantidadLaparas*precio;
	 								 precioFinal=precio*0.05;
	 								 precioDescuento=precio - precioFinal;

	 								 document.getElementById('precioDescuento').value=precioDescuento;
	 								 break;
	 					}

	 				}
	 			}
	 		}
	 	}
	 }



}
