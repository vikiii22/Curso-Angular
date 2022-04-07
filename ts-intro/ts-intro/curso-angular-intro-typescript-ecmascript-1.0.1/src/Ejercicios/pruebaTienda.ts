interface ProductoT{
    nombre:string;
    precio:number;
}

const pan:ProductoT={
    nombre:'Pan',
    precio: 1,
}

const donut:ProductoT={
    nombre:'Donut',
    precio:3,
}

const agua:ProductoT={
    nombre:'Solan de Cabras',
    precio:2,
}

function calcularTotal(productos:ProductoT[]):number | string{
    var total=0;
    productos.forEach(e=>{
        total+=e.precio;
    })
    return total + "€";
}

const compra=[pan, donut, agua];
const precioCompra=calcularTotal(compra);
console.log(precioCompra);