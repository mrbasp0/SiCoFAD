import { Component, OnInit } from '@angular/core';
import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';
import { NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'sifocad-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  usuario = {
    name: 'Jyoti',
  };
  constructor(/*private authService: NbAuthService*/ private sidebarService: NbSidebarService,private menuService: NbMenuService)  { 
   /* this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if(token.isValid()){
        this.usuario = token.getPayload(); //aqui recibimos el payload(carga util) desde el token y asignamos a nuestra variable usuario
      }
    })*/
  }

  ngOnInit(): void {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
