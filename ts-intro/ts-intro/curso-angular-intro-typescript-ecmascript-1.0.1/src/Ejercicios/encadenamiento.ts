interface Pasajero{
    nombre:string;
    hijos?:string[];
}

const pasajero1:Pasajero={
    nombre:'Juan'
};

const pasajero2:Pasajero={
    nombre:'Ainza',
    hijos:['Hugo', 'Kassandra']
};

function imprimeHijos(pasajero:Pasajero):void{
    const hijosPasajero=pasajero.hijos?.length;
    console.log(hijosPasajero);
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);

console.log(pasajero2.hijos.forEach(e=>{
    console.log(e);
}))