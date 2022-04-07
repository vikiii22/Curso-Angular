function sumar(a: number, b: number) {
    return a + b;
}

const sumarFlecha = (a: number, b: number) => {
    return a + b;
}

console.log(sumar(2, 9));


function multiplicar(a: number, b: number) {
    return a * b;
}

interface PersonajeN {
    nombre: string;
    vida: number;
    mostrarVida:()=> void;
}

function curar(personaje: PersonajeN, curacion: number): void {
    personaje.vida += curacion;
    console.log(personaje);
}

function hacerDanyp(personaje:PersonajeN, danyo:number): void{
    personaje.vida -= danyo;
    console.log(personaje);
}

const nuevoPersonaje:PersonajeN={
    nombre:'Pedro',
    vida:100,
    mostrarVida(){
        console.log("Puntos de vida", this.vida)
    }
};

console.log(hacerDanyp(nuevoPersonaje, 50));
nuevoPersonaje.mostrarVida();
console.log(curar(nuevoPersonaje, 30));
nuevoPersonaje.mostrarVida();