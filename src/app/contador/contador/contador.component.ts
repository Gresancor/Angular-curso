//Hemos creado este módulo para meter dentro todo el ejercicio
//de contador +1/-1
//la parte html se aloja dentro de template ``


import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
    <!--doble llaves y la propiedad de queremos extraer de component.ts-->
<!--Adicionalente cualquier cosa que plasmemos dentro de las llaves se reflejara en el buscador.Una suma 2+2 por ejemplo-->
<h1> {{titulo}} </h1>


<!--Creamos botones y les añadimos el evento click
los eventos van entre parentesis(click)
en este caso (click) llama a al metodo 
sumar de la class AppComponent dentro de app.component.ts
<button (click) ="sumar()">+1</button>-->

<!--De esta otra forma llamamos al metodo acumular 
de la class AppComponent dentro de app.component.ts
y añadimos si queremos sumar(+1) o restar(-1)-->
<button (click) ="acumular(+1)">+1</button>

<!--Un span con otra propiedad de AppComponent.ts-->
<span> {{numero}} </span>

<!--Otro boton pero el evento click llama al metodo restar
<button (click) ="restar()">-1</button>-->

<!--Boton que llama el metodo acumular y hace que el evento click reste(-1)-->
<button (click) ="acumular(-1)">-1</button>
    
    
    `
})
export class ContadorComponent {

titulo: string = 'Contador App';
numero: number = 10


//sumar(){
//  this.numero += 1;
//}
//restar(){
//  this.numero -= 1;
//}
acumular(valor: number){
  this.numero += valor;
}

}