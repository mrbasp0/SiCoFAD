import { Component, OnInit } from '@angular/core';
import { SilabosService } from '../../Services/silabos.service'
import { NgForm } from '@angular/forms'
import { Formato_1 } from '../../../models/formato_1'
import { FormBuilder, FormGroup, FormArray, Validator } from '@angular/forms';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'app-silabos',
  templateUrl: './silabos.component.html',
  styleUrls: ['./silabos.component.scss'],
  providers: [SilabosService]
})
export class SilabosComponent implements OnInit {

  constructor(public silabosService: SilabosService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getFormatos_1();
  }

  fechaact = new Date();

  registroForm = this.formBuilder.group({
    cod_curso: '',
    num_grupo: null,
    nom_curso: '',
    nom_docente: '',
    fecha: this.fechaact,
    alumnos: this.formBuilder.array([])
  })

  get cod_curso() {
    return this.registroForm.get('cod_curso')
  }
  get num_grupo() {
    return this.registroForm.get('num_grupo')
  }

  get nom_curso() {
    return this.registroForm.get('nom_curso')
  }

  get nom_docente() {
    return this.registroForm.get('nom_docente')
  }

  get fecha() {
    return this.fechaact
  }

  get alumnos() {
    return this.registroForm.get('alumnos') as FormArray
  }

  agregarAlumnos() {
    const alumnosFormGroup = this.formBuilder.group({
      a_nombre: '',
      a_codigo: '',
      a_correo: ''
    });
    this.alumnos.push(alumnosFormGroup)
  }

  removerCarga(indice: number) {
    this.alumnos.removeAt(indice);
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
      cod_curso: '',
      num_grupo: null,
      nom_curso: '',
      nom_docente: '',
    })
    this.alumnos.controls.splice(0, this.alumnos.length);
  }



  addFormato(form: FormGroup) {
    this.submit();
    if (form.value._id) {
      this.silabosService.putFormato_1(form.value)
        .subscribe(res => {
          this.resetForm();
          alert('Update Successfuly');
          //M.toast({ html: 'Update Successfuly' });          
          this.getFormatos_1();
          this.refrescar();
        });
    } else {
      this.sub(form.value);
      this.silabosService.postFormato_1(form.value)
        .subscribe(res => {
          this.resetForm();
          alert('Created Successfuly');
          //M.toast({ html: 'Created Successfuly' });          
          this.getFormatos_1();
          this.refrescar();
        })
    }
    console.log(form.value);
  }

  getFormatos_1() {
    this.silabosService.getFormatos_1()
      .subscribe(res => {
        this.silabosService.formatos = res as Formato_1[];
        console.log(res);

      })

  }
  editFormato(formato_1: Formato_1) {
    this.silabosService.selectedFormato1 = formato_1;

  }

  deleteFormato(_id: string, form: FormGroup) {
    if (confirm('Estas seguro que deseas eliminarlo?')) {
      this.silabosService.deleteFormato_1(_id)
        .subscribe(res => {
          this.getFormatos_1();
          this.resetForm(form);
          alert('Deleted Successfuly');
          //M.toast({ html: 'Deleted Succesfully' });
        });
    }
  }



  resetForm(form?: FormGroup) {
    if (form) {
      form.reset();
      this.silabosService.selectedFormato1 = new Formato_1();
    }
  }

}
