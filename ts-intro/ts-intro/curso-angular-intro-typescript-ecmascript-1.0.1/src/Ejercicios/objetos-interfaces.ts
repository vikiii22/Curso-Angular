interface Marvel{
    nombre:string;
    edad:number;
    direccion:Direccion;
    mostrarDireccion:()=>string;
}

interface Direccion{
    calle:string;
    pais:string;
    ciudad:string;
}

const superHeroe:Marvel={
    nombre:'SpiderMan',
    edad:19,
    direccion:{
        calle: 'La calle',
        pais:'USA',
        ciudad:'Brooklyn'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion=superHeroe.mostrarDireccion();

console.log(direccion); 