import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  selectedCurso : Curso;
  cursos: Curso[];
  readonly URL_API = 'http://localhost:3000/curso';
  


  constructor(private http: HttpClient) { 
    this.selectedCurso = new Curso();
  }

  getCursos() {
    //return this.http.get(this.URL_API);
    return this.http.get<Curso[]>(this.URL_API);
  }


  postCurso(curso: Curso) {
    return this.http.post(this.URL_API, curso);
  }
  

  putCurso(curso: Curso) {
    return this.http.put(this.URL_API + `/${curso._id}`, curso);
  }

  deleteCurso(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
