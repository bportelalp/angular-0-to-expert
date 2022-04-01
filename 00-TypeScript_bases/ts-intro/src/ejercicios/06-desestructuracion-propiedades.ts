export interface Producto {
    desc: string;
    precio:number;
}

const telefono: Producto = {
    desc: 'Nokia',
    precio: 120,
}

const ipad: Producto = {
    desc: 'iPad Air',
    precio: 490,
}

export function calculaISV(productos: Producto[]): [number, number] {
    let total = 0;

    //Se puede desestructurar las propiedades de un objeto. Usando llaves puedo referirme a la propiedad
    productos.forEach(({precio}) => total += precio) 

    return [total,total * 0.21];
}

const articulos = [telefono, ipad]

// Aquí en realidad se aplica esa desestructuración
const [total, isv] = calculaISV(articulos);

console.log('Total: ', total);
console.log('ISV: ', isv);