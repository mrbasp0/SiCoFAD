import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NbAuthComponent} from '@nebular/auth';
import { InicioComponent } from '../pagina/inicio/inicio.component';
import { SifoCadLoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
        {
            path: 'login',
            component:  SifoCadLoginComponent,
        },
        
    ]
  }

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SifoCadAuthRoutingModule {
}