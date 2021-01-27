import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Formato5 } from '../shared/Formato5';

@Injectable({
  providedIn: 'root'
})
export class Formato5Service {
  private urlEndPoint: string = 'http://localhost:3000/formato/5';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',})
  constructor(private http: HttpClient, private router: Router) { 

    
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Un error ha ocurrido:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend retorno el code ${error.status}, ` +
        `body was: ${error.error.errors}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'algo salio mal ;', error.error.mensaje);
  };
  
    getFormato5s(): Observable<Formato5[]> {
      // return of(Formato5S);
      return this.http.get<Formato5[]>(this.urlEndPoint);
    }
  
    create(Formato5: Formato5): Observable<Formato5> {
      return this.http.post<Formato5>(this.urlEndPoint, Formato5, {headers: this.httpHeaders}).pipe(
        catchError( e => {
  
          if(e.status === 400){
            this.handleError(e);
          }
          
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al crear',
            text: e.error.mensaje,
            showConfirmButton: true,
          });
          return this.handleError(e);
        })
      );
    }
  
    delete(id: number): Observable<Formato5> {
      const url = `${this.urlEndPoint}/${id}`;
      return this.http.delete<Formato5>(url, {headers: this.httpHeaders}).pipe(
        catchError( e => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al eliminar',
            text: e.error.mensaje,
            showConfirmButton: true,
          });
          return this.handleError(e);
        })
      );
    }
  
    get(id: number): Observable<Formato5> {
      const url = `${this.urlEndPoint}/${id}`;
      return this.http.get<Formato5>(url, {headers: this.httpHeaders}).pipe(
        catchError(e => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al consultar',
            text: e.error.mensaje,
            showConfirmButton: true,
          });
          this.router.navigate(['Formato5s'])
          return this.handleError(e);
        })
      );
    }
  
    save(id: number, Formato5: Formato5): Observable<Formato5>{
      const url = `${this.urlEndPoint}/${id}`;
      return this.http.put<Formato5>(url, Formato5, {headers: this.httpHeaders}).pipe(
        catchError( e => {
          if(e.status === 400){
            this.handleError(e);
          }
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al actualizar',
            text: e.error.mensaje,
            showConfirmButton: true,
          });
          return this.handleError(e);
        })
      );
    }
}
