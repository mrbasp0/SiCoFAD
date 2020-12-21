import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NbAuthComponent} from '@nebular/auth';
import { InicioComponent } from '../pagina/inicio/inicio.component';
import { DelegadosComponent } from './formatos/delegados/delegados.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: 'Formatos',
        children: [
          {
            path: 'delegados',
            component: DelegadosComponent,
          }
      ]
      },
      
    ]
 
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaRoutingModule {
}