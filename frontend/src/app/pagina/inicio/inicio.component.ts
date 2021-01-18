import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../menu-paginas';

@Component({
  selector: 'sifocad-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  menu = MENU_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
