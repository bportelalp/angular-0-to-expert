

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy<number>(100);
let soyArreglo = queTipoSoy([1,2,3,4]);
let soyExplicito = queTipoSoy<string>('Hola mundo');