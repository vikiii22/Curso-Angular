let nombre = "Pedro";
console.log(nombre);
var perro: string = "Tara";

console.log("El perro de " + nombre + " es " + perro);

let habilidades: string[] = ['Bash', 'Counter', 'Sniper', 'Tank'];

habilidades.forEach(e => {
    console.log(e);
});

for (let index = habilidades.length; index >= 0; index--) {
    console.log(habilidades[index]);
}

interface Personaje {
    nomb: string;
    vida: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nomb: 'Peter',
    vida: 100,
    habilidades: ['Bash', 'Counter', 'Sniper', 'Tank']
};

personaje.puebloNatal = 'Aspe';

console.table(personaje);