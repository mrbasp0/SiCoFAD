import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Docente } from '../../models/docente'
import { Curso } from '../../models/curso';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  selectedDocente: Docente;
  selectedCurso : Curso;
  cursos: Curso[];
  docentes: Docente[];
  readonly URL_API = 'http://localhost:3000/docente';
  readonly URL_AP = 'http://localhost:3000/curso';
  
  constructor(private http: HttpClient) {
    this.selectedDocente = new Docente();

  }

  getCursos() {
    return this.http.get(this.URL_AP);
  }  
  
  
  postDocente(docente: Docente) {
    return this.http.post(this.URL_API, docente);
  }
  

  getDocentes() {
    return this.http.get(this.URL_API);
  }

  putDocente(docente: Docente) {
    return this.http.put(this.URL_API + `/${docente._id}`, docente);
  }

  deleteDocente(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }


}
