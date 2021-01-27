import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Delegado } from '../shared/delegado';
import { DELEGADOS } from '../shared/delegados';
import { catchError, delay } from 'rxjs/operators'; 
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DelegadoService {
  private urlEndPoint: string = 'http://localhost:3000/delegados';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  constructor(private http: HttpClient, private router: Router) { }

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
  
    getDelegados(): Observable<Delegado[]> {
      // return of(DelegadoS);
      return this.http.get<Delegado[]>(this.urlEndPoint);
    }
  
    create(Delegado: Delegado): Observable<Delegado> {
      return this.http.post<Delegado>(this.urlEndPoint, Delegado, {headers: this.httpHeaders}).pipe(
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
  
    delete(id: number): Observable<Delegado> {
      const url = `${this.urlEndPoint}/${id}`;
      return this.http.delete<Delegado>(url, {headers: this.httpHeaders}).pipe(
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
  
    get(id: number): Observable<Delegado> {
      const url = `${this.urlEndPoint}/${id}`;
      return this.http.get<Delegado>(url, {headers: this.httpHeaders}).pipe(
        catchError(e => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al consultar',
            text: e.error.mensaje,
            showConfirmButton: true,
          });
          this.router.navigate(['Delegados'])
          return this.handleError(e);
        })
      );
    }
  
    save(id: number, Delegado: Delegado): Observable<Delegado>{
      const url = `${this.urlEndPoint}/${id}`;
      return this.http.put<Delegado>(url, Delegado, {headers: this.httpHeaders}).pipe(
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
