import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formato_1 } from '../../models/formato_1';

@Injectable({
  providedIn: 'root'
})
export class SilabosService {

  selectedFormato1: Formato_1;
  formatos: Formato_1[];
  readonly URL_API = 'http://localhost:3000/fomato/1';

  constructor(private http: HttpClient) {
    this.selectedFormato1 = new Formato_1();
  }

  postFormato_1(formato_1: Formato_1) {
    return this.http.post(this.URL_API, formato_1);
  }
  

  getFormatos_1() {
    return this.http.get(this.URL_API);
  }

  putFormato_1(formato_1: Formato_1) {
    return this.http.put(this.URL_API + `/${formato_1._id}`, formato_1);
  }

  deleteFormato_1(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
