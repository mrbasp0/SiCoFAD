import { Component, OnInit } from '@angular/core';
import { ConstanciaService } from '../../Services/constancia.service'
import { Constancia } from '../../../models/constancia'
import { NgForm } from '@angular/forms'
import { FormBuilder, FormGroup, FormArray, Validator } from '@angular/forms';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbButtonModule } from '@nebular/theme';
@Component({
  selector: 'app-constancia',
  templateUrl: './constancia.component.html',
  styleUrls: ['./constancia.component.scss'],
  providers: [ConstanciaService]
})
export class ConstanciaComponent implements OnInit {

  constructor(public constanciaService: ConstanciaService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getConstancias();
  }

  sub(){
    console.log("Mostrar");
  }

  addConstancia(form?: NgForm) {
    if (form.value._id) {
      this.constanciaService.putConstancia(form.value).subscribe((res) => {
        this.resetForm(form);
        //M.toast({html: 'Agregado con Exito'});
        this.getConstancias();
      });
    } else {
      this.constanciaService.postConstancia(form.value).subscribe((res) => {
        this.getConstancias();
        this.resetForm(form);
      });
    }
  }

  getConstancias(){
    this.constanciaService.getConstancias().subscribe(res=>{
        this.constanciaService.constancias = res// as Constancia[]
      console.log(res)
    })
  }

  editConstancia(Constancia:Constancia){
    this.constanciaService.selectedConstancia = Constancia;
  }

  deleteConstancia(_id: string) {
    if (confirm("Are you sure you want to delete it?")) {
      this.constanciaService.deleteConstancia(_id).subscribe((res) => {
        this.getConstancias();
      });
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      //this.ConstanciaService.selectedConstancia = new Constancia();
    }
  }
}
