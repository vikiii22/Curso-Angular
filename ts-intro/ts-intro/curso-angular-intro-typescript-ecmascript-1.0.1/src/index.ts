class PersonaNormal {
    nombre: string;
    direccion: string;

    constructor(nombre: string, direccion: string) {
        this.nombre = nombre
        this.direccion = direccion
    }


}

class Animal extends PersonaNormal{
    public tipo: string;
    public pelo: boolean;
    public duenyo: string;

    constructor(tipo: string, pelo: boolean, duenyo: string) {
        super(duenyo, "La calle");
        this.tipo = tipo
        this.pelo = pelo
    }

    noTienesPelo(pelo: boolean) {
        if (pelo == true) {
            console.log("Enhorabuena tienes pelo");
        } else {
            console.log("Enhorabuena eres calvo")
        }
    }
}


function laMismaPeroFuera(pelo: boolean) {
    if (pelo == true) {
        console.log("Enhorabuena tienes pelo");
    } else {
        console.log("Enhorabuena eres calvo")
    }
}

interface Personaje2 {
    poder: number;
    vida: number;
}

const spider: Personaje2 = {
    poder: 100,
    vida: 90
}

const perros = new Animal("Perro", true, "Jose Luis");
const gatoDesierto = new Animal("Gato desierto", false, "Maria Ponce");
perros.noTienesPelo(perros.pelo);
gatoDesierto.noTienesPelo(gatoDesierto.pelo);
console.log(perros);
console.log(gatoDesierto);
console.log(spider);

laMismaPeroFuera(perros.pelo);

