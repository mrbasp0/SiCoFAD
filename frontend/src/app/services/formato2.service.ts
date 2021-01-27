import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Formato2 } from '../shared/Formato2';

@Injectable({
  providedIn: 'root'
})
export class Formato2Service {
  private urlEndPoint: string = 'http://localhost:3000/formato/2';
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
  
    getFormato2s(): Observable<Formato2[]> {
      // return of(Formato2S);
      return this.http.get<Formato2[]>(this.urlEndPoint);
    }
  
    create(Formato2: Formato2): Observable<Formato2> {
      return this.http.post<Formato2>(this.urlEndPoint, Formato2, {headers: this.httpHeaders}).pipe(
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
  
    delete(id: number): Observable<Formato2> {
      const url = `${this.urlEndPoint}/${id}`;
      return this.http.delete<Formato2>(url, {headers: this.httpHeaders}).pipe(
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
  
    get(id: number): Observable<Formato2> {
      const url = `${this.urlEndPoint}/${id}`;
      return this.http.get<Formato2>(url, {headers: this.httpHeaders}).pipe(
        catchError(e => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al consultar',
            text: e.error.mensaje,
            showConfirmButton: true,
          });
          this.router.navigate(['Formato2s'])
          return this.handleError(e);
        })
      );
    }
  
    save(id: number, Formato2: Formato2): Observable<Formato2>{
      const url = `${this.urlEndPoint}/${id}`;
      return this.http.put<Formato2>(url, Formato2, {headers: this.httpHeaders}).pipe(
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
