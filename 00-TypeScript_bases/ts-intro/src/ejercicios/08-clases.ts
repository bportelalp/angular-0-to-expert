  class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string
    ) {}
 }

 //Extends es herencia
 class Heroe extends PersonaNormal {
    //  public alterEgo: string;
    //  public edad: number;
    //  public nombreReal: number;
    //  constructor(alterEgo: string) {
    //      this.alterEgo = alterEgo;
    //  }

     //Forma rapida de hacer los campos
    constructor(
         public alterEgo: string, 
         public edad: number,
         public nombreReal?: string
    ) {super(nombreReal, undefined);}
 }



 const ironman = new Heroe('Ironman', 45, 'Tony Stark');

console.log(ironman)