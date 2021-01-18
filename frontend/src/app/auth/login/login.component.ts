import {Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import {NbLoginComponent} from '@nebular/auth';

@Component({
    selector: 'sifocad-login',
    templateUrl: './login.component.html',
})
export class SifoCadLoginComponent extends NbLoginComponent {
    showPassword = false;

    getInputType() {
        if (this.showPassword) {
          return 'text';
        }
        return 'password';
      }


    login() {
        this.router.navigate(['/Inicio']);
    }

        
    toggleShowPassword() {
        this.showPassword = !this.showPassword;
      }

}