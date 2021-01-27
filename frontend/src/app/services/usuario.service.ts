import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Usuario } from '../shared/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlEndPoint: string = 'http://localhost:3000/usuario';
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
  
    getUsuarios(): Observable<Usuario[]> {
      // return of(UsuarioS);
      return this.http.get<Usuario[]>(this.urlEndPoint);
    }
  
    create(Usuario: Usuario): Observable<Usuario> {
      return this.http.post<Usuario>(this.urlEndPoint, Usuario, {headers: this.httpHeaders}).pipe(
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
  
    delete(id: number): Observable<Usuario> {
      const url = `${this.urlEndPoint}/${id}`;
      return this.http.delete<Usuario>(url, {headers: this.httpHeaders}).pipe(
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
  
    get(id: number): Observable<Usuario> {
      const url = `${this.urlEndPoint}/${id}`;
      return this.http.get<Usuario>(url, {headers: this.httpHeaders}).pipe(
        catchError(e => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al consultar',
            text: e.error.mensaje,
            showConfirmButton: true,
          });
          this.router.navigate(['Usuarios'])
          return this.handleError(e);
        })
      );
    }
  
    save(id: number, Usuario: Usuario): Observable<Usuario>{
      const url = `${this.urlEndPoint}/${id}`;
      return this.http.put<Usuario>(url, Usuario, {headers: this.httpHeaders}).pipe(
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
