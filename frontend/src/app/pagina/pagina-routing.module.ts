import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocenteComponent} from './Registro/docente/docente.component';
import {NbAuthComponent} from '@nebular/auth';
import { InicioComponent } from '../pagina/inicio/inicio.component';
import { DelegadosComponent } from './formatos/delegados/delegados.component';
import { SilabosComponent } from './formatos/silabos/silabos.component';
import { CursosComponent } from './cursos/cursos.component';

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
          },
          {
            path: 'silabos',
            component: SilabosComponent,
          }
      ]
      },
      {
        path: 'Registro',
        children: [
          {
            path: 'docente',
            component: DocenteComponent,

          },
         
        ]
      },
      {
        path: 'Cursos',
        component: CursosComponent
      }
      
    ]
 
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaRoutingModule {
}