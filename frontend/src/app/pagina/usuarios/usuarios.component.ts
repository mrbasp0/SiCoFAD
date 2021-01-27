import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/shared/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  source: LocalDataSource;
  UsuarioForm: FormGroup;
  usuarios: Usuario[];
  users = new Array();
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
      user: {
        title: 'Usuario',
        type: 'string',
        editable: false,
        addable: false,
      },
      pass: {
        title: 'Contraseña',
        type: 'string',
        editable: false,
        addable: false,
      },
      rol: {
        title: 'Rol',
        type: 'string',
        editable: false,
        addable: false,
      },
    },

    noDataMessage: 'No se encontraron datos',
  };

  constructor(private usuarioService: UsuarioService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.UsuarioForm = new FormGroup({
      usuario: new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      rol: new FormControl('', [
        Validators.required,
      ]),
    });
  
    this.usuarioService.getUsuarios()
      .subscribe((usuarios) => {
        var user ={};
        this.usuarios = usuarios;
        console.log(this.usuarios)
        this.usuarios.forEach(usuario => {
          if(usuario.rol == 1){
            user = {user: usuario.user, pass: usuario.pass, rol: "Profesor"};
          }
          else if(usuario.rol == 2){
            user = {user: usuario.user, pass: usuario.pass, rol: "Secretaria"};
          }
          else if(usuario.rol == 3){
            user = {user: usuario.user, pass: usuario.pass, rol: "Director"};
          }
          else if(usuario.rol == 4){
            user = {user: usuario.user, pass: usuario.pass, rol: "Otro"};
          }
         this.users.push(user);
        })
        this.source = new LocalDataSource(this.users);
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
      `usuario ${titleContent}`,
      config);
  }
  onSubmit():void{
    var u; 
    var us = {
      "user": this.UsuarioForm.get('usuario').value,
      "pass": this.UsuarioForm.get('password').value,
      "rol": this.UsuarioForm.get('rol').value,
    }
    this.usuarioService.create(us).subscribe(
      (usuario) =>  {
        if(usuario.rol == 1){
          u = {user: usuario.user, pass: usuario.pass, rol: "Profesor"};
        }
        else if(usuario.rol == 2){
          u = {user: usuario.user, pass: usuario.pass, rol: "Secretaria"};
        }
        else if(usuario.rol == 3){
          u = {user: usuario.user, pass: usuario.pass, rol: "Director"};
        }
        else if(usuario.rol == 4){
          u = {user: usuario.user, pass: usuario.pass, rol: "Otro"};
        }
        this.users.push(u);
        this.usuarios.push(usuario);
        this.source.add(u);}
        );
    this.showToast(this.status, this.title, this.content); 
    this.UsuarioForm.reset();
  }
  changeTab():void {
    var user;
    this.usuarioService.getUsuarios()
      .subscribe((usuarios) => {
        this.usuarios = usuarios;
        this.usuarios.forEach(usuario => {
          if(usuario.rol == 1){
            user = {user: usuario.user, pass: usuario.pass, rol: "Profesor"};
          }
          else if(usuario.rol == 2){
            user = {user: usuario.user, pass: usuario.pass, rol: "Secretaria"};
          }
          else if(usuario.rol == 3){
            user = {user: usuario.user, pass: usuario.pass, rol: "Director"};
          }
          else if(usuario.rol == 4){
            user = {user: usuario.user, pass: usuario.pass, rol: "Otro"};
          }
         this.users.push(user);
        })
        this.source.load(this.users);
      });
  }

  get usuario() {return this.UsuarioForm.get('usuario');}
  get password() {return this.UsuarioForm.get('password');}
  get rol() {return this.UsuarioForm.get('rol');}
}
