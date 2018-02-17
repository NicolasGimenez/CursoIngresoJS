function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
 // Enero, Marzo, Mayo, Julio, Agosto, Octubre y Diciembre 31 dias
 //febrero 28 dias
 //resto 30
switch(mesDelAño)
{
	case "Febrero":
					alert("El mes tiene 28 dias");
					break;
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
					alert("El mes tiene 31 dias");
					break;
	
	default:
					alert("El mes tiene 30 dias");
					break;
									
					
				
}




}//FIN DE LA FUNCIÓN