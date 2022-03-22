interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anho: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed sheeran',
        anho: 2015
    }
}

const autor = 'Fulano';

//Extraer propiedades del objeto, desestructurar.
//Ojo se puede renombrar: propiedad:nombrealternativo
const {volumen: vol, segundo, cancion, detalles: {autor: autorDetalle} } = reproductor;
//const {autor} = detalles;

// console.log('El volumen actual es de: ', vol);
// console.log('El segundo actual es de: ', segundo);
// console.log('La canción actual es: ', cancion);
// console.log('El autor es: ', autorDetalle);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

//Desestructurar arreglo se hace con llaves cuadradas.
//Desestructurando arreglos importa el orden
const [p1, , p3]= dbz;

console.log('Personaje 1: ', p1);
//console.log('Personaje 1: ', p2);
console.log('Personaje 1: ', p3);