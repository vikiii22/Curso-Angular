interface Reproductor {
    volumen: number;
    minuto: number;
    cancion: string;
    detalle: Detalle;
}

interface Detalle {
    autor: string;
    anyo: number;
}

const repro: Reproductor = {
    volumen: 50,
    minuto: 2,
    cancion: 'Colgando en tus manos',
    detalle: {
        autor: 'Carlos Baute',
        anyo: 2010,
    }
};

const { volumen, minuto, cancion, detalle } = repro;
const { autor } = detalle;

// console.log('El volumen actual es ', volumen)
// console.log('El minuto actual es ', minuto);
// console.log('La canción actual es ', cancion);
// console.log('El autor es ', autor);

const dbz:string[]=['Goku', 'Vegeta', 'Krilin'];

console.log('Personaje 1', dbz[0]);
console.log('Personaje 2', dbz[1]);
console.log('Personaje 3', dbz[2]);

const [ , , p3] = dbz;

console.log('Personaje 3', p3);