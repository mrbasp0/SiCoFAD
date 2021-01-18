import { Component, OnInit,Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
}

@Component({
  selector: 'app-delegados',
  templateUrl: './delegados.component.html',
  styleUrls: ['./delegados.component.scss']
})
export class DelegadosComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
