import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{
    nombre: string = "Ironman";
    edad: number = 45;
    //Get es como crear una propiedad de la clase.
    //En este caso transforma el nombre en mayusculas
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    //Metodo que regresa nombre - edad :
    obtenerNombre(): string {
         return`${this.nombre} - ${this.edad} `;

    }
    //Cuando se llama a este metodo 
    //el nombre pasa a ser Spiderman.
    cambiarNombre():void{
      this.nombre ="Spiderman";
    }
     //Igual pero con la edad:
    cambiarEdad():void{
      this.edad = 27;
    }
    
}