import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personajes(): Personaje[] {
        // Ojo esto js lo manda por referencia asi que puede hacer set
        //   return this._personajes;
        //en su lugar, rompe la referencia y crea un nuevo arreglo, los ... indica que coge cada uno
        return [...this._personajes];
    }


    constructor() {}



    agregarPersonaje(arg: Personaje) {
        this._personajes.push(arg);
    }

    quitarPersonaje(arg: Personaje){
        
    }
}