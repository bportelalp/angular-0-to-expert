import { Pipe, PipeTransform } from "@angular/core";
import { Color } from "../interfaces/ventas.interface";

@Pipe({
    name: 'color'
})
export class ColorPipe implements PipeTransform {

    transform(color: Color): string {
        return Color[color] //Yendo por indice devuelve string
    }
}