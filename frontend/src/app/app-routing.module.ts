import { NgModule } from '@angular/core';

import { Routes, RouterModule, ExtraOptions } from '@angular/router';


const routes: Routes = [
  {
    path: 'Inicio',
    loadChildren: () => import('./pagina/pagina.module')
      .then(m => m.PaginaModule),
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#SifoCadAuthModule',
  },
  { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'Inicio' },
];
const config: ExtraOptions = {
  useHash: false,
};
@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
