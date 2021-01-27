
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Formato2Service } from 'src/app/services/formato2.service';
import { Curso } from 'src/app/shared/curso';
import { Delegado } from 'src/app/shared/delegado';
import { Formato2 } from 'src/app/shared/Formato2';


@Component({
  selector: 'sicofad-delegados',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './delegados.component.html',
  styleUrls: ['./delegados.component.scss']
})
export class DelegadosComponent implements OnInit {
  source: LocalDataSource;
  nuevoFormato=false;
  formato2: Formato2[];
  formato2table = new Array();
  today: number = Date.now();
  curso: Curso;
  destroyByClick = true;
  duration = 2500;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  title = 'guardado';
  content = `Se ha guardado con éxito`;
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: false,
    columns: {
      cod_curso: {
        title: 'Codigo',
        type: 'number',
        editable: false,
        addable: false,
      },
      num_grupo: {
        title: 'Grupo',
        type: 'number',
        editable: false,
        addable: false,
      },
      nom_curso: {
        title: 'Curso',
        type: 'string',
        editable: false,
        addable: false,
      },
      nom_docente: {
        title: 'Docente',
        type: 'number',
        editable: false,
        addable: false,
      },
      delegado: {
        title: 'Delegado',
        type: 'string',
        editable: false,
        addable: false,
      },
      subdelegado: {
        title: 'Subdelegado',
        type: 'string',
        editable: false,
        addable: false,
      },
      fecha: {
        title: 'Fecha',
        type: 'string',
        editable: false,
        addable: false,
      },
    },

    noDataMessage: 'No se encontraron datos',
  };
  Formato2Form: FormGroup;
  fechaActual: number = Date.now();
  constructor(private formato2Service: Formato2Service, private toastrService: NbToastrService) {

  }

  ngOnInit(): void {
    this.Formato2Form = new FormGroup({
      codigoCurso: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{7}')
      ]),
      nombreCurso: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      nombreDocente: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      grupo: new FormControl('', [
        Validators.required,
        Validators.pattern('[1-3]')
      ]),
      codigoDocente: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),
      codigoDelegado: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),
      nombreDelegado: new FormControl('', [
        Validators.required,
      ]),
      telefonoDelegado: new FormControl('', [

      ]),
      celularDelegado: new FormControl('', [
        Validators.required,

      ]),
      direccionDelegado: new FormControl('', [

      ]),
      emailDelegado: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      codigoSubDelegado: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]),
      nombreSubDelegado: new FormControl('', [
        Validators.required,
      ]),
      telefonoSubDelegado: new FormControl('', [

      ]),
      celularSubDelegado: new FormControl('', [
        Validators.required,
      ]),
      direccionSubDelegado: new FormControl('', [

      ]),
      emailSubDelegado: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
    });
    var formato;
    this.formato2Service.getFormato2s()
      .subscribe((formato2) => {
        this.formato2 = formato2;
        console.log(this.formato2)
        this.formato2.forEach((format) => {
          formato = new Object({
            "cod_curso": format.cod_curso,
            "num_grupo": format.num_grupo,
            "nom_curso": format.nom_curso,
            "nom_docente": format.nom_docente,
            "delegado": format.delegado.p_nombre,
            "subdelegado": format.subdelegado.p_nombre,
            "fecha": format.fecha
          });
          this.formato2table.push(formato);
        });
        this.source = new LocalDataSource(this.formato2table);
      });


  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `. ${title}` : '';
  
    this.toastrService.show(
      body,
      `formato ${titleContent}`,
      config);
  }

  onSubmit(): void {
    var formato:Formato2 ={
      "cod_curso": this.Formato2Form.get('codigoCurso').value,
      "num_grupo": this.Formato2Form.get('grupo').value,
      "nom_curso": this.Formato2Form.get('nombreCurso').value,
      "nom_docente": this.Formato2Form.get('nombreDocente').value,
      "delegado": {
        "p_nombre": this.Formato2Form.get('nombreDelegado').value,
        "p_codigo": this.Formato2Form.get('codigoDelegado').value,
        "p_email": this.Formato2Form.get('emailDelegado').value,
        "p_telefono": this.Formato2Form.get('telefonoDelegado').value,
        "p_celular": this.Formato2Form.get('celularDelegado').value,
        "p_direccion": this.Formato2Form.get('direccionDelegado').value
      },
      "subdelegado": {
        "p_nombre": this.Formato2Form.get('nombreSubDelegado').value,
        "p_codigo": this.Formato2Form.get('codigoSubDelegado').value,
        "p_email": this.Formato2Form.get('emailSubDelegado').value,
        "p_telefono": this.Formato2Form.get('telefonoSubDelegado').value,
        "p_celular": this.Formato2Form.get('celularSubDelegado').value,
        "p_direccion": this.Formato2Form.get('direccionSubDelegado').value
      },
      "fecha": this.fechaActual.toString(),
    };
    this.formato2Service.create(formato).subscribe(
      (formato2) => {
        console.log(formato2)
        var formato = new Object({
          "cod_curso": formato2.cod_curso,
          "num_grupo": formato2.num_grupo,
          "nom_curso": formato2.nom_curso,
          "nom_docente": formato2.nom_docente,
          "delegado": formato2.delegado.p_nombre,
          "subdelegado": formato2.subdelegado.p_nombre,
          "fecha": formato2.fecha
        });
        this.formato2table.push(formato);
        this.source.add(formato);
        this.nuevoFormato=true;
      });
      this.showToast(this.status, this.title, this.content);
      this.Formato2Form.reset();
  }


  changeTab():void {
    var formato;
    var formato2t = new Array();
    this.formato2Service.getFormato2s().subscribe(
      (formatos) => {
         formatos.forEach((format) => {
          formato = new Object({
            "cod_curso": format.cod_curso,
            "num_grupo": format.num_grupo,
            "nom_curso": format.nom_curso,
            "nom_docente": format.nom_docente,
            "delegado": format.delegado.p_nombre,
            "subdelegado": format.subdelegado.p_nombre,
            "fecha": format.fecha
          });
          formato2t.push(formato);
        });
        this.source.load(formato2t);
      });
      this.nuevoFormato = false;
  }

  

  get codigoCurso() { return this.Formato2Form.get('codigoCurso'); }
  get nombreCurso() { return this.Formato2Form.get('nombreCurso'); }
  get nombreDocente() { return this.Formato2Form.get('nombreDocente'); }
  get grupo() { return this.Formato2Form.get('grupo'); }
  get codigoDocente() { return this.Formato2Form.get('codigoDocente'); }
  get codigoDelegado() { return this.Formato2Form.get('codigoDelegado'); }
  get nombreDelegado() { return this.Formato2Form.get('nombreDelegado'); }
  get telefonoDelegado() { return this.Formato2Form.get('telefonoDelegado'); }
  get celularDelegado() { return this.Formato2Form.get('celularDelegado'); }
  get direccionDelegado() { return this.Formato2Form.get('direccionDelegado'); }
  get emailDelegado() { return this.Formato2Form.get('emailDelegado'); }
  get codigoSubDelegado() { return this.Formato2Form.get('codigoSubDelegado'); }
  get nombreSubDelegado() { return this.Formato2Form.get('nombreSubDelegado'); }
  get telefonoSubDelegado() { return this.Formato2Form.get('telefonoSubDelegado'); }
  get celularSubDelegado() { return this.Formato2Form.get('celularSubDelegado'); }
  get direccionSubDelegado() { return this.Formato2Form.get('direccionSubDelegado'); }
  get emailSubDelegado() { return this.Formato2Form.get('emailSubDelegado'); }
}

