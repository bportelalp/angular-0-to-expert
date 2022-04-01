console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====
*/

function sumar(a: number,b: number): number{
    return (a + b);
}

const sumarFlecha = (a: number,b: number): number => {
    return a+b;
}

function multiplicar(numero: number, otronumero?: number, base: number = 2) : number {
    return numero * base;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}


function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv = personaje.pv + curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje, 3);

nuevoPersonaje.mostrarHp();