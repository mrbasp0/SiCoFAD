import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import {Curso} from '../../models/curso';
import{CursoService} from '../Services/curso.service';

import { FormBuilder, FormGroup, FormArray, Validator } from '@angular/forms';
import { NbCardModule , NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbButtonModule } from '@nebular/theme';


declare var M:any;
//let curso = [];


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursoService]
  
})
export class CursosComponent implements OnInit {
  

  constructor(public cursoService : CursoService) { }

  ngOnInit(): void {
    this.getCursos()
  
  }

  addCurso(form?: NgForm) {
    if (form.value._id) {
      this.cursoService.putCurso(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({html: 'Agregado con Exito'});
        this.getCursos();
      });
    } else {
      this.cursoService.postCurso(form.value).subscribe((res) => {
        this.getCursos();
        this.resetForm(form);
      });
    }
  }

  getCursos(){
    this.cursoService.getCursos().subscribe(res=>{
        this.cursoService.cursos = res// as Curso[]
      console.log(res)
    })
  }

  editCurso(curso:Curso){
    this.cursoService.selectedCurso = curso;
  }

  deleteCurso(_id: string) {
    if (confirm("Are you sure you want to delete it?")) {
      this.cursoService.deleteCurso(_id).subscribe((res) => {
        this.getCursos();
      });
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      //this.cursoService.selectedCurso = new Curso();
    }
  }

}

//<button nbButton status="success" (click)="resetForm(cursoForm)">Limpiar</button>


