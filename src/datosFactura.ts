const detallesFacturas = [
  {
    cabecera: {
      numero: 1,
      fecha: "13 de Junio del 2022",
      
      datosEmpleado: {
        id: "1315207892",
        nombre: "Giusepy Calle",
        telefono: "0995543940",
      },
      datosCliente:{
        id: "1313247249",
        nombre: "Carla García",
        direccion: {
          dirDetalle: "Manta, calle 16 avenida 23",
          lat:14.3434,
          lng:12.2323,
        },
        telefono: "0956837593",
      },
    },
    detalleProducto: [
      {nombreProducto: "Cuaderno", cantidad: 3, precioUnitario: 1.50, precioConjunto: 4.50},
      //precioUnitario*cantidad, Iva: precioConjunto*0.12, valor: precioConjunto+Iva},
      {nombreProducto: "Borrador", cantidad: 1, precioUnitario: 0.40, precioConjunto: 0.40},
      //precioUnitario*cantidad, Iva: precioConjunto*0.12, valor: precioConjunto+Iva},
      {nombreProducto: "Lapiz", cantidad: 3, precioUnitario: 0.35, precioConjunto: 1.05},
      //precioUnitario*cantidad, Iva: precioConjunto*0.12, valor: precioConjunto+Iva},
    ],
    formasDePago: "Efectivo",
    subTotal: 0,
    iva: 0,
    total:0
  },
  
  {
    cabecera: {
      numero: 2,
      fecha: "18 de Junio del 2022",
      
      datosEmpleado: {
        id: "1313252576",
        nombre: "Roberto Martínez",
        telefono: "0993592844",
      },
      datosCliente:{
        id: "1313247249",
        nombre: "Carla García",
        direccion: {
          dirDetalle: "Manta, calle 16 avenida 23",
          lat:14.3434,
          lng:12.2323,
        },
        telefono: "0956837593",
      },
    },
    detalleProducto: [
      {nombreProducto: "Paquete de 50 Hojas de Cuadro", cantidad: 5, precioUnitario: 0.60, precioConjunto: 3.00},
      //precioUnitario*cantidad, Iva: precioConjunto*0.12, valor: precioConjunto+Iva},
      {nombreProducto: "Sacapuntas", cantidad: 2, precioUnitario: 0.25, precioConjunto:  0.50},
      //precioUnitario*cantidad, Iva: precioConjunto*0.12, valor: precioConjunto+Iva},
      {nombreProducto: "Libro de Matemáticas", cantidad: 1, precioUnitario: 11.50, precioConjunto: 11.50},
      //precioUnitario*cantidad, Iva: precioConjunto*0.12, valor: precioConjunto+Iva},
    ],
    formasDePago: "Efectivo",
    subTotal: 0,
    iva: 0,
    total:0
  },

  {
    cabecera: {
      numero: 3,
      fecha: "24 de Junio del 2022",
      
      datosEmpleado: {
        id: "1314235835",
        nombre: "Alejandro Pérez",
        telefono: "0995836257",
      },
      datosCliente:{
        id: "1313242474",
        nombre: "Ronal Rosado",
        direccion: {
          dirDetalle: "Manta, calle 12 avenida 76",
          lat:14.3454,
          lng:12.2332,
        },
        telefono: "0957904351",
      },
    },
    detalleProducto: [
      {nombreProducto: "Mochila", cantidad: 1, precioUnitario: 25.50, precioConjunto: 25.50},
      //precioUnitario*cantidad, Iva: precioConjunto*0.12, valor: precioConjunto+Iva},
      {nombreProducto: "Corrector", cantidad: 2, precioUnitario: 0.80, precioConjunto:  1.60},
      //precioUnitario*cantidad, Iva: precioConjunto*0.12, valor: precioConjunto+Iva},
      {nombreProducto: "Libro de Programacion", cantidad: 1, precioUnitario: 18.00, precioConjunto: 18.00},
      //precioUnitario*cantidad, Iva: precioConjunto*0.12, valor: precioConjunto+Iva},
    ],
    formasDePago: "Efectivo",
    subTotal: 0,
    iva: 0,
    total:0
  }

]
  
for(let i=0; i<detallesFacturas.length; i++){
  function calcularSubtotal(obj:any){
    let result = 0;
    for (let j=0; j<obj.detalleProducto.length; j++){
      result+=obj.detalleProducto[j].precioConjunto;
    }
    return result;
  }
  
  function calcularIva(obj:any){
    let result = 0;
    for (let j=0; j<obj.detalleProducto.length; j++){
      result+=obj.detalleProducto[j].precioConjunto*0.12;
    }
    return result;
  }
  
  function calcularTotal(obj:any){
    let total = obj.subTotal+obj.iva;
    return total;
  }
  
  detallesFacturas[i].subTotal = calcularSubtotal(detallesFacturas[i]);
  detallesFacturas[i].iva = calcularIva(detallesFacturas[i]);
  detallesFacturas[i].total = calcularTotal(detallesFacturas[i]);
}



/*
const segundaFactura = {...factura}
segundaFactura.numero = 2;
segundaFactura.Cliente = "Luis";
segundaFactura.subtotal = 10;
*/


//export default factura;


    
    
function MostrarFactura (){
  for(let i=0; i<detallesFacturas.length; i++){
    console.log(`=====FACTURA=====`);
    console.log(`N° ${detallesFacturas[i].cabecera.numero}`);
    console.log(`Fecha: ${detallesFacturas[i].cabecera.fecha}`);
    console.log(`Atendido por: ${detallesFacturas[i].cabecera.datosEmpleado.nombre}`);
    console.log(`Forma de Pago: ${detallesFacturas[i].formasDePago}`);
    console.log(`=Datos de Cliente=`);
    console.log(`Identificación: ${detallesFacturas[i].cabecera.datosCliente.id}`);
    console.log(`Nombre: ${detallesFacturas[i].cabecera.datosCliente.nombre}`);
    console.log(`Dirección: ${detallesFacturas[i].cabecera.datosCliente.direccion.dirDetalle}`);
    console.log(`Teléfono/Celular: ${detallesFacturas[i].cabecera.datosCliente.telefono}`);
    console.log(`=Detalles de Productos=`);
    for(let j=0; j<detallesFacturas[i].detalleProducto.length; j++){
      console.log(`-Producto ${j+1}-`);
      console.log(`Cantidad: ${detallesFacturas[i].detalleProducto[j].cantidad}`);
      console.log(`Descripción: ${detallesFacturas[i].detalleProducto[j].nombreProducto}`);
      console.log(`Precio Unitario: ${detallesFacturas[i].detalleProducto[j].precioUnitario}`);
      console.log(`Precio Total: ${detallesFacturas[i].detalleProducto[j].precioConjunto}`);
    }
    console.log(`=Valor a Pagar=`);
    console.log(`Subtotal: ${detallesFacturas[i].subTotal}`);
    console.log(`IVA: ${detallesFacturas[i].iva}`);
    console.log(`Total: ${detallesFacturas[i].total}`);
    console.log(``);
  }
}


const filtradoId = detallesFacturas.find((factura)=>{
  return factura.cabecera.datosCliente.id.toLowerCase() === "1313247249".toLowerCase();
})
const filtradoNumero = detallesFacturas.find((facturas)=>{
  return facturas.cabecera.numero === 2;
})

export default {
  detallesFacturas,
  MostrarFactura,
  filtradoId,
  filtradoNumero,
}