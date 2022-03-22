import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
            <h1>{{title}}</h1>
            <p>La base es: {{base}}</p>
            <button (click)="acumular(base)">+ {{base}}</button>

            <span>{{numero}}</span>

            <button  (click)="acumular(base)">- {{base}}</button>
    `
})

export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 10;
    base: number = 5
  
    acumular(valor: number): void {
        this.numero = this.numero + valor;
    }
}