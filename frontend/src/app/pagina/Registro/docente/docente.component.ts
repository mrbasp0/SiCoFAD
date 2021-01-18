import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../Services/docente.service'
import { NgForm } from '@angular/forms'
import { Docente } from '../../../models/docente'
import { Curso } from '../../../models/curso'
import { FormBuilder, FormGroup, FormArray, Validator } from '@angular/forms';

declare var M: any;
const buton = document.getElementById('buton')
@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss'],
  providers: [DocenteService]
})

export class DocenteComponent implements OnInit {



  constructor(public docenteService: DocenteService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getCursos();
    this.getDocentes();
  }

  

  registroForm = this.formBuilder.group({
    codigo: '',
    nombre: '',
    carga_academica: this.formBuilder.array([])
  })

  get nombre() {
    return this.registroForm.get('nombre')
  }
  get codigo() {
    return this.registroForm.get('codigo')
  }

  get carga_academica() {
    return this.registroForm.get('carga_academica') as FormArray
  }

  agregarCarga() {
    const cargaFormGroup = this.formBuilder.group({
      c_nombre: '',
      c_codigo: '',
      c_grupo: null,
      c_plan: '',
    });
    this.carga_academica.push(cargaFormGroup)
  }

  removerCarga(indice: number) {
    this.carga_academica.removeAt(indice);
  }

  submit() {
    console.log(JSON.stringify(this.registroForm.value));
    console.log(this.registroForm.value);
  }

  sub(form: FormGroup) {
    console.log(form.value);
  }


  refrescar() {
    this.registroForm.patchValue({
      codigo: '',
      nombre: '',
    })
    this.carga_academica.controls.splice(0, this.carga_academica.length);
  }



  addDocente(form: FormGroup) {
    this.submit();
    if (form.value._id) {
      this.docenteService.putDocente(form.value)
        .subscribe(res => {
          this.resetForm();
          alert('Update Successfuly');
          //M.toast({ html: 'Update Successfuly' });          
          this.getDocentes();
          this.refrescar();
        });
    } else {
      this.sub(form.value);
      this.docenteService.postDocente(form.value)
        .subscribe(res => {
          this.resetForm();
          alert('Created Successfuly');
          //M.toast({ html: 'Created Successfuly' });          
          this.getDocentes();
          this.refrescar();
        })
    }
    //console.log(form.value);
  }


  getCursos() {
    this.docenteService.getCursos()
      .subscribe(res => {
        this.docenteService.cursos = res as Curso[]
        console.log(res)
      })
  }

  getDocentes() {
    this.docenteService.getDocentes()
      .subscribe(res => {
        this.docenteService.docentes = res as Docente[];
        console.log(res);

      })

  }
  editDocente(docente: Docente) {
    this.docenteService.selectedDocente = docente;

  }

  deleteDocente(_id: string, form: FormGroup) {
    if (confirm('Estas seguro que deseas eliminarlo?')) {
      this.docenteService.deleteDocente(_id)
        .subscribe(res => {
          this.getDocentes();
          this.resetForm(form);
          M.toast({ html: 'Deleted Succesfully' });
        });
    }
  }



  resetForm(form?: FormGroup) {
    if (form) {
      form.reset();
      this.docenteService.selectedDocente = new Docente();
    }
  }


}

