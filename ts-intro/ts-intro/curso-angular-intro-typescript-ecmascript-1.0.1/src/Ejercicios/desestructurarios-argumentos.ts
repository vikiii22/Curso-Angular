export interface Producto {
    desc: string;
    precio: number;
};

const telefono: Producto = {
    desc: 'POCO X3 pro',
    precio: 300
};

const tablet: Producto = {
    desc: 'Lenovo Tab P1 pro',
    precio: 250
};

export function calculaISV(productos: Producto[]): [number, number ]{
    let total = 0;
    productos.forEach(e => {
        total += e.precio;
    });
    return [total, total * 0.15];
}

const articulo = [telefono, tablet];
const [total, isv]=calculaISV(articulo);
console.log(total);
console.log(isv);