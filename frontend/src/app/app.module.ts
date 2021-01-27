import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbIconModule, NbMenuModule, NbSidebarModule, NbToastrModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import {SifoCadAuthModule} from './auth/auth.module';
import {PaginaModule} from './pagina/pagina.module';
import { DocenteComponent } from './pagina/Registro/docente/docente.component';
import { CursosComponent } from './pagina/cursos/cursos.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from 'ng2-completer';
import { ConstanciaComponent } from './pagina/Registro/constancia/constancia.component';

const formSetting: any = {
  redirectDelay: 0,
  showMessage: {
    success: true,
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    AppRoutingModule,
    HttpClientModule,
    SifoCadAuthModule,

    PaginaModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbToastrModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: '',
          token: {
            class: NbAuthJWTToken,
            key: 'token', //este parametro indica donde buscar el token
          },
          login: {
            redirect: {
              success: '/Inicio',
              failure: 'null', //se mantiene en la misma pagina
            },
          },
          register: {
            endpoint: '/api/auth/register',
            redirect: {
              success: '/Bienvenido',
              failure: null, //se mantiene en la misma pagina.
            } 
          },
        }),
      ],
      forms: {
        login: formSetting, 
        register: formSetting,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
