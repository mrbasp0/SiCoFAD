import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SifoCadAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule
} from '@nebular/theme';

import {SifoCadLoginComponent} from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    SifoCadAuthRoutingModule,
    NbIconModule,
    NbFormFieldModule,
    NbAuthModule,
  ],
  declarations: [
    // ... aqui van los nuevos componentes
    SifoCadLoginComponent,
  ],
})
export class SifoCadAuthModule {
}