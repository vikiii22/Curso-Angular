import { Producto } from "./desestructurarios-argumentos";
import { calculaISV } from "./desestructurarios-argumentos";

const carritoCompras: Producto[]=[
    {
        desc:'Barra de Pan',
        precio: 1,
    },
    {
        desc:'Botella de Agua',
        precio:2
    },
    {
        desc:'Donut',
        precio:3
    },
];

const [totalCompra, isv]=calculaISV(carritoCompras);
console.log(totalCompra);
console.log(isv);