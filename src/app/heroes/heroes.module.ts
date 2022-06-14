
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//Son importaciones que se crean automaticamente al agregarlos en declaration:
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';




@NgModule({
    declarations: [//Son los componentes dentro de la carpetas del mismo modulo (heroes):
        HeroeComponent,
        ListadoComponent
    ],
    exports: [//Las cosas que quiero hacer visibles fuera de este modulo:
        ListadoComponent
    ],
    imports:[//Modulos
         CommonModule,//CommonModule es necesario para que funcionen los *ngIf y *ngFor entre otros
         
    ]
})
//Una calse que se exporta desde aqui:
export class HeroesModule{}