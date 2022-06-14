//Importacion de Component que viene de @angular/core.
import { Component } from '@angular/core';
//Decorador:
@Component({
  //Selector es el nombre
  selector: 'app-root',
  //TemplateURL extrae la info de app.componente.html
  //y la muestra en el buscador
  templateUrl: './app.component.html',
  //Template en lugar de extraer info de otro lugar
  //plasmaria directamente lo que se escriba en ella
  //Template:
  //Extrae informacion de stylos desde/app.component.css
  styleUrls: ['./app.component.css']
})
//Una class  la cual se esta exportando.
export class AppComponent {


}


