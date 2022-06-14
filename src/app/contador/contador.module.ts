//Son importaciones que se crean automaticamente al agregarlos en declaration:

import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [//Son los componentes dentro de la carpetas del mismo modulo (contador):
        ContadorComponent
        
    ],
    exports: [//Las cosas que quiero hacer visibles fuera de este modulo:
        ContadorComponent
    ],
    
})
//Una calse que se exporta desde aqui:
export class ContadorModule{}