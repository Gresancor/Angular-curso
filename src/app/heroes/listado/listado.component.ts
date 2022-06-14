import { Component } from '@angular/core';
//import { Console } from 'console';   No se que es esto//

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {
  //heroes:propiedad que es un arreglo de clase string.
    heroes: string [] = ["Guilliman","Russ","Angron","Vulcan","Horus","Fulgrin"];
     //Porpiedad que es un string igual a string vacio:
    heroeBorrado:string = '';


    borrarHeroe(){
      //Llamamos a la propiedad heroeBorrado dentro de ListadoComponent
      //declaramos que es igual a la propiedad heroes
    //Llamamos a la propiedad heroe dentro de ListadoComponent
    //y le añadimos el metodo shift que borrara el primer elemento
   //dentro del array si este es un string o string vacio(|| " ").
     this.heroeBorrado = this.heroes.shift() || " " ;

      //console.log que monstrara en consola al heroe borrado.
     console.log(this.heroeBorrado)

      

     
       
  };

};
