import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constancia } from '../../models/constancia';

@Injectable({
  providedIn: 'root'
})
export class ConstanciaService {

  selectedConstancia: Constancia;
  constancias: Constancia[];
  readonly URL_API = 'http://localhost:3000/constancia';

  constructor(private http: HttpClient) {
    this.selectedConstancia = new Constancia();
  }

  postConstancia(constancia: Constancia) {
    return this.http.post(this.URL_API, constancia);
  }  

  getConstancias() {
    return this.http.get<Constancia[]>(this.URL_API);
  }

  putConstancia(Constancia: Constancia) {
    return this.http.put(this.URL_API + `/${Constancia._id}`, Constancia);
  }

  deleteConstancia(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
